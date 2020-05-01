// import React, { Component } from 'react'
// import { Checkbox, Radio ,Button} from 'antd';

// //进度条函数
// function Unit(props){ 
//         const{count,allcount}=props
//         return <div>
//             <span className='gray'>
//                 <span className='blue' style={{width:[Math.ceil(count/allcount*80),'%'].join('')}}></span>
//             </span>
//             <span className='text'>{count}</span>
//         </div>
   
// }
// function CheckHtml(props) {
//         return <Checkbox.Group style={{width:'100%'}}  onChange={props.checkFunc}>
//             {
//                 props.options.map(item=>{
//                     return <div key={item.option_id}>
//                         {/* 一个多选框和一个进度条 */}
//                         <Checkbox value={item.option_id}>{item.option_name}</Checkbox>
//                         <Unit count={item.count} allcount={props.allcount}/>
//                     </div>
//                 })
//             }
            
//         </Checkbox.Group>
// }
// // 单选组件
// function RadioHtml(props) {
//         return <Radio.Group style={{width:'100%'}}  onChange={props.radioFunc}>
//                  {
//                     this.props.options.map(item=>{
//                         return <div key={item.option_id}>
//                             {/* 一个多选框和一个进度条 */}
//                             <Radio value={item.option_id}>{item.option_name}</Radio>
//                             <Unit count={props.allcount} allcount={props.allcount}/>
//                         </div>
//                     })
//                 }   
            
//         </Radio.Group>
// }
// export default class detail extends Component {
//     state={
//         item:this.props.location.state,//传过来的item
//         options:[],
//         isChecked:false,
//         submitData:[],
//         isShow:'yes'
//     }
   
//     render() {
//         //options是当前问题的所有选项
//         const {item,options,isShow}=this.state;
//         let allcount=0;
//         options.forEach(item=>allcount=allcount+item.count)
//         // options.forEach(item=>allcount+=item.count)
//         //提交按钮是否出来 要满足两个条件
//         // 1 判断用户是否投过票 isSubmit
//         // 2 判断截止日期 小于当前时间 也不能投票了
//         return (
//             <div>
//                 <div>
//                     {item.anonymous===1?'匿名发起者':item.name}
//                     <span onClick={()=>this.props.history.push({pathname:'/echarts',state:{...item,options}})}>统计</span>
//                     截止时间:{this.$timer(item.deadline)}
//                 </div>
//                 {/* 渲染title */}
//                 <div>{item.title}</div>
//                 {/* 渲染单选框 或者多选框 */}
//                 <div>
//                     {item.isRadio===1?<RadioHtml options={options} radioFunc={this.radioFunc} allcount={allcount}/>:<CheckHtml options={options} checkFunc={this.props.checkFunc} allcount={allcount} />}
                    
//                 </div>
//                 {/* 提交按钮 */}
//                 {
//                     <Button onClick={()=>this.submit()}>提交</Button>
//                 }
               
//             </div>
             


//         )
        
//     }
//     //单选函数
//     radioFunc=(e)=>{
//         const{submitData}=this.state
//         this.setState({submitData:[e.target.value]})
//     }
//     //多选函数
//     checkFunc=(checkedValues)=>{
//         const{submitData}=this.state
//         submitData=[...checkedValues]
//         this.setState({submitData:[...checkedValues]})
//     }
//     componentDidMount=()=>this.initData()
//     //提交数据
//     submit=async()=>{
//        const {submitData}=this.state
//        let res=await this.http('post','/ticket/update',{submitData})
//        const {code,msg}=res.data
//        if(code===0)
//        {
//            this.initData()
//        }
//        //给出对应提示
//        alert(msg)
//     }
//     //初始化数据请求
//     initData=async ()=>{
//         //根据当前点击的数据id 进行查找
//         const {id,deadline} =this.state.item;
//         let res=await this.http('post','/detail/option',{id});
//         const {code,msg,data}=res.data;
//         if(code===0){
//             data.option.forEach(item=>{
//                 data.option.check=false
//             })
//             let isShow=data.isSubmit==='yes'&&deadline>new Date().getTime()?'yes':'no';
//             this.setState({options:data.option,isShow})
//             return
//         }
//         alert(msg)
//     }
// }

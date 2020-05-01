import React, { Component } from 'react'
import { Checkbox, Button,Radio } from 'antd';

// 单多选组件写一起
function Htmls(props){
    const {isRadio} = props;
    let Str      = isRadio===1? Radio.Group:Checkbox.Group
    let SmallStr = isRadio===1? Radio:Checkbox
    return <div>
        <Str style={{width:'100%'}}  onChange={props.changeFunc}>
        {
        props.options.map(item=>{
            return <div  key={item.option_id}>
                    <SmallStr value={item.option_id}>{item.option_name}</SmallStr>
                    <Unit count={item.count} allcount={props.allcount}/>
                </div>
            })
        }
        </Str> 
  </div> 
}

//进度条组件
function Unit(props){
    const {count,allcount} = props;
    console.log(count,allcount)
    let str = Math.ceil(count/allcount*80)+'%';
    return <div>
        <span className="gray">
            <span className="blue" style={{width:str}}></span>
        </span> 
        <span className="text">{count}</span>
    </div>
}

export default class Detail extends Component {
    state = {
        item:this.props.location.state,
        options:[],
        submitData:[],
        // isShow:'yes'
    }

    changeFunc = val =>{
        const {isRadio} = this.state.item
        //单选情况
        if(isRadio === 1){
            this.setState({submitData:[val.target.value]})
            return
        }
        //多选情况
        this.setState({submitData:[...val]})
    }

    render() {
        const {item,options,isShow} = this.state;
        let allcount = 0;
        options.forEach(item=>allcount += item.count);
        
        //按钮是否出来 要满足两个条件
        //1 判断用户是否投过票 isSubmit
        //2 判断截止日期 小于当前时间 就不能再投票
        return  <div>
                    <div>
                        {item.anonymous === 1?'匿名发起者':item.name}  |  
                        <span onClick={()=>this.props.history.push({pathname:'/echarts',state:{...item,options}})}>统计</span> 丨
                        截止时间：{this.$timer(item.deadline)}
                    </div>
                    {/* 渲染title */}
                    <div>{item.title}</div>

                    {/* 渲染单选或者多选框 */}
                    <div>
                        <Htmls isRadio={item.isRadio} options={options} changeFunc={this.changeFunc} allcount={allcount}/>
                    </div>  

                {/* 提交按钮 */}
                {
                   <Button onClick={()=>this.submit()}>提交</Button>
                }
            </div> 
    }

    componentDidMount = ()=> this.initData()
 
    // 数据提交函数
    submit= async ()=>{
        const {submitData,item} = this.state;
        let res = await this.http('post','/detail/update',{submitData,id:item.id});
        const {code,msg} = res.data;
        // 更新页面数据
        if(code===0) this.initData()
        //给出对应提示
        alert(msg)
    }

    // 初始化数据请求
    initData = async ()=>{
        const {id,deadline} = this.state.item;
        let res = await this.http('post','/detail/option',{id});
        const {code,msg,data} = res.data;
        if(code === 0){
            // let isShow = data.isSubmit === 'yes' && deadline>new Date().getTime()?'yes':'no';
            this.setState({options:data.option})
            return
        }
        alert(msg)
    }
}

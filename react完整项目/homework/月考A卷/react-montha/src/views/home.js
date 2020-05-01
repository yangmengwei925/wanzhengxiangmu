import React, { Component } from 'react'
import {connect} from 'react-redux'
import store from '../store/store'
 class home extends Component {
     state={
         defaultIndex:0,
         callback:item=>true,
         title:[
             {
                 name:'全部',
                 callback:item=>true
             },
             {
                 name:'已结束',
                 callback:item=>item.deadline<=new Date().getTime()
             },
             {
                 name:'正在进行',
                 callback:item=>item.deadline>new Date().getTime()
             }
         ]
     }
    render() {
        const{list}=this.props  
        const{defaultIndex,title,callback}=this.state
        return (
            <div>
                <p>列表 <span onClick={()=>this.props.history.push('/add')}>发起投票</span></p>
                <div>
                    {/* tab切换 */}
                    <div>
                        {title.map((item,index)=>(
                            <span key={index} className={defaultIndex===index?'active':''} onClick={()=>this.changeData(index,item.callback)}>{item.name}</span>
                        ))}
                    </div>
                    {/* 切换的内容 */}
                    <div>
                        {/* 先过滤callback条件,再遍历 */}
                        {
                            list.filter(callback).map(item=>(
                                <div key={item.id} onClick={()=>this.props.history.push({pathname:'/detail',state:item})}>
                                    <p>{item.id}</p>
                                    <p>{item.title}</p>
                                    {/* 截止日期是一串未经转换的数字,需要转换 */}
                                    <p>{this.$timer(item.deadline)}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
    //切换数据的点击事件
    changeData=(index,callback)=>this.setState({defaultIndex:index,callback})
    componentDidMount=()=>this.props.initData.call(this)
}
let a=store=>{
    const {list}=store
    return{
        list
    }
}
let b=dispatch=>{
    return{
        //获取list列表
        async initData(){
            let res=await this.http('get','list')
            const {code,msg,data}=res.data
            //如果数据请求成功,将数据存在数据仓库里
            if(code===0)
            {
                dispatch({type:'CHANGE_LIST',list:data.list})
            }
            // alert(msg)
        }
    }
}
export default connect(a,b)(home)



import React, { Component } from 'react'
import { DatePicker ,Button} from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
export default class add extends Component {
    // 数据库里相对应的键
    state={
        title:'',
        description:'',
        isRadio:1,
        anonymous:2,
        deadline:null,
        option:[]
    }
    render() {
        const{title,description,isRadio,anonymous,deadline,option}=this.state;
        return (
            <div>
                <div>标题:<input type='text' value={title} onChange={e=>this.setState({title:e.target.value})}/></div>
                <div>描述:<input type='text' value={description} onChange={e=>this.setState({description:e.target.value})}/></div>
                <div>单/多选:
                    <select value={isRadio} onChange={e=>this.setState({isRadio:e.target.value})}>
                        <option value="1">单选</option>
                        <option value="2">多选</option>
                    </select>
                </div>
                <div>是否匿名:
                <select value={anonymous} onChange={e=>this.setState({anonymous:e.target.value})}>
                        <option value="1">匿名</option>
                        <option value="2">不匿名</option>
                    </select>
                </div>
                <div>截止日期:
                <DatePicker onChange={(date,dateString)=>this.setState({deadline:new Date(dateString).getTime()})} showTime={true}/><br />
                </div>
                <div>选项:
                    <div>
                        {option.map(item=><div key={item.id}>
                            {item.value} 
                            <span onClick={()=>this.deleteOption(item.id)}>删除</span>
                        </div>)}
                    </div>
                    <div>
                        <input type="text" ref='optionVal'/> <span onClick={this.addOption}>添加选项</span>
                    </div>
                </div>
                <Button onClick={this.subData}>提交</Button>
            </div>
        )
    }
    //添加选项
    addOption=()=>{
        let {option}=this.state;
        let id=JSON.stringify(new Date().getTime())
        option.push({
            id:Number(id.slice(-6)),
            value:this.refs.optionVal.value,
            count:0
        })
        this.setState({option:[...option]})
    }
    //删除选项
    deleteOption=(id)=>{
       let {option}=this.state;
       let index=option.findIndex(item=>item.id===id)
       option.slice(index,1)
       this.setState({option:[...option]})
    }
    //提交数据
    subData=async ()=>{
        console.log(this.state)
        //非空校验
        let typeNull=[];
        Object.keys(this.state).forEach(item=>{
            if(this.state[item]==='')
            {
                typeNull.push(item)
            }
        })
        //非空里边接收东西的时候  也就是有的input框里面没有东西
        if(typeNull.length>0)
        {
            return alert(typeNull[0]+'不能为空')
        }
        //提交
        let res=await this.http('post','/add',this.state)
        alert(res.data.msg)
    }
    
}

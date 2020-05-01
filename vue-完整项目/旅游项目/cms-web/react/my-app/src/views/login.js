import React, { Component } from 'react'

export default class login extends Component {
    state={
        isShow:true
    }
    render() {
        const{isShow}=this.state
        return (
            <div>
                <input type="text" ref='username'/><br/>
                <input type="text" ref='password'/><br/>
                {
                    isShow?<div>
                        <button onClick={()=>this.submitFunc('/login')}>登录</button>
                        <p onClick={()=>this.setState({isShow:false})}>没有账号,去注册</p>
                    </div>:<div>
                        <button onClick={()=>this.submitFunc('/register')}>注册</button>
                        <p  onClick={()=>this.setState({isShow:true})}>已有帐号,去登录</p>
                    </div>
                }
                
            </div>
        )
    }
    submitFunc=async (url)=>{
        let submitData={
            username:this.refs.username.value,
            password:this.refs.password.value
        }
        if(submitData.username==='') return alert('帐号不能为空')
        if(submitData.password==='') return alert('密码不能为空')
        let res=await this.http('post',url,submitData)
        const{code,msg,data}=res.data
        alert(msg)
        if(code===0)
        {
            localStorage.setItem('token',data.token)
            this.props.history.push('/home')
        }
    }
}

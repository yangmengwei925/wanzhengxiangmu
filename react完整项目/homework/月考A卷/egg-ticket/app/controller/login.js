'use strict';

const Controller = require('egg').Controller;
const jwt=require('jsonwebtoken')
class LoginController extends Controller {
  async login() {
    const { ctx ,app} = this;
    const{username,password}=ctx.request.body;
    let res=await ctx.service.user.find(username)
    if(res.length===0)
    {
      ctx.body=app.sendMsg(1,'账户不存在')
      return
    }
    if(res[0].password!==password)
    {

      ctx.body=app.sendMsg(1,'密码错误')
      return
    }

    let signData={
      ...res[0],
      signTime:new Date().getTime()
    }
    let token=jwt.sign(signData,app.config.keys)
    ctx.body=app.sendMsg(0,'登录成功',{token})
  }
  async register(){
    const { ctx,app } = this;
    const{username,password}=ctx.request.body;
    let res=await ctx.service.user.find(username)
    //先判断要注册的帐号是否存在
    if(res.length>0)
    {
      ctx.body=app.sendMsg(1,'帐号已存在')
      return
    }
    //不存在该账户,就注册
    let regRes=await ctx.service.user.register(username,password)
    if(regRes.affectedRows===1)
    {
      ctx.body=app.sendMsg(0,'注册成功')
      return
    }
    ctx.body=app.sendMsg(1,'服务器故障,注册失败')
  }
}

module.exports = LoginController;

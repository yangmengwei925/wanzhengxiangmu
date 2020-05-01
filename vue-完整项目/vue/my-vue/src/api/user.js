//用户相关的接口
import request from '../util/request'
//登录接口
export let login =(username,password)=>request.post('/api/login',(username,password))
//注册接口
export let registry=(username,password)=>request.post('/api/registry',(username,password))

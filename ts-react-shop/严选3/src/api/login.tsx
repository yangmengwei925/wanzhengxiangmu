import axios from '../utils/request'

// 登陆接口
export let login = (mobile:string, password:string)=>{
    return axios.post('/auth/loginByMobile', {
        mobile,
        password
    })
}
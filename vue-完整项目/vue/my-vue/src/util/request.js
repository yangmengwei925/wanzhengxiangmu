//axios 二次封装
import axios from 'axios'
let instance = axios.create();

function getCookie(key) {
    let arr = document.cookie.split(";"); //[csrfToken=]
    let val = "";
    arr.forEach(item => {
        let bArr = item.split("="); //[csrfToken=]
        if (bArr[0] === key) {
            val = bArr[1]
        }
    })
    return val
}
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    //前端登录成功放token  x-csrf-token
    //console.log(config)
    //登录和注册不需要token 拦截前端请求
    let writePath=['/api/login','/api/registry'];
    return writePath.includes(config.url) ? {
        ...config,
        headers: {
            ...config.headers,
            //把token取出来就带过去了,通过document.cookie可以拿到x-csrf-token的值
            "x-csrf-token": getCookie('csrfToken') //取出来csrfToken
        }
    }:{
        ...config,
        headers: {
            ...config.headers,
            //把token取出来就带过去了,通过document.cookie可以拿到x-csrf-token的值
            "x-csrf-token": getCookie('csrfToken') ,//取出来csrfToken
            token:window.localStorage.getItem('token')
        }
    }  
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default {
    get(url, params) {
        return instance.get(url, params)
    },
    post(url, params) {
        return instance.post(url, params)
    },
    put(url, params) {
        return instance.put(url, params)
    }
}
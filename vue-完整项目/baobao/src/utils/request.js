import axios from 'axios';
import router from '@/router/index.js'
import {Alert} from '@/plugins/alert'

const baseURL=process.env.NODE_ENV === 'production'?'':'/api';

const request = axios.create({
    baseURL
})

//请求前拦截
request.interceptors.request.use(function(config){
    return config;
},function(error){
    return Promise.reject(error);
})

//请求结果拦截
request.interceptors.response.use(function(data){
    return data
},function(error){
    switch(error.response.status){
        case 404:
            Alert('接口走丢了',2);
            router.push('/404');
        break;
        case 401:
            Alert('您可能未登录，或者登录过期，请重新登录')
            router.replace('/login')
        break;
        case 403:
            Alert('您暂无该权限')
        break;
        case 500:
            Alert('服务器错误啦')
        break;
        case 406:
            Alert('可能您的参数不合法');
        break;
        default:
            Alert('报错了!')
    }
    return Promise.reject(error)
})

export default {
    get(url,params={}){
        return request.get(url,{params})
    },
    post(url,data={}){
        return request.post(url,data)
    },
    put(url,data={}){
        return request.put(url,data)
    },
    delete(url,config={}){
        return request.delete(url,config)
    }
}
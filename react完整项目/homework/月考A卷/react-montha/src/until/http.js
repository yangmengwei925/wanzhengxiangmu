import axios from 'axios'

export default function http(method,url,data=[])
{
    let configData={};
    let type=method==='get'?'params':'data'
    configData.method=method
    configData.url=url
    configData[type]=data
    configData.headers={
        token:localStorage.getItem('token')
    }
    return axios(configData).catch(error=>{
        if(error.response.status===404)
        {
            return alert('页面/接口找不到')
        }
        if(error.response.status===500)
        {
            return alert('服务器报错')
        }
    })
}
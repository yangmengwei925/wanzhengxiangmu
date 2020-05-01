import Axios from 'axios'
import { getToken } from './index'
import { Toast } from 'antd-mobile';

const httpAxios = Axios.create({
  baseURL: '//easymarket.jasonandjay.com/',
  timeout: 5000,
  // headers: { 'X-Custom-Header': 'foobar' }
})

// 添加请求拦截器
httpAxios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (getToken() && config.url !== "http://123.206.55.50:11000/upload") {
    config.headers['x-nideshop-token'] = getToken();
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  Toast.info(error.toString());
  return Promise.resolve();
});

// 添加响应拦截器
httpAxios.interceptors.response.use(function (response) {
  // 对响应数据做点什么

  if (response.status != 200 || (response.data.errno && response.data.errno !== 0) || (response.data.code && response.data.code !== 1)) {
    // 做个错误提示，抛出Promise.resolve
    Toast.info(response.data.errmsg);
    return Promise.resolve();
  } else {
    return response.data;
  }
}, function (error) {
  // 对响应错误做点什么
  Toast.info(error.toString());
  return Promise.resolve(error);
});

export default httpAxios

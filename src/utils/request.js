import axios from "axios";
import { getToken } from "./session";

/**
 * 请求拦截
 */

//第一步，创建实例
const service = axios.create({
    baseURL: 'http://121.89.203.83:8080',
    timeout: 5000,
    // headers: {'X-Custom-Header': 'foobar'}
  });

//第二步，请求拦截
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    //添加token凭证
  const Authorization = getToken();

  if (Authorization && Authorization !== "undefined") {
    // headers 每个请求都需要用到的
    axios.defaults.headers.common["Authorization"] = "Bearer "+Authorization;
    // newOptions.headers["Authorization"] =
    //   "Bearer b914d783-52e4-4ccb-8fb7-2282fbe9bf43";
  }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

//第三步，响应拦截
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default service;
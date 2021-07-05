/**
 * 要求：能根据接口文档定义几口请求
 * 包含应用中所有接口请求函数的模块
 * 每个函数的返回值都是promise
 */
 import ajax from './ajax';

 const BASE = 'http://172.20.22.60:8080';
 
 //登录
 // export function reqLogin(username, password) {
 //     ajax('/login', {username, password}, "POST")
 // }
//  export const reqLogin = (username, password) => ajax(BASE + '/login', {username, password}, "POST");
 export const reqLogin = (username, password) => ajax(BASE + '/uaa/login/token?'+'username='+username+"&password="+password, {username, password}, "POST");
 
 //获取所有用户列表
 export const reqUsers = () => ajax(BASE + '/ucenter/admin/sys/user/getList',{"pageNum": 1, "pageSize": 100, "sortBy": ""},'POST');
 
 //删除指定用户
 export const reqDeleteUser = (userId) => ajax(BASE + '/manage/user/delete', {userId}, 'POST');
 
 
 //添加或修改用户
 export const reqAddOrUpdateUser = (user) => ajax(BASE + '/manage/user/'+(user._id ? 'update' : 'add'), user, 'POST');

 //查看或编辑用户

 export const reqViewOrEdit = (userId) => ajax(BASE +'/ucenter/admin/sys/user/detail/'+userId,{userId},'GET');
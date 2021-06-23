import cookies from 'react-cookies';


const tokenAdmin = 'adminToken';

//存储token
export function setToken(token){
    cookies.save(tokenAdmin,token);
    
}

//获取token
export function getToken(){
    return cookies.load(tokenAdmin);
}

//删除token
export function removeToken(){
    cookies.remove(tokenAdmin);
}

const username = "username";
//存储用户名
export function setUsername(value){
    cookies.save(username,value);
}

//删除用户名
export function removeUsername(){
    cookies.remove(username);
}
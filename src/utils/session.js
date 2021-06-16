

const tokenAdmin = 'adminToken';

export function setToken(token){
    sessionStorage.setItem(tokenAdmin,token);
    
}

export function getToken(){
    return sessionStorage.getItem(tokenAdmin);
}

export function removeToken(){
    sessionStorage.removeItem(tokenAdmin);
}
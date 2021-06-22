import service from '../../src/utils/request';

/**
 * 登录接口
 */
export function LoginAPI(data){{
    return service.request({
        url: '/uaa/login/token?',
        method: "POST",
        data: data,// 请求类型为post时
        // params: data, //请求类型为get时
    })
}}
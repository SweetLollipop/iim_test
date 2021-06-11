import React from 'react';
import { Route, Redirect} from "react-router-dom";
import { getToken } from '../../utils/session';

/**
 * 
 * 私有化路由：判断token是否有值，进行安全路由显示后台页面。
 *  
 */
const PrivateRouter = ({ component : Component, ...rest}) =>{
    return(
        <Route {...rest} render = {routeProps => (
            getToken() ? <Component {...routeProps} /> : <Redirect to ='/login' />
        )}/>
    );
}

export default PrivateRouter;
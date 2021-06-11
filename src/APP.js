import React , { Component} from 'react';
// import { message,Button } from 'antd';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Login from './pages/login/login';
import Admin from './pages/admin/admin';
import PrivateRouter from './components/privateRouter';
/**
 * 应用组件
 */
export default class App extends Component{


    // handleClick=()=>{
    //     message.success('成功啦...');
    // }

    render(){
        // return <Button type="primary" onClick={this.handleClick}>测试按钮</Button>

        return(
            <BrowserRouter>
                <Switch> {/* 只匹配其中一个 */}
                    {/* <Route path='/login' component={Login}></Route>
                    <Route path='/' component={Admin}></Route> */}
                    <Route exact path='/login' component={Login}/>
                    <PrivateRouter path='/' component={Admin} />
                    
                    <Redirect to ='/login' />
                </Switch>
            </BrowserRouter>
        )
    }
}
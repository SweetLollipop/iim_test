import React, {Component} from 'react';
import {Form,Input,Button,message,Checkbox} from 'antd';
import { TabletOutlined, LockOutlined } from '@ant-design/icons';
import './login.less';
// import logo from './images/logo.png';
import memoryUtils from '../../utils/memoryUtils';
import storageUtils from '../../utils/storageUtils';
import {reqLogin} from '../../api';
import {setToken} from "../../utils/session";

const Item = Form.Item //不能写在import之前

/**
 * 登录的路由组件
 * 
 */
export default class Login extends Component{
    
    constructor(props){
        super(props);
        this.state={

        }
    }

    getFormData = (event) => {  
        // event.preventDefault();
        console.log("formData:",this.refs.loginInfoForm.getFieldValue());
    };

    //提交表单且数据验证成功后回调事件
    
    onFinish = async (values) => {
        
        // console.log('Received values of form: ', values);
        //const {username,password} = values;
        // reqLogin(username,password).then(response => {
        //     //console.log('请求成功了',response.data)
        //     const result = response.data //{status:0, data: user} {status:1, msg:'xxx'}
        //     if(result.status===0){//登录成功
        //         message.success('登录成功'); //提示登录成功
        //         this.props.history.replace('/'); //跳转到管理页面，且不需要回退到登录
        //     }else{//登录失败
        //         message.error(result.msg);//提示错误信息
        //     }
        // }).catch(error => {
        //     console.log('请求失败了',error)
        // })
        const username = values.username;
        const password = btoa(values.password);//加密
        console.log(username,password);
        // const {username,password} = values;

        //const response = await reqLogin(username,password);
        //const result = response.data //{status:0, data: user} {status:1, msg:'xxx'}
        //const result = await reqLogin(username,password);
        //if(result.status===0){//登录成功

        // if(username==="18888888888"  && password==="a12345"){//登录成功 写死
        //     message.success('登录成功'); //提示登录成功
            
        //     const user = {username:"18888888888", password:"a12345"} //写死，原来没有
        //     //保存user
        //     const result = {status:0, data: user}
        //     //const user = result.data
           
        //     memoryUtils.user = user; //保存在内存中☆

        //     this.props.history.replace('/'); //跳转到管理页面，且不需要回退到登录
        // }else{//登录失败
        //     const result = {status:1, msg:'登录失败'}
        //     message.error(result.msg);//提示错误信息
        // }
        
        const result = await reqLogin(username,password);
        if(result.code===200){//登录成功
            message.success('登录成功'); //提示登录成功

            //存储token
            console.log(result.data.access_token);
            setToken(result.data.access_token);

            //保存user
            const user = result.data
            memoryUtils.user = user; //保存在内存中☆
            storageUtils.saveUser(user) //保存到local中

            this.props.history.replace('/home'); //跳转到管理页面，且不需要回退到登录
        }else{//登录失败
            message.error(result.msg);//提示错误信息
        }
    };

    //提交表单且数据验证失败后回调事件
    onFinishFailed = ({values, errorFields, outOfDate }) =>{
        console.log('Failed to receive form data: ', values, 'Failure field:', errorFields, 'outOfDate:', outOfDate);
    }

    // const { getFieldDecorator, validateFields } = form;

    // const handlOnsave = useCallback(() => {
    //     validateFields((err: any, fieldsValue: any) => {
    //     if (err) return;
    //     const { check = [] } = fieldsValue;
    //     fieldsValue.password = btoa(fieldsValue.password);
    //     let res = {
    //         ...fieldsValue,
    //         check: check[0],
    //         isNeedCaptcha: false
    //     };
    //     //delete fieldsValue.check;
    //     dispatch({
    //         type: "login/password",
    //         params: [res]
    //     }).then((v: any) => {
    //         if (v.code === 200) {
    //         message.info("登录成功");
    //         window.location.href = "/#/web";
    //         }
    //         if (v.code === 5000) {
    //         message.error("账号不存在");
    //         }
    //         if (v.code === 3000) {
    //         message.error("登录密码错误");
    //         }
    //         if (v.code === 3001) {
    //         message.error("您的账号已停用，请联系管理员");
    //         }
    //     });
    //     });
    // }, [dispatch, validateFields]);

    // const enter = (e: any) => {
    //     if (e.nativeEvent.keyCode === 13) {
    //     //e.nativeEvent获取原生的事件对像
    //     handlOnsave();
    //     }
    // };
    

render(){
    return(
        <div style={{height:'100%'}}>
            <div>
                <div class="style_body" style={{height: 'calc(100vh - 60px)'}}>
                    <div class="style_loginFlex">
                        <div class="style_jieshao">
                            <p>欢迎登录账号</p>
                            <div class="style_divide"></div>
                            <p>工业互联网检测与服务平台</p>
                            <p>Industrial Internet monitoring and service platform</p>
                        </div>
                        <div className='style_psw'>
                            <section className='login-content'>
                                <div class="style_pswtag">登录账号</div>
                                <Form
                                    ref="loginInfoForm"
                                    name="normal_login"
                                    className="login-form"
                                    // initialValues={{ remember: true }}
                                    onFinish={this.onFinish}
                                    onFinishFailed={this.onFinishFailed}
                                >
                                    <Form.Item
                                        name="username"
                                        className="login-username"
                                        rules={[
                                            // { required: true, message: '用户名不能为空！' },
                                            // { min: 4, message: '用户名至少4位' },
                                            // { max: 12, message: '用户名最多12位' },
                                            // { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成' },
                                            {required:true, pattern:/^1[34578]\d{9}$/, message: "请输入正确的手机号码"}
                                        ]}
                                    >
                                        <Input prefix={<TabletOutlined className="site-form-item-icon"/>} placeholder="请输入手机号" />
                                    </Form.Item>
                                    <Form.Item
                                        name="password"
                                        className="login-password"
                                        rules={[
                                            // ({
                                            //     validator(rule, value) {
                                            //     if (!value) {
                                            //         return Promise.reject(new Error('密码不能为空'));
                                            //         //return Promise.resolve();
                                            //     }else if(value.length<4){
                                            //         return Promise.reject(new Error('密码长度不能小于4位'));
                                            //     }else if(value.length>12){
                                            //         return Promise.reject(new Error('密码长度不能大于12位'));
                                            //     }else if(!/^[a-zA-Z0-9_]+$/.test(value)){
                                            //         return Promise.reject(new Error('用户名必须是英文、数字或下划线组成'));
                                            //     }else{
                                            //         return Promise.resolve();
                                            //     }                                     
                                            //     },
                                            // }),
                                            {
                                                required: true,
                                                message: "请输入6-16位字符和数字组合，字符区分大小写",
                                                pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
                                            }
                                        ]}
                                    >
                                        <Input
                                            prefix={<LockOutlined className="site-form-item-icon" />}
                                            type="password"
                                            placeholder="请输入密码"
                                        />
                                    </Form.Item>

                                    <Form.Item className="login-check">
                                        <Form.Item name="remember" valuePropName="checked" noStyle>
                                            <Checkbox>记住我</Checkbox>
                                        </Form.Item>
                                
                                        <a className="login-form-forgot" href="">
                                            忘记密码
                                        </a>
                                    </Form.Item>
                                    <div className="notes">账号：18811418763   密码：lyh684368</div>
                                    <Form.Item className="login-button">
                                        <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.getFormData}>
                                            登录
                                        </Button>
                                        {/* Or <a href="">register now!</a> */}
                                    </Form.Item>                                    
                                </Form>
                                <div className="style_center">
                                    "还没有账号？  去"
                                    <a href="#/login/regidste">注册</a>
                                    "or  以"
                                    <a href="#/web">游客身份</a>
                                    "继续访问"
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div class="style_footer">
                <div class="style_content">
                    <span>工业互联网软件监测与测评中心版权所有 未经授权不得转载 京ICP备19013049号-3</span>
                </div>
            </div>
        </div>
        
        
    )
}
}

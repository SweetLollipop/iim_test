import { Form, Input, Radio, Select, Button, message, DatePicker,} from 'antd';
import { Link } from "react-router-dom";
import React, { Component } from 'react';
import moment from 'moment';
import { reqViewUser } from '../../../../api';
import { reqSaveUser} from '../../../../api';
import '../view/index.less';

/**
 * 编辑用户
 */

export default class EditUser extends Component {
    constructor(props){
        super(props);
        this.state={
          userId: "",
          data: [],
        }
    }

    //查看用户
    // getUserbyId = async() => {
    //     const userId = this.state.userId;
    //     // console.log('userId:'+userId);
    //     const result = await reqViewUser(userId);
    //     if (result.code===200) {
    //         console.log(result);
    //        this.setState({
    //             data: result.data,
    //        }) 
    //     }
    // }
    

    //修改保存用户
    onFinish = async (values) => {
        console.log('Received values of form: ', values);
        console.log("formData:",this.refs.editForm.getFieldValue());
        const userId = this.state.userId;
        const result = await reqSaveUser(userId,values);
        if(result.code===200){
            message.success('保存成功'); //提示登录成功
            this.props.history.replace('/user'); //跳转到管理页面，且不需要回退到
        }else{
            message.error(result.msg);//提示错误信息
        }
    }
    //提交表单且数据验证失败后回调事件
    onFinishFailed = ({values, errorFields, outOfDate }) =>{
        console.log('Failed to receive form data: ', values, 'Failure field:', errorFields, 'outOfDate:', outOfDate);
    }

    componentWillMount(){
        
        // this.setState({userId: this.props.location.state.id});
        this.setState({
            userId: this.props.location.state.id,
            data: this.props.location.state,
        });
       
    }

    componentDidMount(){
        // this.getUserbyId();
        
    }
    
    render() {
        const {userId,data} = this.state;
        //const userId = this.state.userId;
        //console.log("data.status:"+data.status);
        console.log("data:"+data);
        console.log('userId:'+userId);
        // data.birthday = moment(data.birthday);
        return (
            // <div>编辑用户: {this.props.location.state.username}</div>
            <div className="index_content">
                <div className="ant-card">
                    <div className="ant-card-body">
                        <Form className="ant-form" onFinish={this.onFinish} onFinishFailed={this.onFinishFailed} ref="editForm">

                            <Form.Item label="姓名：" className="ant-row" rules={[{ required: true, message: "姓名不能为空" }]}>
                                <Input placeholder="请输入" className="ant-input" defaultValue={data['username']}  />
                            </Form.Item>

                            <Form.Item label="性别：" rules={[{ required: true }]}>
                                <Radio.Group defaultValue={data["sex"]}  >
                                    <Radio value={0}>男</Radio>
                                    <Radio value={1}>女</Radio>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item label="权限角色：" rules={[{ required: true }]}>
                                <Select placeholder="请选择" defaultValue={data.roles}  >
                                    <Select.Option value="超级管理员">超级管理员</Select.Option>
                                    <Select.Option value="管理员">管理员</Select.Option>
                                    <Select.Option value="普通用户">普通用户</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item label="昵称：" rules={[{ required: true }]}>
                                <Input placeholder="请输入" defaultValue={data.nickname}  />
                            </Form.Item>

                            <Form.Item label="手机号：" rules={[{ required: true, pattern:/^1[34578]\d{9}$/, message: "请输入正确的手机号码" }]}>
                                <Input placeholder="请输入" defaultValue={data.mobile}  />
                            </Form.Item>

                            {/* <Form.Item label="生日：" rules={[{ required: true }]}>
                                <DatePicker placeholder="请输入" defaultValue={data.birthday}  />
                            </Form.Item>

                            <Form.Item label="邮箱：" rules={[{ required: true }]}>
                                <Input  placeholder="请输入" defaultValue={data.email}  />
                            </Form.Item>

                            <Form.Item label="单位名称：" rules={[{ required: true }]}>
                                <Input  placeholder="请输入" defaultValue={data.unitName}  />
                            </Form.Item>

                            <Form.Item label="职位名称：" rules={[{ required: true }]}>
                                <Input  placeholder="请输入" defaultValue={data.job}  />
                            </Form.Item> */}

                            <Form.Item label="状态：" rules={[{ required: true }]}>
                                <Radio.Group defaultValue={data.status}  >
                                    <Radio value={0}>无效</Radio>
                                    <Radio value={1}>有效</Radio>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item className="ant-button">
                                <Button type="primary" htmlType="submit" >保存</Button>
                                <Button>
                                    <Link to="/user">返回</Link>
                                </Button>
                            </Form.Item>

                        </Form>
                    </div>
                </div>
                
                {/* <div className="ant-button">
                    <Button htmlType="submit">保存</Button>
                    <Button>
                        <Link to="/user">返回</Link>
                    </Button>
                </div> */}
            </div>
        );
    }
}
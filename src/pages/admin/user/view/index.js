import { Form, Input, Radio, Select, DatePicker,} from 'antd';
import React, { Component } from 'react';
import moment from 'moment';
import { reqViewUser } from '../../../../api';
import '../view/index.less';

/**
 * 查看用户
 */

export default class ViewUser extends Component {
    constructor(props){
        super(props);
        this.state={
          userId: "",
          data: [],
        }
    }

    //查看用户
    getUserbyId = async() => {
        const userId = this.state.userId;
        // console.log('userId:'+userId);
        const result = await reqViewUser(userId);
        if (result.code===200) {
            console.log(result);
           this.setState({
                data: result.data,
           }) 
        }
    }

    componentWillMount(){
        
        this.setState({userId: this.props.location.state.id});
        // const userId = this.state.userId;
        // console.log('userId:'+userId);
        
        
    }
    componentDidMount(){
        this.getUserbyId();
    }
    
    render() {
        const {userId,data} = this.state;
        //const userId = this.state.userId;
        //console.log("data.status:"+data.status);
        console.log("data:"+data);
        console.log('userId:'+userId);
        data.birthday = moment(data.birthday);
        return (
            // <div>查看用户: {this.props.location.state.username}</div>
            <div className="index_content">
                <div className="ant-card">
                    <div className="ant-card-body">
                        <Form name="editForm" className="ant-form" initialValues={this.state.data}>

                            <Form.Item  label="姓名：" className="ant-row" rules={[{ required: true }]}>
                                <Input placeholder="请输入" className="ant-input" value={data['username']} disabled="true"/>
                            </Form.Item>

                            <Form.Item label="性别：" rules={[{ required: true }]}>
                                <Radio.Group value={data["sex"]} disabled="true">
                                    <Radio value={0}>男</Radio>
                                    <Radio value={1}>女</Radio>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item label="权限角色：" rules={[{ required: true }]}>
                                <Select placeholder="请选择" value={data.roles} disabled="true">
                                    <Select.Option value={["超级管理员"]}>超级管理员</Select.Option>
                                    <Select.Option value={["管理员"]}>管理员</Select.Option>
                                    <Select.Option value={["普通用户"]}>普通用户</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item label="昵称：" rules={[{ required: true }]}>
                                <Input placeholder="请输入" value={data.nickname} disabled="true"/>
                            </Form.Item>

                            <Form.Item label="手机号：" rules={[{ required: true }]}>
                                <Input placeholder="请输入" value={data.mobile} disabled="true"/>
                            </Form.Item>

                            <Form.Item label="生日：" rules={[{ required: true }]}>
                                <DatePicker placeholder="请输入" value={data.birthday} disabled="true"/>
                            </Form.Item>

                            <Form.Item label="邮箱：" rules={[{ required: true }]}>
                                <Input  placeholder="请输入" value={data.email} disabled="true"/>
                            </Form.Item>

                            <Form.Item label="单位名称：" rules={[{ required: true }]}>
                                <Input  placeholder="请输入" value={data.unitName} disabled="true"/>
                            </Form.Item>

                            <Form.Item label="职位名称：" rules={[{ required: true }]}>
                                <Input  placeholder="请输入" value={data.job} disabled="true"/>
                            </Form.Item>

                            <Form.Item label="状态：" rules={[{ required: true }]}>
                                <Radio.Group value={data.status} disabled="true">
                                    <Radio value={0}>无效</Radio>
                                    <Radio value={1}>有效</Radio>
                                </Radio.Group>
                            </Form.Item>

                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
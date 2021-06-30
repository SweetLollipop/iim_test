import { Form, Input, Radio, Select, DatePicker,} from 'antd';
import React, { Component } from 'react';
import '../view/index.less';

/**
 * 查看用户
 */

export default class ViewUser extends Component {
    constructor(props){
        super(props);
        this.state={
          data: [],
        }
    }
    componentWillMount(){
        
        this.setState({data: this.props.location.state});
        
    }
    
    render() {
        const {data} = this.state;
        console.log("data.status:"+data.status);
        return (
            // <div>查看用户: {this.props.location.state.username}</div>
            <div className="index_content">
                <div className="ant-card">
                    <div className="ant-card-body">
                        <Form className="ant-form">

                            <Form.Item label="姓名：" className="ant-row" rules={[{ required: true }]}>
                                <Input placeholder="请输入" className="ant-input" value={data['username']} disabled="true"/>
                            </Form.Item>

                            <Form.Item label="性别：" rules={[{ required: true }]}>
                                <Radio.Group value={data["sex"]} disabled="true">
                                    <Radio value="0">男</Radio>
                                    <Radio value="1">女</Radio>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item label="权限角色：" rules={[{ required: true }]}>
                                <Select placeholder="请选择" value={data.soles} disabled="true">
                                    <Select.Option value="超级管理员">超级管理员</Select.Option>
                                    <Select.Option value="管理员">管理员</Select.Option>
                                    <Select.Option value="普通用户">普通用户</Select.Option>
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
                                <Input  placeholder="请输入" value={data.company} disabled="true"/>
                            </Form.Item>

                            <Form.Item label="职位名称：" rules={[{ required: true }]}>
                                <Input  placeholder="请输入" value={data.position} disabled="true"/>
                            </Form.Item>

                            <Form.Item label="状态：" rules={[{ required: true }]}>
                                <Radio.Group value={data.status} disabled="true">
                                    <Radio value="0">无效</Radio>
                                    <Radio value="1">有效</Radio>
                                </Radio.Group>
                            </Form.Item>

                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
import { Form, Input, Radio, Select, Button,} from 'antd';
import { Link } from "react-router-dom";
import React, { Component } from 'react';
import '../view/index.less';

/**
 * 编辑用户
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
                                <Input placeholder="请输入" className="ant-input" defaultValue={data['username']}  />
                            </Form.Item>

                            <Form.Item label="性别：" rules={[{ required: true }]}>
                                <Radio.Group defaultValue={data["sex"]}  >
                                    <Radio value="0">男</Radio>
                                    <Radio value="1">女</Radio>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item label="权限角色：" rules={[{ required: true }]}>
                                <Select placeholder="请选择" defaultValue={data.soles}  >
                                    <Select.Option value="超级管理员">超级管理员</Select.Option>
                                    <Select.Option value="管理员">管理员</Select.Option>
                                    <Select.Option value="普通用户">普通用户</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item label="昵称：" rules={[{ required: true }]}>
                                <Input placeholder="请输入" defaultValue={data.nickname}  />
                            </Form.Item>

                            <Form.Item label="手机号：" rules={[{ required: true }]}>
                                <Input placeholder="请输入" defaultValue={data.mobile}  />
                            </Form.Item>

                            {/* <Form.Item label="生日：" rules={[{ required: true }]}>
                                <DatePicker placeholder="请输入" defaultValue={data.birthday}  />
                            </Form.Item>

                            <Form.Item label="邮箱：" rules={[{ required: true }]}>
                                <Input  placeholder="请输入" defaultValue={data.email}  />
                            </Form.Item>

                            <Form.Item label="单位名称：" rules={[{ required: true }]}>
                                <Input  placeholder="请输入" defaultValue={data.company}  />
                            </Form.Item>

                            <Form.Item label="职位名称：" rules={[{ required: true }]}>
                                <Input  placeholder="请输入" defaultValue={data.position}  />
                            </Form.Item> */}

                            <Form.Item label="状态：" rules={[{ required: true }]}>
                                <Radio.Group defaultValue={data.status}  >
                                    <Radio value="0">无效</Radio>
                                    <Radio value="1">有效</Radio>
                                </Radio.Group>
                            </Form.Item>

                        </Form>
                    </div>
                </div>
                
                <div className="ant-button">
                    <Button>保存</Button>
                    <Button>
                        <Link to="/user">返回</Link>
                    </Button>
                </div>
            </div>
        );
    }
}
import { Form, Input, Radio, Select, DatePicker,} from 'antd';
import React, { Component } from 'react';
import '../view/index.less';

export default class ViewUser extends Component {
    constructor(props){
        super(props);
        this.state={
          
        }
    }
   
    render() {
        return (
            // <div>查看用户: {this.props.location.state.username}</div>
            <div className="index_content">
                <div className="ant-card">
                    <div className="ant-card-body">
                        <Form className="ant-form">

                            <Form.Item label="姓名：" className="ant-row" rules={[{ required: true }]}>
                                <Input className="ant-input"/>
                            </Form.Item>

                            <Form.Item label="性别：" rules={[{ required: true }]}>
                                <Radio.Group>
                                    <Radio value="0">男</Radio>
                                    <Radio value="1">女</Radio>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item label="权限角色：" rules={[{ required: true }]}>
                                <Select placeholder="Please select a country">
                                    <Select.Option value="china">China</Select.Option>
                                    <Select.Option value="usa">U.S.A</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item label="昵称：" rules={[{ required: true }]} placeholder="请输入">
                                <Input/>
                            </Form.Item>

                            <Form.Item label="手机号：" rules={[{ required: true }]}>
                                <Input/>
                            </Form.Item>

                            <Form.Item label="生日：" rules={[{ required: true }]}>
                                <DatePicker />
                            </Form.Item>

                            <Form.Item label="邮箱：" rules={[{ required: true }]}>
                                <Input/>
                            </Form.Item>

                            <Form.Item label="单位名称：" rules={[{ required: true }]}>
                                <Input/>
                            </Form.Item>

                            <Form.Item label="职位名称：" rules={[{ required: true }]}>
                                <Input/>
                            </Form.Item>

                            <Form.Item label="状态：" rules={[{ required: true }]}>
                                <Radio.Group>
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
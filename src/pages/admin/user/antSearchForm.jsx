import React, { Component } from 'react';
import ProForm, {
//   ProFormSwitch,
//   ProFormText,
//   ProFormRadio,
//   ProFormCheckbox,
//   ProFormRate,
  ProFormSelect,
//   ProFormDigit,
//   ProFormSlider,
//   ProFormGroup,
} from '@ant-design/pro-form';
import { Button } from 'antd';
import './antSearchForm.less';


export default class AntSearchForm extends Component {
    state = {  }
    render() {
        
       
        return (
            <ProForm.Group>
                <ProFormSelect.SearchSelect
                    name="userQuery"
                    label="姓名："
                    fieldProps={{
                    labelInValue: true,
                    }}
                    request={async ({ keyWords }) => {
                    return [
                        { label: '全部', value: 'all' },
                        { label: '未解决', value: 'open' },
                        { label: '已解决', value: 'closed' },
                        { label: '解决中', value: 'processing' },
                    ].filter(({ value }) => value.includes(keyWords));
                    }}
                />
                <ProFormSelect.SearchSelect
                    name="userQuery2"
                    label="状态"
                    valueEnum={{
                    all: { text: '全部', status: 'Default' },
                    open: {
                        text: '禁用',
                        status: 'Error',
                    },
                    closed: {
                        text: '正常',
                        status: 'Success',
                    },
                    processing: {
                        text: '解决中',
                        status: 'Processing',
                    },
                    }}
                />
                <ProFormSelect.SearchSelect
                    name="role"
                    label="角色"
                    options={[
                    { label: '全部', value: 'all' },
                    { label: '超级管理员', value: 'open' },
                    { label: '管理员', value: 'closed' },
                    { label: '普通用户', value: 'processing' },
                    ]}
                />
                <div>
                    <Button style={{color: "#fff", backgroundColor: "#30b0d3",margin:"30px"}}>搜索</Button>
                    <Button>重置</Button>
                </div>
            </ProForm.Group>
            
        );
    }
}   
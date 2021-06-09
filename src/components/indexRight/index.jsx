import React, { Component } from 'react';
import { Popover, Button } from 'antd';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';
import memoryUtils from '../../utils/memoryUtils';
import storageUtils from '../../utils/storageUtils';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';

class IndexRight extends Component {
    state = {  }
    logout=(e)=>{
        //显示确认框
        e.preventDefault();
        Modal.confirm({
            title: '您要确定退出吗?',
            icon: <ExclamationCircleOutlined />,
            content: '请确认',
            onOk:() => {
              console.log('OK');
              //删除保存的user数据
              storageUtils.removeUser();
              memoryUtils.user={};
              //跳转到login
              this.props.history.replace('/login');
            },
            onCancel() {
              console.log('Cancel');
            },
        });
    }
    render() {
        return (
            <Popover content={(
                <div>
                    <Link>前台页面入口</Link><br/>
                    <Link onClick={this.logout}>退出登录</Link>
                </div>
            )} title="">
                <Button style={{position:"fixed",right:"50px",top:"15px"}}>
                    admin
                </Button>
            </Popover>
            
        );
    }
}
export default withRouter(IndexRight);
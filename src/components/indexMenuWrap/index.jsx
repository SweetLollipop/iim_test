import React, {Component} from 'react';
// import { Modal } from 'antd';
import { Menu } from 'antd';
// import LinkButton from '../link-button';
// import { ExclamationCircleOutlined } from '@ant-design/icons';
// import memoryUtils from '../../utils/memoryUtils';
// import storageUtils from '../../utils/storageUtils';
import { Link, withRouter } from 'react-router-dom';
import './index.less';


import {  
    BankOutlined, AppstoreOutlined, UserOutlined, SettingOutlined 
  } from '@ant-design/icons';
/**
 * 头部组件
 */
 
const { SubMenu } = Menu;

class IndexMenuWrap extends Component {
    state = {
        current: '1',
    };
    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };
   
    render() {
        const { current } = this.state;
        return (
            
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" className="index_menuwrap">
                <Menu.Item key="1" icon={<BankOutlined />}>
                关键节点管理
                </Menu.Item>  
                <Menu.Item key="2" icon={<BankOutlined />}>
                发展势态管理
                </Menu.Item>  
                <Menu.Item key="3" icon={<AppstoreOutlined />}>
                资源内容管理
                </Menu.Item> 
                <Menu.Item key="4" icon={<AppstoreOutlined />}>
                论坛管理
                </Menu.Item> 
                <Menu.Item key="5" icon={<UserOutlined />}>
                <Link to="/user">用户管理</Link>
                </Menu.Item>                     
                <Menu.Item key="6" icon={<SettingOutlined/>}>
                系统管理
                </Menu.Item>                        
                {/* <Menu.Item key="alipay" icon={<SettingOutlined />}>
                <a  target="_blank" rel="noopener noreferrer">
                    admin
                </a>
                </Menu.Item> */}
            </Menu>
            
        );
    }
}
export default withRouter(IndexMenuWrap);
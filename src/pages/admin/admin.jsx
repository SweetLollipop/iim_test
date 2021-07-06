import React , {Component} from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import memoryUtils from '../../utils/memoryUtils';

// import LeftNav from '../../components/left-nav';
import IndexMenuWrap from '../../components/indexMenuWrap';
import IndexRight from '../../components/indexRight';
import './admin.less';

import User from './user/user';

import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';
import { withError } from 'antd/lib/modal/confirm';
import PrivateRouter from '../../components/privateRouter';
import ViewUser from './user/view';
import EditUser from './user/edit';
const {  Sider, Content, Header, Footer} = Layout;
/**
 * 后台管理的路由组件
 */
class Admin extends Component {

    // constructor(props){
    //     super(props);
    //     this.state={
    //         // id: this.props.match.params.id,
            
    //     }
    // }

    state = {
        collapsed: false,
    };
    
    toggle = () => {
    this.setState({
        collapsed: !this.state.collapsed,
    });
    };

    render(){

        const user = memoryUtils.user;
        if(!user){ //如果内存中没有存储user -->当前没有登录
            return <Redirect to='/login'/> //自动跳转到登录（在render()中）
        }
        return(
            // <Layout style={{height: "100%"}} className='ant-layout'>
            //     <Sider className="index_sider">
            //         <LeftNav/>
            //     </Sider>
            //     <Layout className="ant-layout-right">
            //         <Header>Header</Header>
            //         <Content className="ant-layout-content">
            //             cotent
            //         </Content>
            //         <Footer className="ant-layout-footer">
            //             技术支持： 北京中科院软件中心有限公司
            //         </Footer>
            //     </Layout>
            // </Layout>
            <Layout style={{height: "100%"}} className='ant-layout'>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed} className="ant-layout-sider">
                    {/* <div className="index_logo">
                        <a href=''>
                            <h1>工业互联网检测和服务平台</h1>
                        </a>
                    </div> */}
                    <Menu  mode="inline" defaultSelectedKeys={['1']} style={{backgroundColor:" #30b0d3",color: "white"}}>
                        <Menu.Item key="1">
                                工业互联网检测和服务平台
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UserOutlined />}>
                            用户管理
                        </Menu.Item>
                        <Menu.Item key="3" icon={<VideoCameraOutlined />}>
                            骨干节点评论管理
                        </Menu.Item>
                        
                    </Menu>
                </Sider>
                <Layout className="ant-layout-right site-layout">
                    <Header className="ant-layout-header site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: this.toggle,
                        })}
                        <IndexMenuWrap className="index_menuWrap"/>
                        <IndexRight claName="index_right"/>
                    </Header>
                    <Content
                        className="ant-layout-content site-layout-background"
                        style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        backgroundColor: "white"
                        }}
                    >
                        <Switch>
                            
                            <Route exact path='/user' component={User}/>
                            <Route exact path='/user/view' component={ViewUser}/>
                            <Route exact path='/user/edit' component={EditUser}/>

                            <Redirect to='/home'/>
                        </Switch>
                    </Content>
                    <Footer className="ant-layout-footer">
                         技术支持： 北京中科院软件中心有限公司 
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}
export default withRouter(Admin);
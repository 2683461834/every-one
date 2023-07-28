import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import './basic-layout.css';

const { Header, Content, Footer } = Layout;



const BasicLayout: React.FC =  () => {
    return (
        <Layout className="layout">
            <Header className='Header'>
                <div className="logo" />
                <Menu className='Menu'  mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key='1'>nav 1</Menu.Item>
                    <Menu.Item key='2'>nav 2</Menu.Item>
                    <Menu.Item key='3'>nav 3</Menu.Item>
                </Menu>
                <div className='user-info'>
                    <img className='avatar-img' src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' alt='avatar' />
                </div>
            </Header>
            <Content className='Content'>

            </Content>
            {/* <Footer className='Footer'>

            </Footer> */}
        </Layout>
    )
}

export default BasicLayout;


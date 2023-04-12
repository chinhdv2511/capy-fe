import React, { useState } from "react";
import { Button, Layout, Menu } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"

import { menuItems } from "./constants";
import logo from "images/capy-logo.png";

const { Header, Content, Footer, Sider } = Layout;

type BaseLayoutProps = {
    children?: any;
};

export default function BaseLayout({ children }: BaseLayoutProps) {

    const [siderCollapsed, setSiderCollapsed] = useState(false);

    return <Layout className="base-layout" hasSider>
        <Sider className={"aside-left" + (siderCollapsed ? " collapsed" : "")} trigger={null} collapsed={siderCollapsed}>
            <div className="brand">
                <img src={logo} alt="Capy Logo" className="brand-logo" />
                <span className="brand-name" hidden={siderCollapsed}>Capy</span>
            </div>

            <Menu theme="dark" mode="inline" items={menuItems} defaultSelectedKeys={['1']} />
        </Sider>
        <Layout className="main">
            <Header className="header">
                <Button type="default" onClick={() => setSiderCollapsed(!siderCollapsed)}>
                    {siderCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
            </Header>
            <Content className="content">
                <h1>This is content</h1>
            </Content>
            <Footer className="footer">
                <h1>This is footer</h1>
            </Footer>
        </Layout>
    </Layout>;
}
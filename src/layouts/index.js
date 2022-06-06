import React, { useState, useEffect, Key } from 'react';
import { Layout, Menu, Breadcrumb, Avatar, Dropdown } from 'antd';
import { Link, history, MicroApp } from 'umi';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

import subRoutes from '../../config/subRoute.js';
import './index.less';

export default function BasicLayout(props) {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          // defaultSelectedKeys={['2']}
          items={subRoutes.map((i, index) => ({
            key: i.path,
            label: i.name,
          }))}
        />
      </Header>
      <Content className="site-layout" style={{ padding: '0', marginTop: 64 }}>
        <div className="site-layout-background" style={{ height: '100%' }}>
          <MicroApp
            name={'chartsApp'}
            autoSetLoading={true}
            // 微应用容器 class
            className="micro-app-wrapper"
            // wrapper class，仅开启 loading 动画时生效
            wrapperClassName="micro-wrapper-loadding"
          />
        </div>
      </Content>
    </Layout>
  );
}

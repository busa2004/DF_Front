import React, { Component } from 'react';
import {
    Link,
    withRouter
} from 'react-router-dom';
import { Menu, Icon } from 'antd';
import './SiderMenu.css';

const SubMenu = Menu.SubMenu;

class Sider extends React.Component {
  // submenu keys of first level
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  state = {
    openKeys: ['sub1'],
  };

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

  render() {
    return (
      <Menu
        className="Main-menu"
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ width: 'auto' }}
      >
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>업무</span></span>}>
          <Menu.Item key="1"><Link to="/Option1">업무리스트</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/Option2">보고서등록</Link>np</Menu.Item>
          <Menu.Item key="3">보고서관리</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

class SiderMenu extends Component {
    render() {
        return (
            <Sider />
        );
    }
}

export default withRouter(SiderMenu);
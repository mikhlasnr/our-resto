import React from "react";
import "./dashboard-admin-menu-options.styles.scss";

import { withRouter } from "react-router";

import { HomeOutlined, TeamOutlined, ProfileOutlined } from "@ant-design/icons";
import { Menu } from "antd";

const DashboardAdminMenuOptions = ({ history, match, linkUrl }) => {
  const handlingMenu = ({ item, key, keyPath }) => {
    if (key === "1") history.push("/");
    if (key === "2") history.push("/menu");
    if (key === "3") history.push("/pegawai");
  };
  return (
    <Menu mode="vertical" defaultSelectedKeys={["1"]} onSelect={handlingMenu}>
      <Menu.Item key="1" icon={<HomeOutlined />}>
        Dashboard
      </Menu.Item>
      <Menu.Item key="2" icon={<ProfileOutlined />}>
        Menu
      </Menu.Item>
      <Menu.Item key="3" icon={<TeamOutlined />}>
        Pegawai
      </Menu.Item>
    </Menu>
  );
};

export default withRouter(DashboardAdminMenuOptions);

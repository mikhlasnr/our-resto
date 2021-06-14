import React from "react";
import "./dashboard-admin-options.styles.scss";

// handling redux
import { connect, useSelector } from "react-redux";

// handling router
import { withRouter } from "react-router";

import { HomeOutlined, TeamOutlined, ProfileOutlined } from "@ant-design/icons";
import { Menu } from "antd";

const DashboardAdminOptions = ({ history, match }) => {
  const currentUser = useSelector(state => state.users.currentUser);
  const isPemilik = currentUser.role === "pemilik";
  const handlingMenu = ({ key }) => {
    if (key === "dashboard") history.push("/");
    if (key === "menu") history.push(`${isPemilik ? "/menu" : "/"}`);
    if (key === "pegawai") history.push("/pegawai");
  };

  return (
    <Menu
      id="dashboard-admin-options"
      mode="vertical"
      defaultSelectedKeys={isPemilik ? ["dashboard"] : ["menu"]}
      onSelect={handlingMenu}
    >
      {isPemilik && (
        <Menu.Item key="dashboard" icon={<HomeOutlined />}>
          Dashboard
        </Menu.Item>
      )}

      <Menu.Item key="menu" icon={<ProfileOutlined />}>
        Menu
      </Menu.Item>
      <Menu.Item key="pegawai" icon={<TeamOutlined />}>
        Pegawai
      </Menu.Item>
    </Menu>
  );
};

export default withRouter(connect()(DashboardAdminOptions));

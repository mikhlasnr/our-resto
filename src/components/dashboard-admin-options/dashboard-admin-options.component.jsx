import React, { useState, useEffect } from "react";
import "./dashboard-admin-options.styles.scss";

// handling redux
import { connect, useSelector } from "react-redux";

// handling router
import { withRouter } from "react-router";

import { HomeOutlined, TeamOutlined, ProfileOutlined } from "@ant-design/icons";
import { Menu } from "antd";

const DashboardAdminOptions = ({ history, match, location }) => {
  const currentUser = useSelector(state => state.users.currentUser);
  const isPemilik = currentUser.NamaRole.toLowerCase() === "pemilik";
  const currentOption = location.pathname
    .replace(`${match.path}/`, "")
    .replace("/", "");
  console.log(currentOption);

  const handlingMenu = ({ key }) => {
    if (key === "dashboard") history.push(`${match.path}`);
    if (key === "menu") history.push(`${match.path}/menu`);
    if (key === "pegawai") history.push(`${match.path}/pegawai`);
  };

  return (
    <Menu
      id="dashboard-admin-options"
      mode="vertical"
      defaultSelectedKeys={currentOption}
      onSelect={handlingMenu}
    >
      {isPemilik ? (
        <Menu.Item key="dashboard" icon={<HomeOutlined />}>
          Dashboard
        </Menu.Item>
      ) : null}

      <Menu.Item
        key={!isPemilik ? "dashboard" : "menu"}
        icon={<ProfileOutlined />}
      >
        Menu
      </Menu.Item>
      <Menu.Item key="pegawai" icon={<TeamOutlined />}>
        Pegawai
      </Menu.Item>
    </Menu>
  );
};

export default withRouter(connect()(DashboardAdminOptions));

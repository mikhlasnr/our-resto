import React from "react";
import "./dashboard-admin-options.styles.scss";

// handling redux
import { connect, useSelector } from "react-redux";

// handling router
import { withRouter } from "react-router";

import { HomeOutlined, TeamOutlined, ProfileOutlined } from "@ant-design/icons";
import { Menu } from "antd";

const DashboardAdminOptions = ({ history, match, location }) => {
  const currentUser = useSelector(state => state.users.currentUser);
  const isPemilik = currentUser.role === "pemilik";

  const currentOption = location.pathname.split("/")[1];
  const handlingOption = currentOption === "" ? "defaultOption" : currentOption;

  const handlingMenu = ({ key }) => {
    if (key === "defaultOption") history.push(match.path);
    if (key === "menu") history.push(`${match.path}menu`);
    if (key === "pegawai") history.push(`${match.path}pegawai`);
  };

  return (
    <Menu
      id="dashboard-admin-options"
      mode="vertical"
      defaultSelectedKeys={handlingOption}
      onSelect={handlingMenu}
    >
      {isPemilik ? (
        <Menu.Item key="defaultOption" icon={<HomeOutlined />}>
          Dashboard
        </Menu.Item>
      ) : null}

      <Menu.Item
        key={!isPemilik ? "defaultOption" : "menu"}
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

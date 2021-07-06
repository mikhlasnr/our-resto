import React from "react";
import "./sidebar-options.styles.scss";

// handling redux
import { useSelector } from "react-redux";

// handling router
import { useHistory, useRouteMatch, useLocation } from "react-router-dom";

// Import Components
import { HomeOutlined, TeamOutlined, ProfileOutlined } from "@ant-design/icons";
import { Menu } from "antd";

const SidebarOptions = () => {
  // START Handling Router
  let history = useHistory();
  let match = useRouteMatch();
  let location = useLocation();
  // END Handling Router

  // START Handling Redux
  const currentUser = useSelector(state => state.user.currentUser);
  const isPemilik = currentUser.NamaRole.toLowerCase() === "pemilik";
  // END Handling Redux

  const currentOption = location.pathname
    .replace(`${match.path}/`, "")
    .replace("/", "");

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

export default SidebarOptions;

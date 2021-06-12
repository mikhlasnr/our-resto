import React, { useState } from "react";
import "./dashboard-admin-profile.styles.scss";
import avatarProfile from "../../assets/images/avatarProfile.png";
import { Avatar, Image } from "antd";
import { Menu, Dropdown } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const menu = (
  <Menu>
    <Menu.Item key="1">
      <Link to="/signin">Logout</Link>
    </Menu.Item>
  </Menu>
);

const DashboardPelayanProfile = () => {
  const [login, setLogin] = useState(true);
  return (
    <div id="dashboard-admin-profile">
      <div className="dashboard-admin-profile-container">
        <div className="profile-image">
          <Avatar
            size={61}
            shape="square"
            src={
              <Image
                src={avatarProfile}
                preview={{
                  visible: false,
                  mask: null,
                }}
              />
            }
            style={{ backgroundColor: "#FFB649", borderRadius: "20px" }}
          />
        </div>
        <div className="profile-detail">
          <div className="detail-user">
            <p className="user-name">Hayin Ananta</p>
            <p
              className="user-status"
              style={{ color: `${login ? "#23C65B" : ""}` }}
            >
              Online
            </p>
          </div>
          <div className="detail-dropdown">
            <Dropdown overlay={menu} trigger={["hover"]} placement="topRight">
              <span className="ant-dropdown-link">
                <EllipsisOutlined rotate={90} />
              </span>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPelayanProfile;

import React from "react";
import "./dashboard-kasir-profile.styles.scss";
import avatarProfile from "../../assets/images/avatarProfile.png";
import { Avatar, Badge, Image } from "antd";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const menu = (
  <Menu>
    <Menu.Item key="0">
      <Link to="/signin-kasir">Logout</Link>
    </Menu.Item>
  </Menu>
);

const DashboardKasirProfile = () => {
  return (
    <div id="dashboard-kasir-profile">
      <div className="dashboard-kasir-profile-container">
        <div className="profile-image">
          <Badge dot color="#23C65B" size="default">
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
          </Badge>
        </div>
        <div className="profile-detail">
          <div className="detail-user">
            <p className="user-name">Muhammad Ilham</p>
            <p className="user-role">Kasir 1</p>
          </div>
          <div className="detail-dropdown">
            <Dropdown
              overlay={menu}
              trigger={["click"]}
              placement="bottomCenter"
            >
              <span
                className="ant-dropdown-link"
                onClick={e => e.preventDefault()}
              >
                <DownOutlined />
              </span>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardKasirProfile;

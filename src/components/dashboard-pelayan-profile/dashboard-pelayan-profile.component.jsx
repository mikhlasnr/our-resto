import React from "react";
import "./dashboard-pelayan-profile.styles.scss";
import avatarProfile from "../../assets/images/avatarProfile.png";
import { Avatar, Badge, Image } from "antd";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const menu = (
  <Menu>
    <Menu.Item key="0">
      <Link to="/">List Pesanan</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <Link to="/signin">Logout</Link>
    </Menu.Item>
  </Menu>
);

const DashboardPelayanProfile = () => {
  return (
    <div id="dashboard-pelayan-profile">
      <div className="dashboard-pelayan-profile-container">
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
              trigger={["hover"]}
              placement="bottomRight"
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

export default DashboardPelayanProfile;
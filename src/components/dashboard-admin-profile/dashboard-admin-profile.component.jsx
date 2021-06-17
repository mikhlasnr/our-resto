import React from "react";
import "./dashboard-admin-profile.styles.scss";

// handling redux
import { connect, useSelector } from "react-redux";

import { Avatar, Image, Menu, Dropdown } from "antd";
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
  const currentUser = useSelector(state => state.users.currentUser);

  return (
    <div id="dashboard-admin-profile">
      <div className="dashboard-admin-profile-container">
        <div className="profile-image">
          <Avatar
            size={61}
            src={
              <Image
                width={61}
                shape="square"
                src="https://ik.imagekit.io/upecbxjan8p/avatar/avatarProfile_i4T_C3T34.png"
                preview={{
                  visible: false,
                  mask: null,
                }}
                fallback="https://ik.imagekit.io/upecbxjan8p/avatar/empty-image_6J-Ssa71Q.png"
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
              style={{ color: `${currentUser ? "#23C65B" : ""}` }}
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

export default connect()(DashboardPelayanProfile);

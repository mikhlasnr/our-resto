import React from "react";
import "./sidebar-options.styles.scss";

// handling redux
import { useSelector, useDispatch } from "react-redux";
import { removeCurrentUser } from "../../../../redux/user/user.action";
import { selectCurrentUser } from "../../../../redux/user/user.selectors";

// Import Component
import { Avatar, Image, Menu, Dropdown } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

const SidebarProfile = () => {
  const currentUser = useSelector(selectCurrentUser) || null;
  const dispatch = useDispatch();
  const handlingMenuClick = ({ key }) => {
    if (key === "logout") dispatch(removeCurrentUser());
  };

  // ! Dropdown Menu Option
  const menu = (
    <Menu onClick={handlingMenuClick}>
      <Menu.Item key="logout">
        <span>Logout</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div id="dashboard-admin-profile">
      <div className="profile-image">
        <Avatar
          size={61}
          src={
            <Image
              width={61}
              shape="square"
              src={currentUser.Foto}
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
          <p className="user-name">{currentUser.Nama}</p>
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
  );
};

export default SidebarProfile;

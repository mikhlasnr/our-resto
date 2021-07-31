import React from "react";
import "./koki-profile.styles.scss";

// handling redux
import { useSelector, useDispatch } from "react-redux";
import { removeCurrentUser } from "../../../redux/user/user.action";

// import components
import { Avatar, Badge, Image } from "antd";
import { Menu, Dropdown } from "antd";
import { ReactComponent as DropdownIcon } from "../../../assets/icons/dropdown-icon.svg";

const KokiProfile = () => {
  const currentUser = useSelector(state => state.user.currentUser) || null;
  const { Nama, NamaRole } = currentUser;
  const dispatch = useDispatch();

  const handlingMenuClick = ({ key }) => {
    if (key === "logout") dispatch(removeCurrentUser());
  };
  const menu = (
    <Menu onClick={handlingMenuClick}>
      <Menu.Item key="logout">
        <span>Logout</span>
      </Menu.Item>
    </Menu>
  );
  return (
    <div id="dashboard-koki-profile">
      <div className="dashboard-koki-profile-container">
        <div className="profile-image">
          <Badge dot color="#23C65B" size="default">
            <Avatar
              size={61}
              shape="square"
              src={
                <Image
                  width={61}
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
          </Badge>
        </div>
        <div className="profile-detail">
          <div className="detail-user">
            <p className="user-name">{Nama}</p>
            <p className="user-role">{NamaRole}</p>
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
                <DropdownIcon />
              </span>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KokiProfile;

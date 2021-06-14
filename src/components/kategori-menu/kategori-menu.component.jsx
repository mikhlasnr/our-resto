import React from "react";
import "./kategori-menu.styles.scss";

// handling redux
import { connect, useSelector } from "react-redux";

// handling router
import { withRouter } from "react-router";

// import components
import { ReactComponent as KategoriBurger } from "../../assets/images/kategori-menu/burger/burger.svg";
// import MinumanIcon from "../../assets/images/kategori-menu/minuman.png";

import { Menu, Image } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const KategoriMenu = ({ history }) => {
  return (
    <Menu id="kategori-menu" mode="horizontal" defaultSelectedKeys="all">
      <Menu.Item key="all">
        <div className="kategori-card">
          <img src="https://ik.imagekit.io/upecbxjan8p/kategori/all.png" />
          <p>All</p>
        </div>
      </Menu.Item>
      <Menu.Item key="burger">
        <div className="kategori-card">
          <img src="https://ik.imagekit.io/upecbxjan8p/kategori/burger.png" />
          <p>Burger</p>
        </div>
      </Menu.Item>
      <Menu.Item key="hotdog">
        <div className="kategori-card">
          <img src="https://ik.imagekit.io/upecbxjan8p/kategori/hotdog.png" />
          <p>Hotdog</p>
        </div>
      </Menu.Item>
      <Menu.Item key="minuman">
        <div className="kategori-card">
          <img src="https://ik.imagekit.io/upecbxjan8p/kategori/minuman.png" />
          <p>minuman</p>
        </div>
      </Menu.Item>
      <Menu.Item key="donut">
        <div className="kategori-card">
          <img src="https://ik.imagekit.io/upecbxjan8p/kategori/donut.png" />
          <p>Donut</p>
        </div>
      </Menu.Item>
      <Menu.Item key="add">
        <div className="kategori-card-add">
          <PlusOutlined style={{ fontSize: "48px", margin: "0" }} />
        </div>
      </Menu.Item>
    </Menu>
  );
};

export default withRouter(connect()(KategoriMenu));

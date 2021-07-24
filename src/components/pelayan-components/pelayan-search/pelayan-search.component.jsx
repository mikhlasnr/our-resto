import React from "react";
import { Input, Image } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import "./pelayan-search.styles.scss";

const PelayanSearch = () => {
  return (
    <div id="dashboard-pelayan-search">
      <div className="search-logo">
        <Image
          src={`https://ik.imagekit.io/upecbxjan8p/logo_2-2nVUxlt.png`}
          preview={{
            visible: false,
            mask: null,
          }}
        />
      </div>
      <Input
        placeholder="Cari menu"
        prefix={
          <SearchOutlined style={{ fontSize: "24px", color: "#FF5348" }} />
        }
        className="input-search"
        bordered={false}
      />
    </div>
  );
};

export default PelayanSearch;

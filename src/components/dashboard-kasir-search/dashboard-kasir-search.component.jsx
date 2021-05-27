import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import "./dashboard-kasir-search.styles.scss";

const DashboardKasirSearch = () => {
  return (
    <div id="dashboard-kasir-search">
      <div className="search-logo">
        <Logo />
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

export default DashboardKasirSearch;

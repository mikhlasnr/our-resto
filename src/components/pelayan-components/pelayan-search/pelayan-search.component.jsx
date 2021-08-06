import React from "react";
import "./pelayan-search.styles.scss";

import { useDispatch } from "react-redux";
import { setSearchMenuField } from "../../../redux/menu/menu.action";

import { Input, Image } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const PelayanSearch = () => {
  const dispatch = useDispatch();
  const handlingSearch = e => {
    dispatch(setSearchMenuField(e.currentTarget.value));
    console.log(e.currentTarget.value);
  };
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
        onChange={handlingSearch}
        bordered={false}
      />
    </div>
  );
};

export default PelayanSearch;

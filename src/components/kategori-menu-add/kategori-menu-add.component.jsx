import React from "react";
import "./kategori-menu-add.styles.scss";
import { connect } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";

const KategoriMenuAdd = () => {
  const handlingAddKategori = () => {
    alert("click");
  };

  return (
    <div className={`kategori-menu-add `}>
      <PlusOutlined style={{ fontSize: "48px" }} />
    </div>
  );
};

export default connect()(KategoriMenuAdd);

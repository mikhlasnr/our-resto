import React from "react";
import "./kategori-menu-card-add.styles.scss";

// Handling Redux
import { useDispatch } from "react-redux";
import { toggleShowModalAddKategoriMenu } from "../../../../redux/kategoriMenu/kategoriMenu.action";

// Import Components
import { PlusOutlined } from "@ant-design/icons";

const KategoriMenuCardAdd = () => {
  const dispatch = useDispatch();

  const handlingAddKategori = () => {
    dispatch(toggleShowModalAddKategoriMenu());
  };

  return (
    <div className={`kategori-menu-add `} onClick={handlingAddKategori}>
      <PlusOutlined style={{ fontSize: "48px" }} />
    </div>
  );
};

export default KategoriMenuCardAdd;

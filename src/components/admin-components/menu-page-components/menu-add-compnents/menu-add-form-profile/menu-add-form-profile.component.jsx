import React, { useState, useEffect } from "react";
import "./menu-add-form-profile.styles.scss";

// Handling Redux
import { useDispatch, useSelector } from "react-redux";
import {
  setInputProfileMenu,
  removeInputProfileMenu,
} from "../../../../../redux/menu/menu.action";
import { selectInputProfileMenu } from "../../../../../redux/menu/menu.selectors";

// Import Components
import { PlusOutlined } from "@ant-design/icons";

import { Upload, message, Button } from "antd";
const { Dragger } = Upload;

const MenuAddFormProfile = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const inputProfile = useSelector(selectInputProfileMenu);

  // Start Handling Redux
  const dispatch = useDispatch();
  // END Handling Redux
  useEffect(() => {
    if (inputProfile && typeof inputProfile === "object")
      getBase64(inputProfile, imageUrl => setImageUrl(imageUrl));
    if (inputProfile === null) setImageUrl(null);
  }, [inputProfile]);

  const handlingRemoveImage = () => {
    dispatch(removeInputProfileMenu());
  };

  // Method for handling read image file
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = file => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) message.error("hanya bisa upload JPG/PNG file!");

    const isLt1M = file.size / 1024 / 1024 < 1;
    if (!isLt1M) message.error("Gambar harus kurang dari 1MB!");

    if (isJpgOrPng && isLt1M) {
      dispatch(setInputProfileMenu(file));
    }

    return false;
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <section className="menu-add-form-profile">
      <Dragger
        name="avatar"
        listType="picture-card"
        className="avatar-uploader "
        showUploadList={false}
        beforeUpload={beforeUpload}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
      </Dragger>
      <Button
        block
        className="btn-action-primary btn-reset-profile"
        onClick={handlingRemoveImage}
        disabled={inputProfile ? false : true}
      >
        Hapus Foto
      </Button>
    </section>
  );
};

export default MenuAddFormProfile;

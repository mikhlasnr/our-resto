import React, { useState, useEffect } from "react";
import "./menu-update-form-profile.styles.scss";

// Handling Redux
import { useDispatch, useSelector } from "react-redux";
import { setInputProfileMenu } from "../../../../../redux/menu/menu.action";
import { selectInputProfileMenu } from "../../../../../redux/menu/menu.selectors";
import { selectDataMenuById } from "../../../../../redux/menuById/menuById.selectors";

// Import Components
import { PlusOutlined } from "@ant-design/icons";

import { Upload, message, Button } from "antd";
const { Dragger } = Upload;

const MenuAUpdateFormProfile = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const inputProfile = useSelector(selectInputProfileMenu);
  const dataMenuById = useSelector(selectDataMenuById);

  // Start Handling Redux
  const dispatch = useDispatch();
  // END Handling Redux
  useEffect(() => {
    if (inputProfile && typeof inputProfile === "object")
      getBase64(inputProfile, imageUrl => setImageUrl(imageUrl));
    if (inputProfile === null) setImageUrl(null);
  }, [inputProfile]);

  useEffect(() => {
    if (dataMenuById && dataMenuById.Foto) {
      setImageUrl(dataMenuById.Foto);
    }
    return () => {
      setImageUrl(null);
    };
  }, [dataMenuById]);

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
    <section className="menu-update-form-profile">
      <Dragger
        name="avatar"
        listType="picture-card"
        className="avatar-uploader "
        showUploadList={false}
        beforeUpload={beforeUpload}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
      </Dragger>
    </section>
  );
};

export default MenuAUpdateFormProfile;

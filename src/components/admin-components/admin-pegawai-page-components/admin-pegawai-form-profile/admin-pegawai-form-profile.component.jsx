import React from "react";
import "./admin-pegawai-form-profile.styles.scss";

import { Upload, message } from "antd";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

const AdminPegawaiFormProfile = ({
  setInputProfile,
  imageUrl,
  setImageUrl,
}) => {
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = file => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) message.error("hanya bisa upload JPG/PNG file!");

    const isLt1M = file.size / 1024 / 1024 < 1;
    if (!isLt1M) message.error("gambar harus kurang dari 1MB!");

    if (isJpgOrPng && isLt1M) {
      getBase64(file, imageUrl => setImageUrl(imageUrl));
      // getBase64(file, imageUrl => setInputProfile(imageUrl));
      setInputProfile(file);
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
    <Dragger
      name="avatar"
      listType="picture-card"
      className="avatar-uploader pegawai-add-form-profile"
      showUploadList={false}
      beforeUpload={beforeUpload}
    >
      {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
    </Dragger>
  );
};

export default AdminPegawaiFormProfile;

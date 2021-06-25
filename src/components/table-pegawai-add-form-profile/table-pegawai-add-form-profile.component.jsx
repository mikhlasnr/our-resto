import React, { useState } from "react";
import "./table-pegawai-add-form-profile.styles.scss";

import { Upload, message } from "antd";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

const TablePegawaiAddFormProfile = () => {
  const [isUploadLoading, setIsUploadLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = file => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) message.error("hanya bisa upload JPG/PNG file!");

    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) message.error("gambar harus kurang dari 2MB!");

    if (isJpgOrPng && isLt2M) {
      console.log(file);
      getBase64(file, imageUrl => setImageUrl(imageUrl));
    }

    return false;
  };

  const handleChange = info => {
    if (info.file.status === "uploading") {
      // getBase64(info.file.originFileObj, imageUrl => {
      //   setImageUrl(imageUrl);
      // });
      setIsUploadLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      return;
    }
  };

  const uploadButton = (
    <div>
      {isUploadLoading ? <LoadingOutlined /> : <PlusOutlined />}
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
      onChange={handleChange}
    >
      {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
    </Dragger>
  );
};

export default TablePegawaiAddFormProfile;

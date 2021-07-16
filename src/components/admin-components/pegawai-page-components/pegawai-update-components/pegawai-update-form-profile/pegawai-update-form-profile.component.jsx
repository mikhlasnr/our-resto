import React, { useEffect, useState } from "react";
import "./pegawai-update-form-profile.styles.scss";

// Handling Redux
import { useDispatch, useSelector } from "react-redux";
import { setInputProfile } from "../../../../../redux/pegawai/pegawai.action";
import { selectUserData } from "../../../../../redux/userById/userById.selectors";

// Import Components
import { Upload, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

const PegawaiUpdateFormProfile = () => {
  const [imageUrl, setImageUrl] = useState(null);

  // Start Handling Redux
  const dispatch = useDispatch();
  const userByIdData = useSelector(selectUserData);
  // END Handling Redux

  useEffect(() => {
    // listening to userById Reducer
    if (userByIdData && userByIdData.Foto) {
      setImageUrl(userByIdData.Foto);
    }
    return () => {
      setImageUrl(null);
    };
  }, [userByIdData]);

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
      getBase64(file, imageUrl => setImageUrl(imageUrl));
      dispatch(setInputProfile(file));
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

export default PegawaiUpdateFormProfile;

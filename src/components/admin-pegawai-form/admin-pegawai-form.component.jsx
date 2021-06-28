import React, { useEffect, useState } from "react";
import axios from "axios";

// Handling Redux
import { useDispatch } from "react-redux";
import { fetchDataRoles } from "../../redux/roles/roles.action";

// Import Component
import { Form, Row, Col, message } from "antd";
import AdminPegawaiFormProfile from "../admin-pegawai-form-profile/admin-pegawai-form-profile.component";
import AdminPegawaiFormInput from "../admin-pegawai-form-input/admin-pegawai-form-input.component";

const AdminPegawaiForm = () => {
  const [form] = Form.useForm(); //form antd component
  const dispatch = useDispatch();
  const [inputProfile, setInputProfile] = useState(null);

  useEffect(() => {
    dispatch(fetchDataRoles());
  }, []);

  const onFinish = values => {
    const formData = new FormData();
    formData.append("image", inputProfile);

    axios
      .post("/user/add", values.user)
      .then(response => {
        if (inputProfile) {
          axios
            .post(`/user/add/image/${response.data[0]}`, formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then(res => {
              message.success("Tambah Pegawai Berhasil");
            })
            .catch(error => {
              message.error("Email Sudah Ada!");
            });
        } else message.success("Tambah Pegawai Berhasil");

        // Remove input field
        form.resetFields();
      })
      .catch(error => {
        console.log(error.message);
        message.error("Email Sudah Ada!");
      });
  };

  return (
    <Row className="table-pegawai-add-form" gutter={[51, 0]}>
      <Col>
        <AdminPegawaiFormProfile setInputProfile={setInputProfile} />
      </Col>
      <Col flex="auto">
        <AdminPegawaiFormInput onFinish={onFinish} />
      </Col>
    </Row>
  );
};

export default AdminPegawaiForm;

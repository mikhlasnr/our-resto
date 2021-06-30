import React, { useEffect, useState } from "react";
import axios from "axios";
import { storage } from "../../firebase";

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
  }, [dispatch]);

  // ! For Develope
  useEffect(() => {
    console.log(inputProfile);
  }, [inputProfile]);

  const onFinish = values => {
    axios
      .post("/user/add", values.user)
      .then(response => {
        const IdUser = response.data[0];
        if (inputProfile) {
          const uploadTask = storage
            .ref(`userImages/${IdUser}`)
            .put(inputProfile);
          uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {
              console.log(error);
            },
            () => {
              storage
                .ref("userImages")
                .child(`${IdUser}`)
                .getDownloadURL()
                .then(url => {
                  axios
                    .post(`/user/add/image/${IdUser}`, { ImageUrl: url })
                    .then(response => {
                      console.log(url);
                      message.success("Tambah Pegawai Berhasil!");
                    })
                    .catch(err => {
                      message.error("Gagal Upload Gambar Ke Database");
                    });
                })
                .catch(err => {
                  console.log(err);
                  message.error("Gagal Upload Gambar");
                });
            }
          );
        } else message.success("Tambah Pegawai Berhasil!");
        // Remove input field
        // form.resetFields();
      })
      .catch(error => {
        console.log(error);
        message.error("Tambah Pegawai Gagal!");
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

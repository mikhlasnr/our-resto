import React, { useEffect, useState } from "react";
import axios from "axios";
import { storage } from "../../firebase";

// Handling Redux
import { useDispatch } from "react-redux";
import { fetchDataRoles } from "../../redux/roles/roles.action";
import { handlingIsEmailExist } from "../../redux/users/users.action";

// Import Component
import { Form, Row, Col, message, Spin } from "antd";
import AdminPegawaiFormProfile from "../admin-pegawai-form-profile/admin-pegawai-form-profile.component";
import AdminPegawaiFormInput from "../admin-pegawai-form-input/admin-pegawai-form-input.component";

const AdminPegawaiForm = () => {
  const [form] = Form.useForm();

  const dispatch = useDispatch();
  const [inputProfile, setInputProfile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    dispatch(fetchDataRoles());
  }, [dispatch]);

  const handlingDuplicateEmail = userData => {
    const { Email } = userData;
    axios
      .post("/user/validation-email", { Email })
      .then(res => {
        if (res.data) {
          message.error("Email sudah tersedia!");
        } else {
          setIsUploading(true);
          handlingAddPegawai(userData);
        }
        dispatch(handlingIsEmailExist(res.data));
      })
      .catch(error => {
        console.log(error.message);
        message.error("Tambah Pegawai Gagal!");
      });
  };

  // START Method for uploadihg data user
  const handlingAddPegawai = userData => {
    axios
      .post("/user/add", userData)
      .then(response => {
        const IdUser = response.data[0];
        if (inputProfile) {
          handlingUploaImage(IdUser);
        } else {
          message.success("Tambah Pegawai Berhasil!");
          setIsUploading(false);
          form.resetFields();
        }
      })
      .catch(error => {
        console.log(error);
        message.error("Tambah Pegawai Gagal!");
        setIsUploading(false);
      });
  };

  const handlingUploaImage = IdUser => {
    const uploadTask = storage.ref(`userImages/${IdUser}`).put(inputProfile);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
        setIsUploading(false);
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
                setIsUploading(false);
                setImageUrl(null);
                form.resetFields();
              })
              .catch(err => {
                message.error("Gagal Upload Gambar Ke Database");
                setIsUploading(false);
              });
          })
          .catch(err => {
            console.log(err);
            message.error("Gagal Upload Gambar");
            setIsUploading(false);
          });
      }
    );
  };
  // END Method for uploadihg data user

  const onFinish = values => {
    handlingDuplicateEmail(values.user);
  };

  return (
    <Spin spinning={isUploading}>
      <Row className="table-pegawai-add-form" gutter={[51, 0]}>
        <Col>
          <AdminPegawaiFormProfile
            setInputProfile={setInputProfile}
            setImageUrl={setImageUrl}
            imageUrl={imageUrl}
          />
        </Col>
        <Col flex="auto">
          <AdminPegawaiFormInput onFinish={onFinish} form={form} />
        </Col>
      </Row>
    </Spin>
  );
};

export default AdminPegawaiForm;

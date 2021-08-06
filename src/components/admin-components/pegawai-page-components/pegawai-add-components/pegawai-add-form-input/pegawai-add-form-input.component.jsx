/* eslint-disable no-template-curly-in-string */
import React from "react";
import "./pegawai-add-form-input.styles.scss";

import axios from "axios";
import { storage } from "../../../../../firebase";

// Handling Redux
import { useSelector, useDispatch } from "react-redux";

import {
  selectRoles,
  selectRolesIsFetching,
} from "../../../../../redux/roles/roles.selectors";

import { selectInputProfile } from "../../../../../redux/pegawai/pegawai.selectors";

import {
  toggleShowModalAddPegawai,
  toggleIsUploading,
  handlingIsEmailExist,
} from "../../../../../redux/pegawai/pegawai.action";
import { fetchDataPegawaiAdmin } from "../../../../../redux/pegawai/pegawai.action";

// Import Component
import { Form, Input, Select, Button, message } from "antd";

const PegawaiAddFormInput = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const inputProfile = useSelector(selectInputProfile);
  const rolesData = useSelector(selectRoles);
  const rolesDataIsFetching = useSelector(selectRolesIsFetching);

  // Validate Message for Form antd
  const validateMessages = {
    required: "${label} diperlukan!",
    types: {
      email: "${label} format tidak valid!",
      number: "${label} format tidak valid!",
    },
    emailExist: "email sudah ada",
  };

  const validatePhoneNumber = value => {
    const reg = /^-?\d*(\.\d*)?$/;
    if (!isNaN(value) && reg.test(value)) {
      if (value.length < 12) {
        message.error("Nomor harus diantara 12 sampai 13 angka!");
        return false;
      } else return true;
    } else {
      message.error("Format Nomor Telpon Salah!");
      return false;
    }
  };

  // START Method for uploadihg data user
  const handlingDuplicateEmail = userData => {
    const { Email } = userData;
    axios
      .post("/user/validation-email", { Email })
      .then(res => {
        dispatch(handlingIsEmailExist(res.data.exist));
        if (res.data.exist) message.error("Email sudah tersedia!");
        else handlingAddPegawai(userData);
      })
      .catch(error => {
        console.log(error.message);
        message.error("Tambah Pegawai Gagal!");
      });
  };

  const handlingAddPegawai = userData => {
    dispatch(toggleIsUploading());
    axios
      .post("/user/add", userData)
      .then(response => {
        const IdUser = response.data[0];
        if (inputProfile) {
          handlingUploaImage(IdUser);
        } else {
          form.resetFields();
          message.success("Tambah Pegawai Berhasil!");
          dispatch(toggleIsUploading());
          dispatch(fetchDataPegawaiAdmin());
          dispatch(toggleShowModalAddPegawai());
        }
      })
      .catch(error => {
        console.log(error);
        message.error("Tambah Pegawai Gagal!");
        dispatch(toggleIsUploading());
      });
  };

  const handlingUploaImage = IdUser => {
    const uploadTask = storage.ref(`userImages/${IdUser}`).put(inputProfile);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
        dispatch(toggleIsUploading());
      },
      () => {
        storage
          .ref("userImages")
          .child(`${IdUser}`)
          .getDownloadURL()
          .then(url => {
            axios
              .put(`/user/add/image/${IdUser}`, { ImageUrl: url })
              .then(response => {
                message.success("Tambah Pegawai Berhasil!");
                dispatch(fetchDataPegawaiAdmin());
                dispatch(toggleShowModalAddPegawai());
                dispatch(toggleIsUploading());
                form.resetFields();
              })
              .catch(err => {
                message.error("Gagal Upload Gambar Ke Database");
                dispatch(toggleIsUploading());
              });
          })
          .catch(err => {
            console.log(err);
            message.error("Gagal Upload Gambar");
            dispatch(toggleIsUploading());
          });
      }
    );
  };
  // END Method for uploadihg data user

  const onFinish = values => {
    if (validatePhoneNumber(values.NoTelp)) handlingDuplicateEmail(values);
  };

  return (
    <section className="pegawai-add-form-input">
      <Form
        form={form}
        layout="vertical"
        name="tambah-pegawai"
        validateMessages={validateMessages}
        onFinish={onFinish}
      >
        <div className="pegawai-add-form-input-container">
          <Form.Item name="Nama" label="Nama" rules={[{ required: true }]}>
            <Input className="input" allowClear />
          </Form.Item>
          <Form.Item
            name="Email"
            label="Email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input className="input" allowClear />
          </Form.Item>
          <Form.Item name="NoTelp" label="No Telp" rules={[{ required: true }]}>
            <Input className="input" maxLength={13} allowClear />
          </Form.Item>
          <Form.Item name="Alamat" label="Alamat" rules={[{ required: true }]}>
            <Input className="input" allowClear />
          </Form.Item>
          <Form.Item name="IdRole" label="Posisi" rules={[{ required: true }]}>
            <Select
              loading={rolesDataIsFetching}
              dropdownClassName="form-select-primary"
            >
              {rolesData
                ? rolesData.map(role => (
                    <Select.Option key={role.IdRole} value={role.IdRole}>
                      <div className="form-select-item-custom">
                        <span>{role.NamaRole}</span>
                        <div className="dote">
                          <div className="dote-inner"></div>
                        </div>
                      </div>
                    </Select.Option>
                  ))
                : null}
            </Select>
          </Form.Item>
          <Form.Item
            name="Password"
            label="Kata Sandi"
            rules={[{ required: true }]}
          >
            <Input.Password className="input" allowClear />
          </Form.Item>
        </div>
        <Form.Item className="btn-submit">
          <Button
            htmlType="submit"
            block
            className="custom-default-button secondary-button"
          >
            Simpan
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default PegawaiAddFormInput;

import React, { useEffect, useState } from "react";
import "./pegawai-update-form-input.styles.scss";

import axios from "axios";
import { storage } from "../../../../../firebase";

// Handling Redux
import { useSelector, useDispatch } from "react-redux";

import {
  selectRoles,
  selectRolesIsFetching,
} from "../../../../../redux/roles/roles.selectors";
import { selectInputProfile } from "../../../../../redux/pegawai/pegawai.selectors";
import { selectUserData } from "../../../../../redux/userById/userById.selectors";

import {
  toggleShowModalUpdatePegawai,
  toggleIsUploading,
} from "../../../../../redux/pegawai/pegawai.action";
import { fetchDataPegawai } from "../../../../../redux/users/users.action";

// Import Component
import { Form, Input, Select, Button, message } from "antd";

const PegawaiUpdateFormInput = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const userById = useSelector(selectUserData);
  const inputProfile = useSelector(selectInputProfile);
  const rolesData = useSelector(selectRoles);
  const rolesDataIsFetching = useSelector(selectRolesIsFetching);

  const [isFormChange, setIsFormChange] = useState(false);

  useEffect(() => {
    console.log(userById);
    if (userById) {
      form.setFieldsValue({ ...userById });
    }
    return () => {
      setIsFormChange(false);
    };
  }, [userById]);

  useEffect(() => {
    if (inputProfile) setIsFormChange(true);
    return () => {
      setIsFormChange(false);
    };
  }, [inputProfile]);

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
  const handlingUpdatePegawai = userData => {
    dispatch(toggleIsUploading());
    console.log(userData);
    axios
      .post(`/user/update/${userById.IdUser}`, userData)
      .then(response => {
        if (inputProfile) {
          handlingUploaImage();
        } else {
          dispatch(fetchDataPegawai());
          dispatch(toggleIsUploading());
          message.success("Tambah Pegawai Berhasil!");
          dispatch(toggleShowModalUpdatePegawai());
        }
      })
      .catch(err => {
        message.error("Pembaharuan pegawai gagal!");
        dispatch(toggleIsUploading());
      });
  };

  const handlingUploaImage = () => {
    const uploadTask = storage
      .ref(`userImages/${userById.IdUser}`)
      .put(inputProfile);
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
          .child(`${userById.IdUser}`)
          .getDownloadURL()
          .then(url => {
            axios
              .post(`/user/add/image/${userById.IdUser}`, { ImageUrl: url })
              .then(response => {
                dispatch(fetchDataPegawai());
                message.success("Tambah Pegawai Berhasil!");
                dispatch(toggleShowModalUpdatePegawai());
                dispatch(toggleIsUploading());
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
    if (validatePhoneNumber(values.NoTelp)) {
      let dataInput = {};
      if (userById.Password === values.Password) {
        const { Password, ...otherValues } = values;
        dataInput = otherValues;
      } else dataInput = values;
      handlingUpdatePegawai(dataInput);
    }
  };

  return (
    <section className="table-pegawai-add-form-input">
      <Form
        form={form}
        layout="vertical"
        name="tambah-pegawai"
        validateMessages={validateMessages}
        onFinish={onFinish}
        onFieldsChange={() => {
          setIsFormChange(true);
        }}
      >
        <div className="table-pegawai-add-form-input">
          <Form.Item name="Nama" label="Nama" rules={[{ required: true }]}>
            <Input className="input" />
          </Form.Item>
          <Form.Item
            name="Email"
            label="Email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input className="input" />
          </Form.Item>
          <Form.Item
            name="NoTelp"
            label="No Telp"
            rules={[{ required: true, types: "number" }]}
          >
            <Input className="input" maxLength={13} />
          </Form.Item>
          <Form.Item name="Alamat" label="Alamat" rules={[{ required: true }]}>
            <Input className="input" />
          </Form.Item>
          <Form.Item name="IdRole" label="Posisi" rules={[{ required: true }]}>
            <Select loading={rolesDataIsFetching}>
              {rolesData
                ? rolesData.map(role => (
                    <Select.Option key={role.IdRole} value={role.IdRole}>
                      {role.NamaRole}
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
            <Input.Password className="input" />
          </Form.Item>
        </div>
        <Form.Item className="btn-submit ">
          <Button
            htmlType="submit"
            block
            className="custom-default-button secondary-button"
            disabled={!isFormChange}
          >
            Simpan
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default PegawaiUpdateFormInput;

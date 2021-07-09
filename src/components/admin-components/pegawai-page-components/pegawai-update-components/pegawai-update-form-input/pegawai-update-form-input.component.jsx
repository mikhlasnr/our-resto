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
import {
  selectUserData,
  selectUserByIdIsFetching,
} from "../../../../../redux/userById/userById.selectors";

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
  const isDataFetching = useSelector(selectUserByIdIsFetching);
  const inputProfile = useSelector(selectInputProfile);
  const rolesData = useSelector(selectRoles);
  const rolesDataIsFetching = useSelector(selectRolesIsFetching);

  useEffect(() => {
    if (userById) {
      form.setFieldsValue({ ...userById });
    }
  }, [userById]);

  // Validate Message for Form antd
  const validateMessages = {
    required: "${label} diperlukan!",
    types: {
      email: "${label} format tidak valid!",
      number: "${label} format tidak valid!",
    },
    emailExist: "email sudah ada",
  };

  // START Method for uploadihg data user
  const handlingUpdatePegawai = userData => {};

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
              .post(`/user/add/image/${IdUser}`, { ImageUrl: url })
              .then(response => {
                dispatch(fetchDataPegawai());
                message.success("Tambah Pegawai Berhasil!");

                dispatch(toggleShowModalUpdatePegawai());
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
    console.log(values);
  };

  return (
    <section className="table-pegawai-add-form-input">
      <Form
        form={form}
        layout="vertical"
        name="tambah-pegawai"
        validateMessages={validateMessages}
        onFinish={onFinish}
      >
        <div className="table-pegawai-add-form-input">
          <Form.Item name="Nama" label="Nama" rules={[{ required: true }]}>
            <Input className="input" />
          </Form.Item>
          <Form.Item
            name="Email"
            label="Email"
            rules={[{ required: true, type: "email" }]}
            hasFeedback={true}
          >
            <Input className="input" />
          </Form.Item>
          <Form.Item
            name="NoTelp"
            label="No Telp"
            rules={[{ required: true, types: "number" }]}
          >
            <Input className="input" maxLength={13} value="0831810" />
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
            type="primary"
            htmlType="submit"
            block
            className="custom-default-button secondary-button"
          >
            Tambah Pegawai
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default PegawaiUpdateFormInput;

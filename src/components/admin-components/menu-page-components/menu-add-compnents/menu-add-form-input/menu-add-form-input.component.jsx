/* eslint-disable no-template-curly-in-string */
import React from "react";
import "./menu-add-form-input.styles.scss";

import axios from "axios";
import { storage } from "../../../../../firebase";

// Handling Redux
import { useSelector, useDispatch } from "react-redux";

import { selectInputProfile } from "../../../../../redux/menu/menu.selectors";
import {
  toggleShowModalAddMenu,
  toggleIsUploading,
  fetchDataMenu,
  removeInputProfile,
} from "../../../../../redux/menu/menu.action";
import { selectDataKategoriMenu } from "../../../../../redux/kategoriMenu/kategoriMenu.selectors";

// Import Component
import { Form, Input, Button, message, InputNumber, Select } from "antd";

const MenuAddFormInput = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const inputProfile = useSelector(selectInputProfile);
  const dataKategori = useSelector(selectDataKategoriMenu);

  // Validate Message for Form antd
  const validateMessages = {
    required: "${label} Diperlukan!",
    types: {
      number: "${label} harus angka!",
    },
  };

  // START Method for uploadihg data user
  const handlingAddMenu = menuData => {
    dispatch(toggleIsUploading());
    axios
      .post("/menu/add", menuData)
      .then(response => {
        const IdMenu = response.data[0];
        if (inputProfile) {
          handlingUploaImage(IdMenu);
        } else {
          form.resetFields();
          message.success("Tambah Menu Berhasil!");
          dispatch(toggleIsUploading());
          dispatch(fetchDataMenu());
          dispatch(toggleShowModalAddMenu());
        }
      })
      .catch(error => {
        console.log(error);
        message.error("Tambah Menu Gagal!");
        dispatch(toggleIsUploading());
      });
  };

  const handlingUploaImage = IdMenu => {
    const uploadTask = storage.ref(`menuImages/${IdMenu}`).put(inputProfile);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
        dispatch(toggleIsUploading());
      },
      () => {
        storage
          .ref("menuImages")
          .child(`${IdMenu}`)
          .getDownloadURL()
          .then(url => {
            axios
              .put(`/menu/add/images/${IdMenu}`, { ImageUrl: url })
              .then(response => {
                message.success("Tambah Kategori Berhasil!");
                form.resetFields();
                dispatch(removeInputProfile());
                dispatch(fetchDataMenu());
                dispatch(toggleShowModalAddMenu());
                dispatch(toggleIsUploading());
              })
              .catch(err => {
                console.log(err);
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

  const onFinish = values => {
    let dataUpload = values;
    const { IdKategori, ...otherData } = values;
    if (!IdKategori) dataUpload = otherData;
    console.log(dataUpload);
    handlingAddMenu(dataUpload);
  };
  // END Method for uploadihg data user

  return (
    <section className="menu-add-form">
      <Form
        form={form}
        name="tambah-menu"
        layout="vertical"
        validateMessages={validateMessages}
        onFinish={onFinish}
      >
        <div className="menu-add-form-container">
          <Form.Item
            name="NamaMenu"
            label="Nama Menu"
            rules={[{ required: true }]}
          >
            <Input
              className="input"
              placeholder="Ex : Hotdog Jumbo"
              allowClear
            />
          </Form.Item>
          <Form.Item
            name="Harga"
            label="Harga Menu"
            rules={[{ required: true }]}
          >
            <InputNumber
              className="input-number"
              min={0}
              max={9999999}
              placeholder="Ex : 10000"
            />
          </Form.Item>
          <Form.Item name="Stok" label="Stok Menu" rules={[{ required: true }]}>
            <InputNumber
              className="input-number"
              min={0}
              max={99999}
              placeholder="Ex : 100"
            />
          </Form.Item>
          <Form.Item name="IdKategori" label="Kategori Menu">
            <Select
              dropdownClassName="form-select-primary"
              placeholder="--Pilih Kategori--"
              allowClear
            >
              {dataKategori
                ? dataKategori.map(kategori => (
                    <Select.Option
                      key={kategori.IdKategori}
                      value={kategori.IdKategori}
                    >
                      <div className="form-select-item-custom">
                        <span>{kategori.NamaKategori}</span>
                        <div className="dote">
                          <div className="dote-inner"></div>
                        </div>
                      </div>
                    </Select.Option>
                  ))
                : null}
            </Select>
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

export default MenuAddFormInput;

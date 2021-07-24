/* eslint-disable no-template-curly-in-string */
import React, { useEffect, useState } from "react";
import "./menu-update-form-input.styles.scss";

import axios from "axios";
import { storage } from "../../../../../firebase";

// Handling Redux
import { useSelector, useDispatch } from "react-redux";

import { selectInputProfileMenu } from "../../../../../redux/menu/menu.selectors";
import {
  toggleShowModalUpdateMenu,
  toggleIsUploadingMenu,
  fetchDataMenu,
  removeInputProfileMenu,
} from "../../../../../redux/menu/menu.action";
import { selectDataKategoriMenu } from "../../../../../redux/kategoriMenu/kategoriMenu.selectors";
import { selectDataMenuById } from "../../../../../redux/menuById/menuById.selectors";

// Import Component
import { Form, Input, Button, message, InputNumber, Select } from "antd";

const MenuUpdateFormInput = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const inputProfile = useSelector(selectInputProfileMenu);
  const dataKategori = useSelector(selectDataKategoriMenu);
  const dataMenuById = useSelector(selectDataMenuById);
  const [isFormChange, setIsFormChange] = useState(false);

  useEffect(() => {
    if (dataMenuById) form.setFieldsValue({ ...dataMenuById });
    return () => {
      setIsFormChange(false);
    };
  }, [dataMenuById]);

  useEffect(() => {
    if (dataMenuById)
      if (inputProfile !== dataMenuById.Foto) setIsFormChange(true);
    return () => {
      setIsFormChange(false);
    };
  }, [inputProfile]);
  // Validate Message for Form antd
  const validateMessages = {
    required: "${label} Diperlukan!",
    types: {
      number: "${label} harus angka!",
    },
  };

  // START Method for uploadihg data user
  const handlingUpdateMenu = menuData => {
    dispatch(toggleIsUploadingMenu());
    if (dataMenuById)
      axios
        .put(`/menu/update/${dataMenuById.IdMenu}`, menuData)
        .then(response => {
          if (inputProfile && typeof inputProfile === "object") {
            handlingUploaImage(dataMenuById.IdMenu);
          } else {
            dispatch(toggleIsUploadingMenu());
            dispatch(fetchDataMenu());
            dispatch(toggleShowModalUpdateMenu());
            message.success("Pembaharuan Menu Berhasil!");
          }
        })
        .catch(err => {
          dispatch(toggleIsUploadingMenu());
          message.error("Pembaharuan Menu Gagal!");
        });
  };

  const handlingUploaImage = IdMenu => {
    const uploadTask = storage.ref(`menuImages/${IdMenu}`).put(inputProfile);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
        dispatch(toggleIsUploadingMenu());
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
                message.success("Pembaharuan Menu Berhasil!");
                form.resetFields();
                dispatch(removeInputProfileMenu());
                dispatch(fetchDataMenu());
                dispatch(toggleShowModalUpdateMenu());
                dispatch(toggleIsUploadingMenu());
              })
              .catch(err => {
                console.log(err);
                message.error("Gagal Upload Gambar!");
                dispatch(toggleIsUploadingMenu());
              });
          })
          .catch(err => {
            console.log(err);
            message.error("Gagal Upload Gambar!");
            dispatch(toggleIsUploadingMenu());
          });
      }
    );
  };

  const handlingFormChange = () => {
    setIsFormChange(true);
  };

  const onFinish = values => {
    let inputData = values;
    const { IdKategori, ...otherData } = values;
    if (typeof IdKategori === "undefined")
      inputData = { IdKategori: null, ...otherData };
    handlingUpdateMenu(inputData);
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
        onFieldsChange={handlingFormChange}
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
            disabled={!isFormChange}
          >
            Simpan
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default MenuUpdateFormInput;

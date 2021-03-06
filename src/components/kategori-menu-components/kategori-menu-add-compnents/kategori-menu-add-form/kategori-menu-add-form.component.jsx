/* eslint-disable no-template-curly-in-string */
import React, { useEffect } from "react";
import "./kategori-menu-add-form.styles.scss";

import axios from "axios";
import { storage } from "../../../../firebase";

// Handling Redux
import { useSelector, useDispatch } from "react-redux";

import { selectInputProfile } from "../../../../redux/kategoriMenu/kategoriMenu.selectors";

import {
  toggleShowModalAddKategoriMenu,
  toggleIsUploadingKategoriMenu,
  fetchDataKategoriMenu,
} from "../../../../redux/kategoriMenu/kategoriMenu.action";

// Import Component
import { Form, Input, Button, message } from "antd";
import PegawaiUpdateFormProfile from "../kategori-menu-add-form-profile/kategori-menu-add-form-profile.component";

const KategoriMenuAddForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const inputProfile = useSelector(selectInputProfile);

  useEffect(() => {
    if (inputProfile) form.setFieldsValue({ Foto: inputProfile });
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

  // Handling Capitalize Each Word
  const handlingCapitalizeEachWord = text => {
    const arr = text.toLowerCase().split(" ");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const textResult = arr.join(" ");
    return textResult;
  };
  // START Method for uploadihg data user
  const handlingAddKategoriMenu = NamaKategori => {
    dispatch(toggleIsUploadingKategoriMenu());
    axios
      .post("/kategori-menu/add", {
        NamaKategori: handlingCapitalizeEachWord(NamaKategori),
      })
      .then(response => {
        const IdKategori = response.data[0];
        handlingUploaImage(IdKategori);
      })
      .catch(error => {
        console.log(error);
        message.error("Tambah Pegawai Gagal!");
        dispatch(toggleIsUploadingKategoriMenu());
      });
  };

  const handlingUploaImage = IdKategori => {
    const uploadTask = storage
      .ref(`kategoriImages/${IdKategori}`)
      .put(inputProfile);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
        dispatch(toggleIsUploadingKategoriMenu());
      },
      () => {
        storage
          .ref("kategoriImages")
          .child(`${IdKategori}`)
          .getDownloadURL()
          .then(url => {
            axios
              .put(`/kategori-menu/add/images/${IdKategori}`, { ImageUrl: url })
              .then(response => {
                message.success("Tambah Kategori Berhasil!");
                dispatch(fetchDataKategoriMenu());
                dispatch(toggleShowModalAddKategoriMenu());
                dispatch(toggleIsUploadingKategoriMenu());
                form.resetFields();
              })
              .catch(err => {
                console.log(err);
                message.error("Gagal Upload Gambar Ke Database");
                dispatch(toggleIsUploadingKategoriMenu());
              });
          })
          .catch(err => {
            console.log(err);
            message.error("Gagal Upload Gambar");
            dispatch(toggleIsUploadingKategoriMenu());
          });
      }
    );
  };
  // END Method for uploadihg data user

  const onFinish = values => {
    handlingAddKategoriMenu(values.NamaKategori);
  };

  return (
    <section className="kategori-add-form-input">
      <Form
        form={form}
        layout="vertical"
        name="tambah-pegawai"
        validateMessages={validateMessages}
        onFinish={onFinish}
      >
        <div className="kategori-add-form-input-container">
          <Form.Item
            name="NamaKategori"
            label="Nama Kategori"
            rules={[{ required: true }]}
          >
            <Input className="input" />
          </Form.Item>
          <Form.Item
            name="Foto"
            label="Gambar Kategori"
            rules={[{ required: true }]}
          >
            <PegawaiUpdateFormProfile />
          </Form.Item>
          <Form.Item className="btn-submit ">
            <Button
              htmlType="submit"
              block
              className="custom-default-button secondary-button"
            >
              Simpan
            </Button>
          </Form.Item>
        </div>
      </Form>
    </section>
  );
};

export default KategoriMenuAddForm;

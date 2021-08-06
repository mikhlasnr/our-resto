import React from "react";
import "./buat-pesanan-form.styles.scss";
import axios from "axios";

// Handling redux
import { useDispatch, useSelector } from "react-redux";
import { clearPesananItems } from "../../../redux/pesanan/pesanan.action";
import {
  toggleCheckoutModalHidden,
  toggleIsUploadingPesanan,
} from "../../../redux/pesananUtils/pesananUtils.action";
import {
  selectPesananItemsForUpload,
  selectPesananItemsCount,
  selectPesananItemsTotal,
} from "../../../redux/pesanan/pesanan.selectors";
import { selectCurrentUser } from "../../../redux/user/user.selectors";
import { fetchDataMenu } from "../../../redux/menu/menu.action";

// Handling Route
import { useHistory } from "react-router-dom";

// Import Component
import { Form, Input, Button, InputNumber, message } from "antd";

const BuatPesananForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const pesananItems = useSelector(selectPesananItemsForUpload);
  const { IdUser } = useSelector(selectCurrentUser);
  const TotalQuantity = useSelector(selectPesananItemsCount);
  const TotalHarga = useSelector(selectPesananItemsTotal);

  const validateNomorMeja = txtNomorMeja => {
    const intOnly = /^[0-9]*$/;
    if (intOnly.test(txtNomorMeja)) {
      return true;
    } else {
      message.error("Format Nomor Meja Salah!");
      return false;
    }
  };

  // START Method for uploadihg data user

  const handlingAddPesanan = pesananData => {
    dispatch(toggleIsUploadingPesanan());
    axios
      .post("/pesanan/add", pesananData)
      .then(response => {
        handlingUpdateStok();
      })
      .catch(error => {
        console.log(error);
        message.error("Buat Pesanan Gagal!");
      });
  };
  const handlingUpdateStok = () => {
    pesananItems.map((item, indeks) => {
      if (indeks === pesananItems.length - 1) {
        axios
          .put(`/menu/decrement-stok/${item.IdMenu}`, {
            Quantity: item.Quantity,
          })
          .then(res => {
            form.resetFields();
            message.success("Buat Pesanan Berhasil!");
            dispatch(toggleIsUploadingPesanan());
            dispatch(toggleCheckoutModalHidden());
            dispatch(clearPesananItems());
          })
          .catch(error => console.error(error));
      } else {
        axios
          .put(`/menu/decrement-stok/${item.IdMenu}`, {
            Quantity: item.Quantity,
          })
          .catch(error => console.error(error));
      }
    });
  };
  const onFinish = values => {
    const inputData = {
      DetailPesanan: pesananItems,
      IdUser,
      TotalQuantity,
      TotalHarga,
      ...values,
    };
    if (validateNomorMeja(values.NoMeja)) handlingAddPesanan(inputData);
  };

  return (
    <Form
      form={form}
      id="form-buat-pesanan"
      layout="vertical"
      name="basic"
      onFinish={onFinish}
    >
      <Form.Item
        label="Nama Pemesan :"
        name="AtasNama"
        rules={[{ required: true, message: "Masukkan Nama Pemesan!" }]}
      >
        <Input placeholder="Ex: Ikhlas Menir" className="input" />
      </Form.Item>
      <Form.Item
        label="Nomor Meja :"
        name="NoMeja"
        rules={[{ required: true, message: "Masukkan Nomor Meja!" }]}
      >
        <InputNumber
          className="input-number"
          min={0}
          max={300}
          placeholder="Ex : 9"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          block
          className="custom-default-button secondary-button btn-form-buat-pesanan"
        >
          Simpan
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BuatPesananForm;

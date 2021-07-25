import React from "react";
import "./buat-pesanan-form.styles.scss";

// Handling redux
import { useDispatch, useSelector } from "react-redux";
import { toggleCheckoutModalHidden } from "../../../redux/pesanan/pesanan.action";
import { selectPesananItems } from "../../../redux/pesanan/pesanan.selectors";

// Handling Route
import { useHistory } from "react-router-dom";

// Import Component
import { Form, Input, Button, InputNumber } from "antd";

const BuatPesananForm = () => {
  const dispatch = useDispatch();
  const pesananItems = useSelector(selectPesananItems);
  const onFinish = values => {
    console.log(values);
    console.log(pesananItems);
    // dispatch(toggleCheckoutModalHidden());
  };

  return (
    <Form
      id="form-buat-pesanan"
      layout="vertical"
      name="basic"
      onFinish={onFinish}
    >
      <Form.Item
        label="Nama Pemesan :"
        name="NamaPemesan"
        rules={[{ required: true, message: "Masukkan Nama Pemesan!" }]}
      >
        <Input placeholder="Ex: Ikhlas Menir" className="input" />
      </Form.Item>
      <Form.Item
        label="Nomor Meja :"
        name="NomorMeja"
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

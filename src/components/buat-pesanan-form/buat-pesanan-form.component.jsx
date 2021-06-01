import React from "react";
import "./buat-pesanan-form.styles.scss";
// handling redux
import { connect } from "react-redux";
import { toggleCheckoutModalHidden } from "../../redux/pesanan/pesanan.action";

// Dependencies
import { withRouter } from "react-router-dom";

// Import Component
import { Form, Input, Button } from "antd";

const BuatPesananForm = ({ history, dispatch }) => {
  const onFinish = values => {
    console.log("Success:", values);
    history.push("/kasir/pesanan");
    dispatch(toggleCheckoutModalHidden());
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      id="form-buat-pesanan"
      layout="vertical"
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      requiredMark={"optional"}
    >
      <Form.Item
        label="Nama Pemesan :"
        name="namaPemesan"
        rules={[{ required: true, message: "Masukkan Nama Pemesan!" }]}
      >
        <Input placeholder="Ex: Ikhlas Menir" className="input" />
      </Form.Item>
      <Form.Item
        label="Nomor Meja :"
        name="nomorMeja"
        rules={[{ required: true, message: "Masukkan Nomor Meja!" }]}
      >
        <Input placeholder="Ex: 14" className="input" />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          block
          className="custom-default-button secondary-button"
        >
          Simpan
        </Button>
      </Form.Item>
    </Form>
  );
};

export default withRouter(connect()(BuatPesananForm));

import React from "react";
import "./buat-pesanan-form.styles.scss";
// handling redux
import { connect } from "react-redux";
import { toggleCreateUserModalHidden } from "../../redux/user/user.action";

// Import Component
import { Form, Input, Button } from "antd";

const CreateUserForm = ({ dispatch }) => {
  const onFinish = values => {
    dispatch(toggleCreateUserModalHidden());
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

export default connect()(CreateUserForm);

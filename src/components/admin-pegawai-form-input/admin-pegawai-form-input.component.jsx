import React from "react";
import "./admin-pegawai-form-input.styles.scss";

// Import Component
import { Form, Input, Select, Button } from "antd";

// import data
import DATA_ROLE from "../../assets/data/DATA_ROLE";

const AdminPegawaiFormInput = () => {
  const validateMessages = {
    required: "${label} diperlukan!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
  };

  const onFinish = values => {
    console.log("Success:", values);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  const handlingOptionRole = () =>
    DATA_ROLE.map(data => (
      <Select.Option key={data.id} value={data.idRole}>
        {data.namaRole}
      </Select.Option>
    ));
  return (
    <section className="table-pegawai-add-form-input">
      <Form
        layout="vertical"
        name="nest-messages"
        validateMessages={validateMessages}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div className="table-pegawai-add-form-input">
          <Form.Item
            name={["user", "nama"]}
            label="Nama"
            rules={[{ required: true }]}
          >
            <Input className="input" />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input className="input" />
          </Form.Item>
          <Form.Item
            name={["user", "noHp"]}
            label="No Hp"
            rules={[{ required: true, types: "number" }]}
          >
            <Input className="input" maxLength={13} />
          </Form.Item>
          <Form.Item
            name={["user", "alamat"]}
            label="Alamat"
            rules={[{ required: true }]}
          >
            <Input className="input" />
          </Form.Item>
          <Form.Item
            name={["user", "role"]}
            label="Posisi"
            rules={[{ required: true }]}
          >
            <Select>{handlingOptionRole()}</Select>
          </Form.Item>
          <Form.Item
            name={["user", "kataSandi"]}
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

export default AdminPegawaiFormInput;

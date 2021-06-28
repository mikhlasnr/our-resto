import React from "react";
import "./admin-pegawai-form-input.styles.scss";

// Handling Redux
import { useSelector } from "react-redux";
import { selectRoles } from "../../redux/roles/roles.selectors";
// Import Component
import { Form, Input, Select, Button } from "antd";

const AdminPegawaiFormInput = ({ onFinish }) => {
  const rolesData = useSelector(selectRoles);

  const validateMessages = {
    required: "${label} diperlukan!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  const handlingOptionRole = () =>
    rolesData.map(role => (
      <Select.Option key={role.IdRole} value={role.IdRole}>
        {role.NamaRole}
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
            name={["user", "Nama"]}
            label="Nama"
            rules={[{ required: true }]}
          >
            <Input className="input" />
          </Form.Item>
          <Form.Item
            name={["user", "Email"]}
            label="Email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input className="input" />
          </Form.Item>
          <Form.Item
            name={["user", "NoTelp"]}
            label="No Telp"
            rules={[{ required: true, types: "number" }]}
          >
            <Input className="input" maxLength={13} />
          </Form.Item>
          <Form.Item
            name={["user", "Alamat"]}
            label="Alamat"
            rules={[{ required: true }]}
          >
            <Input className="input" />
          </Form.Item>
          <Form.Item
            name={["user", "IdRole"]}
            label="Posisi"
            rules={[{ required: true }]}
          >
            <Select>{handlingOptionRole()}</Select>
          </Form.Item>
          <Form.Item
            name={["user", "Password"]}
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

import React from "react";
import "./pegawai-add-form-input.styles.scss";

// Handling Redux
import { useSelector } from "react-redux";
import {
  selectRoles,
  selectRolesIsFetching,
} from "../../../../../redux/roles/roles.selectors";
import { selectIsEmailExist } from "../../../../../redux/pegawai/pegawai.selectors";

// Import Component
import { Form, Input, Select, Button } from "antd";

const PegawaiAddFormInput = ({ onFinish, form }) => {
  // const [form] = Form.useForm();

  const rolesData = useSelector(selectRoles);
  const rolesDataIsFetching = useSelector(selectRolesIsFetching);
  const isEmailExist = useSelector(selectIsEmailExist);

  const validateMessages = {
    required: "${label} diperlukan!",
    types: {
      email: "${label} format tidak valid!",
      number: "${label} format tidak valid!",
    },
    emailExist: "email sudah ada",
  };

  const handlingIsEmailExist = () => {
    if (isEmailExist) {
      console.log("email exist");
      return "error";
    }
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
            validateStatus={handlingIsEmailExist()}
            hasFeedback={true}
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

export default PegawaiAddFormInput;

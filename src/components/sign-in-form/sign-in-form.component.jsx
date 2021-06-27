import React from "react";
import "./sign-in-form.styles.scss";
import axios from "axios";

// import endpoint API

// Handilng Redux
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.action";

// Handling Route
import { withRouter } from "react-router-dom";

// Import Component
import { Form, Input, Button, message } from "antd";

const FormSignIn = ({ history }) => {
  const dispatch = useDispatch();

  const [form] = Form.useForm(); //form antd component
  const validateMessages = {
    required: "${label} diperlukan!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
  };

  const onFinish = values => {
    const { email, kataSandi } = values.user;
    axios
      .post("/signin", {
        email,
        kataSandi,
      })
      .then(response => {
        if (response.data.Email) {
          dispatch(setCurrentUser(response.data));
          message.success("Berhasil Login");
          history.push("/dashboard");
        }
      })
      .catch(error => {
        message.error("Email atau Password Salah");
      });

    // Remove input field
    form.resetFields();
  };

  return (
    <section id="form-sign-in-kasir">
      <Form
        form={form}
        layout="vertical"
        name="login-form"
        validateMessages={validateMessages}
        onFinish={onFinish}
      >
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[{ required: true, type: "email" }]}
        >
          <Input className="input" />
        </Form.Item>
        <Form.Item
          name={["user", "kataSandi"]}
          label="Kata Sandi"
          rules={[{ required: true }]}
        >
          <Input.Password className="input" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            className="custom-default-button primary-button"
          >
            Masuk
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default withRouter(FormSignIn);

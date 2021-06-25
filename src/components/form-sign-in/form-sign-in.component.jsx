import React from "react";
import "./form-sign-in.styles.scss";
// import endpoint API
import API_URL from "../../db";

// Handilng Redux
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/users/users.action";
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
    fetch(`${API_URL}/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        kataSandi: kataSandi,
      }),
    })
      .then(response => response.json())
      .then(user => {
        if (user.Email) {
          dispatch(setCurrentUser(user));
          message.success("Berhasil Login");
          history.push("/dashboard");
        } else message.error("Email atau Password Salah");
      })
      .catch(error => console.log(error));
    form.resetFields();
    // Remove input field
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return (
    <section id="form-sign-in-kasir">
      <Form
        form={form}
        layout="vertical"
        name="login-form"
        validateMessages={validateMessages}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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

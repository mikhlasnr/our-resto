import React, { Component } from "react";
import "./form-sign-in.styles.scss";

// Dependencies
import { withRouter } from "react-router-dom";

// Import Component
import { Form, Input, Button } from "antd";

const FormSignIn = ({ history }) => {
  const validateMessages = {
    required: "${label} diperlukan!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
  };

  const onFinish = values => {
    console.log("Success:", values);
    history.push("/dashboard");
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return (
    <section id="form-sign-in-kasir">
      <Form
        layout="vertical"
        name="nest-messages"
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

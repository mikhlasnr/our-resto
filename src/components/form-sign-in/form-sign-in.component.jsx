import React, { Component } from "react";
import "./form-sign-in.styles.scss";

// Dependencies
import { withRouter } from "react-router-dom";

// Import Component
import { Form, Input, Button } from "antd";

class FormSignIn extends Component {
  onFinish = values => {
    console.log("Success:", values);
    this.props.history.push("/");
  };

  onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  render() {
    return (
      <section id="form-sign-in-kasir">
        <Form
          layout="vertical"
          name="basic"
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          requiredMark={"optional"}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Username yang Anda Masukkan tidak terhubung ke akun",
              },
            ]}
          >
            <Input placeholder="Masukkan Username-mu" className="input" />
          </Form.Item>

          <Form.Item
            label="Kata Sandi"
            name="kataSandi"
            rules={[
              {
                required: true,
                message: "Kata sandi yang Anda masukkan salah",
              },
            ]}
            className="form-item-password"
          >
            <Input.Password
              placeholder="Masukkan Kata sandimu"
              className="input"
            />
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
  }
}

export default withRouter(FormSignIn);

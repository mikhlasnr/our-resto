import React, { Component } from "react";
import "./FormSignInKasir.styles.scss";

// Dependencies
import { withRouter } from "react-router-dom";

// Import Component
import { Form, Input, Button } from "antd";

class FormSignInKasir extends Component {
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
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Masukkan Username" className="input" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
            className="form-item-password"
          >
            <Input.Password
              placeholder="Masukkan kata sandi"
              className="input"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              className="primary-button"
            >
              Masuk
            </Button>
          </Form.Item>
        </Form>
      </section>
    );
  }
}

export default withRouter(FormSignInKasir);

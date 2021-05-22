import React, { Component } from "react";
import "./SignInKasirPage.scss";

import { Row, Col } from "antd";

import AvatarSignInKasir from "../../assets/images/AvatarSignInKasir.png";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import FormSignInKasir from "../../components/form-sign-in-kasir/FormSignInKasir.component";

class SignInKasirPage extends Component {
  render() {
    return (
      <section id="sign-in-kasir-page">
        <Row>
          <Col span={12} className="left-box">
            <div className="left-box-container">
              <img src={AvatarSignInKasir} alt="avatar" />
            </div>
          </Col>
          <Col span={12} className="right-box">
            <div className="right-box-container">
              <div className="logo-container">
                <Logo />
              </div>
              <div className="title">
                <h1>Masuk</h1>
                <p>Selamat bekerja, semangat!!</p>
              </div>
              <FormSignInKasir />
            </div>
          </Col>
        </Row>
      </section>
    );
  }
}

export default SignInKasirPage;

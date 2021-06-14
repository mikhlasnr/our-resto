import React, { Component } from "react";
import "./sign-in-page.styles.scss";

import { Row, Col } from "antd";

import AvatarSignInKasir from "../../assets/images/AvatarSignInKasir.png";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import FormSignIn from "../../components/form-sign-in/form-sign-in.component";

class SignInPage extends Component {
  render() {
    return (
      <section id="sign-in-kasir-page">
        <Row>
          <Col span={12} className="background">
            <div className="left-box-container">
              <img src={AvatarSignInKasir} alt="avatar" />
            </div>
          </Col>
          <Col span={12} className="sign-in">
            <div className="right-box-container">
              <div className="logo-container">
                <Logo />
              </div>
              <div className="title">
                <h1>Masuk</h1>
                <p>Selamat bekerja, semangat!!</p>
              </div>
              <FormSignIn />
            </div>
          </Col>
        </Row>
      </section>
    );
  }
}

export default SignInPage;

import React, { Component } from "react";
import "./sign-in-page.styles.scss";

import { Row, Col, Image } from "antd";
import FormSignIn from "../../components/form-sign-in/form-sign-in.component";

class SignInPage extends Component {
  render() {
    return (
      <section id="sign-in-kasir-page">
        <Row>
          <Col span={12} className="background">
            <div className="left-box-container">
              <img
                src={`https://ik.imagekit.io/upecbxjan8p/avatar/AvatarSignInKasir__rx69pv1m_M.png`}
                alt="avatar"
              />
            </div>
          </Col>
          <Col span={12} className="sign-in">
            <div className="right-box-container">
              <div className="logo-container">
                <Image
                  src={`https://ik.imagekit.io/upecbxjan8p/logo_2-2nVUxlt.png`}
                  preview={{
                    visible: false,
                    mask: null,
                  }}
                />
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

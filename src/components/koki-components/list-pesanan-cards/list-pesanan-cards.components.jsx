import React from "react";
import "./list-pesanan-cards.styles.scss";
import { Row, Col, Divider } from "antd";
const ListPesananCards = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={6} className="koki-list-pesanan-card">
        <div className="card-container">
          <header className="card-header">
            <p>Ahmad Sahrul</p>
            <p>23</p>
          </header>
          <Divider orientation="left" className="text-14">
            Pilih Menu
          </Divider>
          <section className="menu-items">
            <div className="menu-item">
              <p>Es Jeruk</p>
              <p>1</p>
            </div>
          </section>
        </div>
      </Col>
      <Col span={6}> </Col>
      <Col span={6}> </Col>
      <Col span={6}> </Col>
    </Row>
  );
};

export default ListPesananCards;

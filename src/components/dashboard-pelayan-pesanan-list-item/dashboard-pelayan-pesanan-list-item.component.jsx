import React from "react";
import "./dashboard-pelayan-pesanan-list-item.styles.scss";

import { Row, Col, Avatar, Image, Button } from "antd";
import { PlusOutlined, MinusOutlined, DeleteFilled } from "@ant-design/icons";

const DashboardPelayanPesananItem = () => {
  const handleShowDeleteBtn = e => {
    e.preventDefault();
    const itemCard = e.target.parentElement;
    const btnDelete = itemCard.nextSibling;
    console.log(itemCard.nextSibling);
    itemCard.classList.toggle("sliding-card");
    btnDelete.classList.toggle("show-delete-btn");
  };

  const handleDeleteItem = e => {
    e.preventDefault();
    alert("click");
  };

  return (
    <div className="dashboard-kasir-pesanan-list-item">
      <Row className="dashboard-kasir-pesanan-list-item-card">
        <Col flex={1} className="list-item-image" onClick={handleShowDeleteBtn}>
          <Avatar
            size={54}
            shape="square"
            src={
              <Image
                width="40px"
                src={`https://ik.imagekit.io/upecbxjan8p/menu/00001_YqTGLrHQAl4.png`}
                preview={{
                  visible: false,
                  mask: null,
                  pointerEvents: "none",
                }}
              />
            }
            style={{
              backgroundColor: "#FFB649",
              borderRadius: "14px",
              pointerEvents: "none",
            }}
          />
        </Col>
        <Col flex={2} className="list-item-detail">
          <h2>Mantap Burger</h2>
          <p>Rp 23.000</p>
        </Col>
        <Col flex={2}>
          <div className="list-item-quantity">
            <Button
              size="small"
              className="decrease-quantity"
              shape="circle"
              icon={<MinusOutlined style={{ color: "#FFFFFF" }} />}
            />
            <span className="show-quantity">1</span>
            <Button
              size="small"
              className="increase-quantity"
              shape="circle"
              icon={<PlusOutlined style={{ color: "#FFFFFF" }} />}
            />
          </div>
        </Col>
      </Row>
      <div className="list-item-delete">
        <Button
          size="large"
          className="delete-item"
          shape="circle"
          icon={<DeleteFilled style={{ color: "#FFFFFF" }} />}
          onClick={handleDeleteItem}
        />
      </div>
    </div>
  );
};

export default DashboardPelayanPesananItem;

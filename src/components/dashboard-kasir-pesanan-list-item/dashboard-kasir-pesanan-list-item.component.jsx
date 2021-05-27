import React from "react";
import "./dashboard-kasir-pesanan-list-item.styles.scss";

import { Row, Col, Avatar, Image, Button, Input } from "antd";
import { PlusOutlined, MinusOutlined, DeleteFilled } from "@ant-design/icons";

import BurgerMantap from "../../assets/images/kategori-menu/burger/menu/mantap-burger.png";

const DashboardKasirPesananListItem = () => {
  const handleShowDeleteBtn = e => {
    e.preventDefault();
    console.log(
      e.target.parentElement.parentElement.parentElement.parentElement
    );
  };

  const handleDeleteItem = e => {
    e.preventDefault();
    alert("click");
  };
  return (
    <div className="dashboard-kasir-pesanan-list-item">
      <div className="list-item-delete">
        <Button
          size="small"
          className="delete-item"
          shape="circle"
          icon={<DeleteFilled style={{ color: "#FFFFFF" }} />}
          onClick={handleDeleteItem}
        />
      </div>
      <div className="dashboard-kasir-pesanan-list-item-container">
        <Row>
          <Col flex={1}>
            <div className="list-item-image">
              <Avatar
                size={54}
                shape="square"
                src={
                  <Image
                    width="40px"
                    src={BurgerMantap}
                    preview={{
                      visible: false,
                      mask: null,
                    }}
                  />
                }
                style={{ backgroundColor: "#FFB649", borderRadius: "14px" }}
                onClick={handleShowDeleteBtn}
              />
            </div>
          </Col>
          <Col flex={2}>
            <div className="list-item-detail">
              <h2>Mantap Burger</h2>
              <p>Rp 23.000</p>
            </div>
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
      </div>
    </div>
  );
};

export default DashboardKasirPesananListItem;

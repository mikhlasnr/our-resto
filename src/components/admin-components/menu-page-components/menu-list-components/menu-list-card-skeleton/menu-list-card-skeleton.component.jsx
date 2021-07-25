import React from "react";
import "./menu-list-card-skeleton.styles.scss";

import { Row, Col, Space, Skeleton } from "antd";

const MenuListCardSkeleton = () => {
  return (
    <Row className="menu-list-card-skeleton" gutter={[24, 0]}>
      <Col className="card-image">
        <Skeleton.Image active />
      </Col>
      <Col flex="auto" className="card-info">
        <div className="menu-card-info-title">
          <Skeleton paragraph={{ rows: 1, width: "100px" }} active />
        </div>
        <Skeleton.Input style={{ width: 200 }} active />
      </Col>
      <Col className="card-action">
        <Space>
          <Skeleton.Button active />
          <Skeleton.Button active />
        </Space>
      </Col>
    </Row>
  );
};

export default MenuListCardSkeleton;

import React from "react";

// import components
import { Row, Col } from "antd";
import MenuAUpdateFormProfile from "../menu-update-form-profile/menu-update-form-profile.component";
import MenuUpdateFormInput from "../menu-update-form-input/menu-update-form-input.component";

const MenuUpdateForm = () => {
  return (
    <Row gutter={[51, 0]}>
      <Col>
        <MenuAUpdateFormProfile />
      </Col>
      <Col flex="auto">
        <MenuUpdateFormInput />
      </Col>
    </Row>
  );
};

export default MenuUpdateForm;

import React from "react";

import { Row, Col } from "antd";
import MenuAddFormProfile from "../menu-add-form-profile/menu-add-form-profile.component";
import MenuAddFormInput from "../menu-add-form-input/menu-add-form-input.component";

const MenuAddForm = () => {
  return (
    <Row gutter={[51, 0]}>
      <Col>
        <MenuAddFormProfile />
      </Col>
      <Col flex="auto">
        <MenuAddFormInput />
      </Col>
    </Row>
  );
};

export default MenuAddForm;

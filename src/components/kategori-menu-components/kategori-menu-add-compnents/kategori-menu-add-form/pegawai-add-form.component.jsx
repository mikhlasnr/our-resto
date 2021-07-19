import React from "react";

// Import Component
import { Row, Col } from "antd";
import PegawaiUpdateFormProfile from "../kategori-menu-add-form-profile/pegawai-add-form-profile.component";
import PegawaiUpdateFormInput from "../kategori-menu-add-form-input/pegawai-add-form-input.component";

const PegawaiAddForm = () => {
  // Handling Redux

  return (
    <Row className="table-pegawai-add-form" gutter={[0, 51]}>
      <Col flex="auto">
        <PegawaiUpdateFormProfile />
      </Col>
      <Col flex="auto">
        <PegawaiUpdateFormInput />
      </Col>
    </Row>
  );
};

export default PegawaiAddForm;

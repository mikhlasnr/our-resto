import React from "react";

// Import Component
import { Row, Col } from "antd";
import PegawaiAddFormProfile from "../pegawai-add-form-profile/pegawai-add-form-profile.component";
import PegawaiAddFormInput from "../pegawai-add-form-input/pegawai-add-form-input.component";

const PegawaiAddForm = () => {
  return (
    <Row className="table-pegawai-add-form" gutter={[51, 0]}>
      <Col>
        <PegawaiAddFormProfile />
      </Col>
      <Col flex="auto">
        <PegawaiAddFormInput />
      </Col>
    </Row>
  );
};

export default PegawaiAddForm;

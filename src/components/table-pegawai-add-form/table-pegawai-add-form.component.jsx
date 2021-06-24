import React, { useState } from "react";

// Import Component
import { Form, Input, Button } from "antd";
import { Row, Col } from "antd";
import TablePegawaiAddFormProfile from "../table-pegawai-add-form-profile/table-pegawai-add-form-profile.component";
import TablePegawaiAddFormInput from "../table-pegawai-add-form-input/table-pegawai-add-form-input.component";
const TablePegawaiAddForm = () => {
  return (
    <Row className="table-pegawai-add-form" gutter={[51, 0]}>
      <Col>
        <TablePegawaiAddFormProfile />
      </Col>
      <Col flex="auto">
        <TablePegawaiAddFormInput />
      </Col>
    </Row>
  );
};

export default TablePegawaiAddForm;

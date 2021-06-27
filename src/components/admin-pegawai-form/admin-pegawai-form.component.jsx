import React from "react";

// Import Component
import { Row, Col } from "antd";
import AdminPegawaiFormProfile from "../admin-pegawai-form-profile/admin-pegawai-form-profile.component";
import AdminPegawaiFormInput from "../admin-pegawai-form-input/admin-pegawai-form-input.component";
const AdminPegawaiForm = () => {
  return (
    <Row className="table-pegawai-add-form" gutter={[51, 0]}>
      <Col>
        <AdminPegawaiFormProfile />
      </Col>
      <Col flex="auto">
        <AdminPegawaiFormInput />
      </Col>
    </Row>
  );
};

export default AdminPegawaiForm;

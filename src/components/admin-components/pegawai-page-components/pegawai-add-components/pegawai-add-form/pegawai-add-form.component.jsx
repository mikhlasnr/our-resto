import React from "react";

// Handling Redux
import { useSelector } from "react-redux";

import { selectUserByIdIsFetching } from "../../../../../redux/userById/userById.selectors";
import { selectIsUploading } from "../../../../../redux/pegawai/pegawai.selectors";

// Import Component
import { Row, Col, Spin } from "antd";
import PegawaiUpdateFormProfile from "../pegawai-add-form-profile/pegawai-add-form-profile.component";
import PegawaiUpdateFormInput from "../pegawai-add-form-input/pegawai-add-form-input.component";

const PegawaiAddForm = () => {
  // Handling Redux
  const isDataFetching = useSelector(selectUserByIdIsFetching);
  const isUploading = useSelector(selectIsUploading);

  return (
    <Spin spinning={isUploading || isDataFetching}>
      <Row className="table-pegawai-add-form" gutter={[51, 0]}>
        <Col>
          <PegawaiUpdateFormProfile />
        </Col>
        <Col flex="auto">
          <PegawaiUpdateFormInput />
        </Col>
      </Row>
    </Spin>
  );
};

export default PegawaiAddForm;

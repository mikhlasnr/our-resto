import React from "react";

// Handling Redux
import { useSelector } from "react-redux";

import { selectIsUploading } from "../../../../../redux/pegawai/pegawai.selectors";

import { selectUserByIdIsFetching } from "../../../../../redux/userById/userById.selectors";

// Import Component
import { Row, Col, Spin } from "antd";
import PegawaiUpdateFormProfile from "../pegawai-update-form-profile/pegawai-update-form-profile.component";
import PegawaiUpdateFormInput from "../pegawai-update-form-input/pegawai-update-form-input.component";

const PegawaiUpdateForm = () => {
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

export default PegawaiUpdateForm;

import React from "react";
import "./pendapatan-section.styles.scss";
// Handlng Redux
import { useSelector } from "react-redux";
import { selectDataReport } from "../../../../../redux/report/report.selectors";
// Import Components
import { Row, Col, Skeleton } from "antd";
import PendapatanSelect from "../pendapatan-select/pendapatan-select.components";
const PendapatanSection = () => {
  const dataReport = useSelector(selectDataReport);
  const numberFormatRupiah = numb => {
    return numb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  return (
    <div className="pendapatan-container">
      <div className="pendapatan-option">
        <PendapatanSelect />
      </div>
      <div className="pendapatan-main">
        <Row gutter={[24, 16]}>
          <Col span={8}>
            <div className="pendapatan-card">
              {dataReport ? (
                <p className="number">
                  Rp {numberFormatRupiah(dataReport.TotalPendapatan)}
                </p>
              ) : (
                <Skeleton.Button />
              )}
              <p className="sub-title">Total Pendapatan</p>
            </div>
          </Col>
          <Col span={8}>
            <div className="pendapatan-card">
              {dataReport ? (
                <p className="number">{dataReport.TotalPembeli}</p>
              ) : (
                <Skeleton.Button />
              )}
              <p className="sub-title">Total Pembeli</p>
            </div>
          </Col>{" "}
          <Col span={8}>
            <div className="pendapatan-card">
              {dataReport ? (
                <p className="number">{dataReport.TotalOrderMenu}</p>
              ) : (
                <Skeleton.Button />
              )}
              <p className="sub-title">Total Order Menu</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PendapatanSection;

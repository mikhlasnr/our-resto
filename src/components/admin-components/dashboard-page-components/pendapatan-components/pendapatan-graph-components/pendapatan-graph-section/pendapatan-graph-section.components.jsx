import React from "react";
import "./pendapatan-graph-section.styles.scss";
import { useSelector } from "react-redux";
import { selectDataReport } from "../../../../../../redux/report/report.selectors";
// Import Components
import PendapatanGraphSelect from "../pendapatan-graph-select/pendapatan-graph-select.components";
import PendapatanGraph from "../pendapatan-graph/pendapatan-graph.components";
const PendapatanGraphSection = () => {
  const dataReport = useSelector(selectDataReport);
  return (
    <div className="pendapatan-graph-section">
      <div className="pendapatan-graph-section-container">
        <div className="pendapatan-graph-header">
          <h1>Grafik Pendapatan</h1>
          <PendapatanGraphSelect />
        </div>
        {dataReport ? <PendapatanGraph /> : null}
      </div>
    </div>
  );
};

export default PendapatanGraphSection;

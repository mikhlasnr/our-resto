import React from "react";
import "./pendapatan-section.styles.scss";
// Import Components
import PendapatanSelect from "../pendapatan-select/pendapatan-select.components";
import PendapatanCards from "../pendapatan-cards/pendapatan-cards.components";
import PendapatanGraphSection from "../pendapatan-graph-components/pendapatan-graph-section/pendapatan-graph-section.components";
const PendapatanSection = () => {
  return (
    <div className="pendapatan-container">
      <div className="pendapatan-info">
        <div className="pendapatan-info-option">
          <PendapatanSelect />
        </div>
        <div className="pendapatan-main">
          <PendapatanCards />
        </div>
      </div>
      <div className="pendapatan-graph">
        <PendapatanGraphSection />
      </div>
    </div>
  );
};

export default PendapatanSection;

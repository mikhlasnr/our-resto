import React from "react";
import "./list-pesanan-print.styles.scss";

// Import Components
export class ComponentToPrint extends React.PureComponent {
  render() {
    return (
      <div className="print-invoice">
        <div className="print-invoice-container"></div>
      </div>
    );
  }
}

export default ComponentToPrint;

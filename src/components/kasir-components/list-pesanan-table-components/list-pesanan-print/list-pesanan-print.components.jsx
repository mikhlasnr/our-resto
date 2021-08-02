import React from "react";
import "./list-pesanan-print.styles.scss";

// Import Components
export class ComponentToPrint extends React.PureComponent {
  render() {
    return (
      <div className="print-invoice">
        <div className="print-invoice-header">
          <h1>Detail Pesanan</h1>
        </div>
        <div className="print-invoice-body">
          <div className="list-pesanan-lihat-item dash-diveder-bottom">
            <p>aseop</p>
            <p>Meja 12</p>
          </div>
          <div className="detail-menu-pesanan dash-diveder-bottom">
            <div className="list-pesanan-title ">
              <p>asdf</p>
              <p>12</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ComponentToPrint;

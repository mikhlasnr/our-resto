import React from "react";
import "./component-to-print.styles.scss";

// Import Components
export class ComponentToPrint extends React.PureComponent {
  handlingRenderMenuPesanan = () =>
    this.props.dataDetailPesanan.map(item => {
      return (
        <div className="print-struk-item menu-pesanan-item" key={item.IdMenu}>
          <div className="menu-pesanan-item-info">
            <p>{item.Quantity}</p>
            <p>{item.NamaMenu}</p>
          </div>
          <p>{`${item.Harga}`}</p>
        </div>
      );
    });
  render() {
    return (
      <div className="print-struk-container">
        <div className="print-struk-header">
          <h1>Struk Pembayaran</h1>
        </div>
        <div className="print-struk-body">
          <div className="print-struk-item dash-diveder-bottom">
            <p>kasir</p>
            <p>{this.props.dataPemesan.NamaKasir}</p>
          </div>
          <div className="dash-diveder-bottom">
            {this.handlingRenderMenuPesanan()}
          </div>
          <div className="dash-diveder-bottom">
            <div className="print-struk-item">
              <p>Subtotal</p>
              <p>{this.props.dataPemesan.TotalHarga}</p>
            </div>
            <div className="print-struk-item">
              <p>Total</p>
              <p>{this.props.dataPemesan.TotalHarga}</p>
            </div>
            <div className="print-struk-item">
              <p>Payment</p>
              <p>{this.props.dataPemesan.Nominal}</p>
            </div>
            <div className="print-struk-item">
              <p>Kembali</p>
              <p>{this.props.dataPemesan.Kembalian}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ComponentToPrint;

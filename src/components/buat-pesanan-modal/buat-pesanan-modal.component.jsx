import React from "react";
import "./buat-pesanan-modal.styles.scss";

// handling redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCheckoutModaltHidden } from "../../redux/pesanan/pesanan.selectors";
import { toggleCheckoutModalHidden } from "../../redux/pesanan/pesanan.action";

// import component
import { Modal } from "antd";
import BuatPesananForm from "../buat-pesanan-form/buat-pesanan-form.component";

const BuatPesananModal = ({ dispatch, checkoutModalHidden }) => {
  return (
    <Modal
      closable={false}
      visible={!checkoutModalHidden}
      onCancel={() => dispatch(toggleCheckoutModalHidden())}
      footer={null}
      centered
    >
      <div className="modal-title">
        <h2>Buat pesanan</h2>
      </div>
      <BuatPesananForm />
    </Modal>
  );
};

const mapStateToProps = createStructuredSelector({
  checkoutModalHidden: selectCheckoutModaltHidden,
});

export default connect(mapStateToProps)(BuatPesananModal);

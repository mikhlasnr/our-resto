import React from "react";
import "./buat-pesanan-modal.styles.scss";

// handling redux
import { useDispatch, useSelector } from "react-redux";
import { selectCheckoutModaltHidden } from "../../../redux/pesanan/pesanan.selectors";
import { toggleCheckoutModalHidden } from "../../../redux/pesanan/pesanan.action";

// import component
import { Modal } from "antd";
import BuatPesananForm from "../buat-pesanan-form/buat-pesanan-form.component";

const BuatPesananModal = () => {
  const dispatch = useDispatch();
  const checkoutModalHidden = useSelector(selectCheckoutModaltHidden);
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

export default BuatPesananModal;

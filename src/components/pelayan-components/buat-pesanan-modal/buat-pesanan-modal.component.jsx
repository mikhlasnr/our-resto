import React from "react";
import "./buat-pesanan-modal.styles.scss";

// handling redux
import { useDispatch, useSelector } from "react-redux";
import {
  selectCheckoutModaltHidden,
  selectIsUploading,
} from "../../../redux/pesananUtils/pesananUtils.selectors";
import { toggleCheckoutModalHidden } from "../../../redux/pesananUtils/pesananUtils.action";

// import component
import { Modal, Spin } from "antd";
import BuatPesananForm from "../buat-pesanan-form/buat-pesanan-form.component";

const BuatPesananModal = () => {
  const dispatch = useDispatch();
  const checkoutModalHidden = useSelector(selectCheckoutModaltHidden);
  const isUploading = useSelector(selectIsUploading);
  return (
    <Modal
      closable={false}
      visible={!checkoutModalHidden}
      onCancel={() => dispatch(toggleCheckoutModalHidden())}
      footer={null}
      centered
    >
      <Spin spinning={isUploading}>
        <div className="modal-title">
          <h2>Buat pesanan</h2>
        </div>
        <BuatPesananForm />
      </Spin>
    </Modal>
  );
};

export default BuatPesananModal;

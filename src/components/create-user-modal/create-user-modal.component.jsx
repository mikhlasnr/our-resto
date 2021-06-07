import React from "react";
import "./buat-pesanan-modal.styles.scss";

// handling redux
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { toggleCreateUserModalHidden } from "../../redux/users/users.action";
// import component
import { Modal } from "antd";
import CreateUserForm from "../create-user-form/create-user-form.component";
const CreateUserModal = ({ dispatch }) => {
  const createUserModalHidden = useSelector(
    state => state.users.createUserModalHidden
  );

  return (
    <Modal
      closable={false}
      visible={!createUserModalHidden}
      onCancel={() => dispatch(toggleCreateUserModalHidden())}
      footer={null}
      centered
    >
      <div className="modal-title">
        <h2>Buat Akun Pegawai</h2>
        <CreateUserForm />
      </div>
    </Modal>
  );
};

export default connect()(CreateUserModal);

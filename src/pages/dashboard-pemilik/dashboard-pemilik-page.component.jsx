import React from "react";

// handling redux
import { connect } from "react-redux";
import { toggleCreateUserModalHidden } from "../../redux/users/users.action";

// import component
import { Button } from "antd";
import CreateUserModal from "../../components/create-user-modal/create-user-modal.component";

const DashboardPemilikPage = ({ dispatch }) => {
  return (
    <div>
      <Button
        disabled={false}
        onClick={e => {
          e.preventDefault();
          dispatch(toggleCreateUserModalHidden());
        }}
      >
        Checkout
      </Button>
      <CreateUserModal />
    </div>
  );
};

export default connect()(DashboardPemilikPage);

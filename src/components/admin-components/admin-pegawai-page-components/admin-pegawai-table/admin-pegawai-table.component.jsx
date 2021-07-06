import React, { useState } from "react";
import "./admin-pegawai-table.styles.scss";

// Handling Redux
import { useSelector } from "react-redux";
import {
  selectPegawai,
  selectUsersIsFetching,
} from "../../../../redux/users/users.selectors";

// import component
import { Table } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import AdminPegawaiAddBtn from "../admin-pegawai-add-btn/admin-pegawai-add-btn.component";
import Columns from "./admin-pegawai-table.utils";

const AdminPegawaiTable = () => {
  const [showTotalData, setShowTotalData] = useState(0);
  const [showRangeData, setShowRangeData] = useState(0);

  const usersIsFetching = useSelector(selectUsersIsFetching);
  const usersData = useSelector(selectPegawai);

  // !handling pagination
  const handlingPagination = (current, type, originalElement) => {
    if (type === "prev") return <LeftOutlined />;
    if (type === "next") return <RightOutlined />;
    return originalElement;
  };

  const handlingShowTotal = (total, range) => {
    setShowTotalData(total);
    setShowRangeData(range[1]);
  };

  return (
    <div className="admin-pegawai-container">
      <div className="admin-pegawai-container-header">
        <p className="admin-pegawai-container-total">
          <span>
            {showRangeData}/{showTotalData}
          </span>
          <span>Pegawai</span>
        </p>
        <AdminPegawaiAddBtn />
      </div>
      <div className="admin-pegawai-table-container">
        <Table
          loading={usersIsFetching}
          rowKey={record => record.IdUser}
          showHeader={false}
          className="table-list-pegawai"
          pagination={{
            position: ["bottomCenter"],
            defaultPageSize: 7,
            itemRender: handlingPagination,
            showTotal: handlingShowTotal,
          }}
          columns={Columns}
          dataSource={usersData}
        />
      </div>
    </div>
  );
};

export default AdminPegawaiTable;

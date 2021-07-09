import React, { useState } from "react";
import "./pegawai-table.styles.scss";

// Handling Redux
import { useSelector } from "react-redux";
import {
  selectPegawai,
  selectUsersIsFetching,
} from "../../../../../redux/users/users.selectors";

// import component
import { Table } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import PegawaiAddBtn from "../../pegawai-add-components/pegawai-add-btn/pegawai-add-btn.component";
import Columns from "./pegawai-table.utils";

const PegawaiTable = () => {
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
        <PegawaiAddBtn />
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

export default PegawaiTable;

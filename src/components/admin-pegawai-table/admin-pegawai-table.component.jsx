import React, { useState } from "react";
import "./admin-pegawai-table.styles.scss";
import Data from "../../assets/data/table-pegawai.data";

// Handling Redux
import { useSelector } from "react-redux";
import {
  selectPegawai,
  selectUsersIsFetching,
  selectUsersErrorMessage,
} from "../../redux/users/users.selectors";

// import component
import { Table, Button, Space, Avatar, Image } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import AdminPegawaiAddBtn from "../admin-pegawai-add-btn/admin-pegawai-add-btn.component";

const AdminPegawaiTable = () => {
  const [showTotalData, setShowTotalData] = useState(0);
  const [showRangeData, setShowRangeData] = useState(0);

  const usersIsFetching = useSelector(selectUsersIsFetching);
  const usersData = useSelector(selectPegawai);

  // ! handling colum value
  const columns = [
    {
      key: "email",
      dataIndex: "Nama",
      className: "table-pegawai-profile",
      render: (text, record) => {
        return (
          <div className="table-pegawai-profile-container">
            <Avatar
              size={44}
              src={
                <Image
                  width={44}
                  src={record.foto}
                  preview={{
                    visible: false,
                    mask: null,
                  }}
                  fallback="https://ik.imagekit.io/upecbxjan8p/avatar/empty-image_6J-Ssa71Q.png"
                />
              }
              style={{ backgroundColor: "#FFB649", borderRadius: "20px" }}
            />
            <p>{text}</p>
          </div>
        );
      },
    },
    {
      key: "NoTelp",
      dataIndex: "NoTelp",
      className: "table-pegawai-kontak",
      align: "center",
      render: text => <p>{text}</p>,
      width: "30%",
    },
    {
      key: "action",
      className: "table-pegawai-action",
      align: "right",
      render: () => {
        return (
          <Space>
            <Button className="btn-action-primary">Lihat</Button>
            <Button className="btn-action-danger">Hapus</Button>
          </Space>
        );
      },
    },
  ];

  // !handling pagination
  const handlingPagination = (current, type, originalElement) => {
    if (type === "prev") return <LeftOutlined />;
    if (type === "next") return <RightOutlined />;
    return originalElement;
  };

  const handlingShowTotal = (total, range) => {
    setShowTotalData(total);
    setShowRangeData(range[1]);

    return null;
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
            hideOnSinglePage: true,
            defaultPageSize: 7,
            itemRender: handlingPagination,
            showTotal: handlingShowTotal,
          }}
          columns={columns}
          dataSource={usersData}
        />
      </div>
    </div>
  );
};

export default AdminPegawaiTable;

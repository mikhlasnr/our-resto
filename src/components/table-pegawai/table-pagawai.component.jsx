import React, { useState } from "react";
import "./table-pagawai.styles.scss";
import Data from "../../assets/data/table-pegawai.data";

// import component
import { Table, Button, Space, Avatar, Image } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import TablePegawaiAdd from "../table-pegawai-add/table-pegawai-add.component";

const TablePegawai = () => {
  const [searchText, setSearchText] = useState("");
  const [totalPegawai, setTotalPegawai] = useState("0");
  const [rangePagawai, setRangePagawai] = useState("0");

  // ! handling colum value
  const columns = [
    {
      key: "email",
      dataIndex: "nama",
      className: "table-pegawai-profile",
      render: (text, record, index) => {
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
      key: "noHp",
      dataIndex: "noHp",
      className: "table-pegawai-kontak",
      align: "center",
      render: text => <p>{text}</p>,
      width: "30%",
    },
    {
      key: "action",
      className: "table-pegawai-action",
      align: "right",
      render: (text, record, index) => {
        return (
          <Space>
            <Button className="btn-action-primary">Lihat</Button>
            <Button className="btn-action-danger">Hapus</Button>
          </Space>
        );
      },
    },
  ];

  const filteredData = Data.filter(item => {
    return item.nama.toLowerCase().includes(searchText.toLowerCase());
  });

  // !handling pagination
  const handlingPagination = (current, type, originalElement) => {
    if (type === "prev") return <LeftOutlined />;
    if (type === "next") return <RightOutlined />;
    return originalElement;
  };
  return (
    <div id="table-pegawai-container">
      <div className="table-pegawai-header">
        <p className="table-total-pegawai">
          {rangePagawai}/{totalPegawai}
          <span>Pegawai</span>
        </p>
        <TablePegawaiAdd />
      </div>
      <Table
        showHeader={false}
        className="table-list-pegawai"
        pagination={{
          position: ["none", "bottomCenter"],
          defaultPageSize: 7,
          itemRender: handlingPagination,
          showTotal: (total, range) => {
            setTotalPegawai(total);
            setRangePagawai(range[1]);
          },
        }}
        columns={columns}
        dataSource={filteredData}
      />
    </div>
  );
};

export default TablePegawai;

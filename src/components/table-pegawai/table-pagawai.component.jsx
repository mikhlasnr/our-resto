import React, { useState } from "react";
import "./table-pagawai.styles.scss";
import Data from "../../assets/data/table-pegawai.data";

// import component
import { Table, Button, Space } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Avatar, Image } from "antd";

const TablePegawai = () => {
  const [searchText, setSearchText] = useState("");
  // ! handling colum value
  const columns = [
    {
      key: "email",
      dataIndex: "nama",
      render: (text, record, index) => {
        console.log(record);
        return (
          <div className="table-pegawai-profile">
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
      className: "table-pegawai-border",
      align: "center",
      width: "50%",
    },
    {
      key: "action",
      className: "table-pegawai-action",
      render: (text, record, index) => {
        return (
          <Space size="middle">
            <Button className="btn-action-primary">Lihat</Button>
            <Button className="btn-action-danger">Hapus</Button>
          </Space>
        );
      },
    },
  ];

  const handleDetailAction = selectedKeys => {
    console.log(selectedKeys);
  };

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
      <Table
        showHeader={false}
        className="table-list-pegawai"
        pagination={{
          position: ["none", "bottomCenter"],
          defaultPageSize: 7,
          itemRender: handlingPagination,
        }}
        columns={columns}
        dataSource={filteredData}
      />
    </div>
  );
};

export default TablePegawai;

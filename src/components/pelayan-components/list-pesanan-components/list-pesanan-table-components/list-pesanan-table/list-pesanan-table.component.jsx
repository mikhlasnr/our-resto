import React, { Component, useState } from "react";
import "./list-pesanan-table.styles.scss";

// Handling Redux
import { useSelector } from "react-redux";
import { selectDataListPesanan } from "../../../../../redux/listPesanan/listPesanan.selectors";

// import component
import { Table, Input, Button, Space } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import PegawaiTableAction from "../list-pesanan-table-action/list-pesanan-table-action.component";

const data = [
  {
    IdPesanan: "15",
    AtasNama: "Asep",
    NoMeja: 30,
    StatusPesanan: "dimasak",
  },
  {
    IdPesanan: "16",
    AtasNama: "Udin",
    NoMeja: 21,
    StatusPesanan: "dimasak",
  },
  {
    IdPesanan: "17",
    AtasNama: "Bejo",
    NoMeja: 11,
    StatusPesanan: "selesai",
  },
];

const ListPesananTable = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const dataListPesanan = useSelector(selectDataListPesanan);
  const getColumnSearchProps = (dataIndex, title) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${title}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            className="list-pesanan-search-btn"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",

    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText("");
  };

  const handlingPagination = (current, type, originalElement) => {
    if (type === "prev") return <LeftOutlined />;
    if (type === "next") return <RightOutlined />;
    return originalElement;
  };

  const columns = [
    {
      title: "Status",
      dataIndex: "StatusPesanan",
      key: "StatusPesanan",
      filters: [
        {
          text: "dimasak",
          value: "dimasak",
        },
        {
          text: "selesai",
          value: "selesai",
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.StatusPesanan.indexOf(value) === 0,
    },
    {
      title: "Atas Nama",
      dataIndex: "AtasNama",
      key: "AtasNama",
      ...getColumnSearchProps("AtasNama", "Atas Nama"),
    },
    {
      title: "Nomor Meja",
      dataIndex: "NoMeja",
      key: "NoMeja",
      ...getColumnSearchProps("NoMeja", "No Meja"),
    },
    {
      title: "Action",
      key: "action",
      width: "15%",
      render: (text, record) => <PegawaiTableAction record={record} />,
    },
  ];
  return (
    <Table
      className="list-pesanan-table-container"
      rowKey={record => record.IdPesanan}
      pagination={{
        position: ["bottomCenter"],
        defaultPageSize: 7,
        itemRender: handlingPagination,
      }}
      columns={columns}
      dataSource={dataListPesanan}
    />
  );
};

export default ListPesananTable;

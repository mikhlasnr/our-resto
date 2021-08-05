import React, { Component, useState } from "react";
import "./list-pesanan-table.styles.scss";

// Handling Redux
import { useSelector } from "react-redux";
import { selectDataListPesanan } from "../../../../redux/listPesanan/listPesanan.selectors";

// import component
import { Table, Input, Button, Space } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import ListPesananTableAction from "../list-pesanan-table-action/list-pesanan-table-action.component";

const ListPesananTable = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const dataListPesanan = useSelector(selectDataListPesanan);
  // START HANDLING SEARCH
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
            className="table-search-btn"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 110, height: 40, borderRadius: "9px" }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 110, height: 40, borderRadius: "9px" }}
          >
            Reset
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
  // END HANDLING SEARCH
  // Handling Pagination
  const handlingPagination = (current, type, originalElement) => {
    if (type === "prev") return <LeftOutlined />;
    if (type === "next") return <RightOutlined />;
    return originalElement;
  };
  // Handling Status
  const handlingStatus = text => {
    if (text === "belum")
      return <span className="status-dimasak">Belum Bayar</span>;

    if (text === "lunas")
      return <span className="status-selesai">Sudah Bayar</span>;
  };
  // SET INTITAL TABLE COLUMN
  const columns = [
    {
      title: "Status Bayar",
      dataIndex: "StatusBayar",
      key: "StatusBayar",
      className: "status-masak",
      render: handlingStatus,
      sortOrder: "descend",
      showSorterTooltip: false,
      sorter: (a, b) => {
        return a.StatusBayar < b.StatusBayar;
      },
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
      className: "list-pesanan-action",
      width: "15%",
      render: (text, record) => <ListPesananTableAction record={record} />,
    },
  ];

  return (
    <Table
      className="list-pesanan-table-container"
      rowKey={record => record.IdPesanan}
      pagination={{
        position: ["bottomCenter"],
        defaultPageSize: 5,
        itemRender: handlingPagination,
      }}
      columns={columns}
      dataSource={dataListPesanan}
    />
  );
};

export default ListPesananTable;

import React, { Component } from "react";
import "./list-pesanan-table.styles.scss";

// Handling Redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
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

class ListPesananTable extends Component {
  con;

  state = {
    searchText: "",
    searchedColumn: "",
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            className="list-pesanan-search-btn"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
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
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
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
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  handlingPagination = (current, type, originalElement) => {
    if (type === "prev") return <LeftOutlined />;
    if (type === "next") return <RightOutlined />;
    return originalElement;
  };

  render() {
    const columns = [
      {
        title: "Status",
        dataIndex: "StatusPesanan",
        key: "StatusPesanan",
        ...this.getColumnSearchProps("StatusPesanan"),
      },
      {
        title: "Atas Nama",
        dataIndex: "AtasNama",
        key: "AtasNama",
        ...this.getColumnSearchProps("AtasNama"),
      },
      {
        title: "Nomor Meja",
        dataIndex: "NoMeja",
        key: "NoMeja",
        ...this.getColumnSearchProps("NoMeja"),
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
          itemRender: this.handlingPagination,
        }}
        columns={columns}
        dataSource={data}
      />
    );
  }
}
const mapStateToProps = createStructuredSelector({
  dataListPesanan: selectDataListPesanan,
});
export default connect(mapStateToProps)(ListPesananTable);

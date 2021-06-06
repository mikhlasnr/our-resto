import React, { Component } from "react";

// import component
import { Table, Input, Button, Space } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";

const data = [
  {
    key: "1111",
    nama: "John Brown",
    nomorMeja: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2222",
    nama: "Joe Black",
    nomorMeja: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3333",
    nama: "Jim Green",
    nomorMeja: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "43444",
    nama: "Jim Red",
    nomorMeja: 32,
    address: "London No. 2 Lake Park",
  },
];

class DashboardKasirTablePesanan extends Component {
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
          ref={node => {
            this.searchInput = node;
          }}
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
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
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

  handleDetailAction = selectedKeys => {
    console.log(selectedKeys);
  };

  render() {
    const columns = [
      {
        title: "Atas Nama",
        dataIndex: "nama",
        key: "nama",
        ...this.getColumnSearchProps("nama"),
      },
      {
        title: "Nomor Meja",
        dataIndex: "nomorMeja",
        key: "nomorMeja",
        ...this.getColumnSearchProps("nomorMeja"),
      },
      {
        title: "Action",
        key: "action",
        width: "15%",
        render: (text, record, index) => {
          return (
            <Space size="middle">
              <Button onClick={() => this.handleDetailAction(record.key)}>
                Detail
              </Button>
            </Space>
          );
        },
      },
    ];
    return (
      <Table
        pagination={{ position: ["none", "bottomCenter"] }}
        columns={columns}
        dataSource={data}
      />
    );
  }
}

export default DashboardKasirTablePesanan;

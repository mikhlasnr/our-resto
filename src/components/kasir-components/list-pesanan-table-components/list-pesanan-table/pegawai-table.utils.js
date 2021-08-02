import PegawaiTableAction from "../list-pesanan-table-action/list-pesanan-table.component";
// ! handling colum value
const Columns = [
  {
    key: "StatusPesanan",
    dataIndex: "StatusPesanan",
    align: "center",
    render: text => <p>{text}</p>,
  },
  {
    key: "AtasNama",
    dataIndex: "AtasNama",
    className: "table-pegawai-kontak",
    align: "center",
    render: text => <p>{text}</p>,
  },
  {
    key: "NoMeja",
    dataIndex: "NoMeja",
    className: "table-pegawai-kontak",
    align: "center",
    render: text => <p>{text}</p>,
  },
  {
    key: "action",
    className: "table-pegawai-action",
    align: "right",
    render: (text, record) => <PegawaiTableAction record={record} />,
  },
];

export default Columns;

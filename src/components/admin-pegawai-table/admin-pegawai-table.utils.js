import AdminPegawaiTableProfile from "../admin-pegawai-table-profile/admin-pegawai-table-profile.component";
import AdminPegawaiTableAction from "../admin-pegawai-table-action/admin-pegawai-table-action.component";
// ! handling colum value
const Columns = [
  {
    key: "email",
    dataIndex: "Nama",
    className: "table-pegawai-profile",
    render: (text, record) => (
      <AdminPegawaiTableProfile text={text} record={record} />
    ),
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
    render: () => <AdminPegawaiTableAction />,
  },
];

export default Columns;

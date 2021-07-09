import PegawaiTableProfile from "../pegawai-table-profile/pegawai-table-profile.component";
import PegawaiTableAction from "../pegawai-table-action/pegawai-table-action.component";
// ! handling colum value
const Columns = [
  {
    key: "email",
    dataIndex: "Nama",
    className: "table-pegawai-profile",
    render: (text, record) => (
      <PegawaiTableProfile text={text} record={record} />
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
    render: (text, record) => <PegawaiTableAction record={record} />,
  },
];

export default Columns;

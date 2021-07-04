import React from "react";
import { Button, Space } from "antd";
const AdminPegawaiTableAction = () => {
  return (
    <Space>
      <Button className="btn-action-primary">Lihat</Button>
      <Button className="btn-action-danger">Hapus</Button>
    </Space>
  );
};

export default AdminPegawaiTableAction;

import React from "react";
import "./pendapatan-select.styles.scss";
import { Select } from "antd";
const { Option } = Select;
const PendapatanSelect = () => {
  const hanldlePendapatanSelect = value => {
    if (value === "tahun") alert("yeaay");
    console.log(value);
  };
  return (
    <Select
      defaultValue="tahun"
      style={{ minWidth: 141 }}
      onChange={hanldlePendapatanSelect}
      className="pendapatan-select"
    >
      <Option value="hari" disabled>
        Hari Ini
      </Option>
      <Option value="bulan" disabled>
        Bulan Ini
      </Option>
      <Option value="tahun">Tahun Ini</Option>
    </Select>
  );
};

export default PendapatanSelect;

import React from "react";
import "./pendapatan-graph-selectstyles.scss";
import { Select } from "antd";
const { Option } = Select;
const PendapatanGraphSelect = () => {
  const hanldlePendapatanSelect = value => {};
  return (
    <Select
      defaultValue="tahunan"
      style={{ minWidth: 141 }}
      onChange={hanldlePendapatanSelect}
      className="pendapatan-graph-select"
    >
      <Option value="harian" disabled>
        Harian
      </Option>
      <Option value="bulanan" disabled>
        Bulanan
      </Option>
      <Option value="tahunan">Tahunan</Option>
    </Select>
  );
};

export default PendapatanGraphSelect;

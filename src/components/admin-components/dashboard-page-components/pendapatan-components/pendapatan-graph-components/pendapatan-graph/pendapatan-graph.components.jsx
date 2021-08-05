import React from "react";
import { useSelector } from "react-redux";
import { selectDataReportGraph } from "../../../../../../redux/report/report.selectors";

import { Line } from "@ant-design/charts";
const PendapatanGraph = () => {
  const data = useSelector(selectDataReportGraph);

  const config = {
    data,
    height: 400,
    loading: data ? false : true,
    xField: "namaBulan",
    yField: "pendapatan",
    point: {
      size: 5,
      shape: "diamond",
    },
  };
  return <Line {...config} />;
};
export default PendapatanGraph;

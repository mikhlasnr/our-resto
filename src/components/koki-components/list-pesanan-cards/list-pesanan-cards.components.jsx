import React from "react";
import "./list-pesanan-cards.styles.scss";

// Handling Redux
import { useDispatch, useSelector } from "react-redux";
import { selectDataListPesanan } from "../../../redux/listPesanan/listPesanan.selectors";

// Import Components
import { Row, Spin } from "antd";
import ListPesananCard from "../list-pesanan-card/list-pesanan-card.components";
const ListPesananCards = () => {
  const dispatch = useDispatch();
  const dataListPesanan = useSelector(selectDataListPesanan);
  const handlingRenderListPesananCard = () => {
    return dataListPesanan.length
      ? dataListPesanan.map(item => <ListPesananCard pesanan={item} />)
      : null;
  };
  return (
    <Spin spinning={!dataListPesanan.length}>
      <Row gutter={[35, 35]}>{handlingRenderListPesananCard()}</Row>
    </Spin>
  );
};

export default ListPesananCards;

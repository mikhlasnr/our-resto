import React from "react";
import "./list-pesanan-cards.styles.scss";

// Handling Redux
import { useSelector } from "react-redux";
import {
  selectDataListPesanan,
  selectListPesananIsFetching,
} from "../../../redux/listPesanan/listPesanan.selectors";

// Import Components
import { Row, Spin, Empty } from "antd";
import ListPesananCard from "../list-pesanan-card/list-pesanan-card.components";
const ListPesananCards = () => {
  const dataListPesanan = useSelector(selectDataListPesanan);
  const isFetching = useSelector(selectListPesananIsFetching);
  const handlingRenderListPesananCard = () => {
    if (dataListPesanan.length) {
      return isFetching ? (
        <Spin />
      ) : (
        dataListPesanan.map(item => (
          <ListPesananCard pesanan={item} key={item.IdPesanan} />
        ))
      );
    }
    return <Empty />;
  };
  return (
    <Row gutter={[35, 35]} justify="center">
      {handlingRenderListPesananCard()}
    </Row>
  );
};

export default ListPesananCards;

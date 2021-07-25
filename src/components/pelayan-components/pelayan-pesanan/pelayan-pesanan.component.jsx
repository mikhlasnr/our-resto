import React from "react";
import "./pelayan-pesanan.styles.scss";

// Handling Redux
import { useSelector } from "react-redux";
import {
  selectPesananItems,
  selectPesananItemsTotal,
} from "../../../redux/pesanan/pesanan.selectors";

// Import Components
import { Divider } from "antd";
import PelayanPesananItem from "../pelayan-pesanan-list-item/pesanan-list-item.component";

const PelayanPesanan = () => {
  const pesananItems = useSelector(selectPesananItems);
  const total = useSelector(selectPesananItemsTotal);

  let isPesananItemsExist = pesananItems.length;
  const handlingRenderListItem = () => {
    return pesananItems.map(item => (
      <PelayanPesananItem key={item.IdMenu} menu={item} />
    ));
  };
  return (
    <div className="pelayan-pesanan">
      <div className="divider-container">
        <Divider orientation="left">Pesanan</Divider>
      </div>
      <div className="pesanan-list-items">
        {isPesananItemsExist ? handlingRenderListItem() : null}
      </div>
      {isPesananItemsExist ? (
        <div className="pesanan-total">
          <h2>Total</h2>
          <p>Rp {total}</p>
        </div>
      ) : null}
    </div>
  );
};

export default PelayanPesanan;

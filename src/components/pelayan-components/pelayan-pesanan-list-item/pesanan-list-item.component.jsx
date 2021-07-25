import React from "react";
import "./pelayan-pesanan-list-item.styles.scss";
// Handling Redux
import { useDispatch } from "react-redux";
import {
  addItemPesanan,
  clearItemFromPesanan,
  removeItemPesanan,
} from "../../../redux/pesanan/pesanan.action";

// Import Components
import { Row, Col, Avatar, Image, Button } from "antd";
import { PlusOutlined, MinusOutlined, DeleteFilled } from "@ant-design/icons";

const PelayanPesananItem = ({ menu }) => {
  const dispatch = useDispatch();

  const { NamaMenu, Harga, Quantity, Foto } = menu;
  const handleShowDeleteBtn = e => {
    e.preventDefault();
    const itemCard = e.currentTarget.parentElement.parentElement.parentElement;
    const btnDelete = itemCard.nextSibling;
    itemCard.classList.toggle("sliding-card");
    btnDelete.classList.toggle("show-delete-btn");
  };
  // Handling long text nama menu
  const handlingNamaMenu = text => {
    if (text.length > 16) return `${text.substring(0, 16)}...`;
    return text;
  };
  // START Handling Action
  const handleDeleteItem = e => {
    e.preventDefault();
    dispatch(clearItemFromPesanan(menu));
  };

  const handlingIncreaseQty = e => {
    e.preventDefault();
    dispatch(addItemPesanan(menu));
  };

  const handlingDecreaseQty = e => {
    e.preventDefault();
    dispatch(removeItemPesanan(menu));
  };
  // END Handling Action
  return (
    <div className="pesanan-list-item">
      <Row className="pesanan-list-item-card">
        <Col span={18}>
          <Row gutter={[14, 0]}>
            <Col className="list-item-image" onClick={handleShowDeleteBtn}>
              <Avatar
                size={54}
                shape="square"
                src={
                  <Image
                    width="50px"
                    src={
                      Foto ||
                      `https://ik.imagekit.io/upecbxjan8p/avatar/empty-image_6J-Ssa71Q.png`
                    }
                    preview={{
                      visible: false,
                      mask: null,
                      pointerEvents: "none",
                    }}
                    fallback="https://ik.imagekit.io/upecbxjan8p/avatar/empty-image_6J-Ssa71Q.png"
                  />
                }
                style={{
                  backgroundColor: "#FFB649",
                  borderRadius: "14px",
                  pointerEvents: "none",
                }}
              />
            </Col>
            <Col className="list-item-detail">
              <h2>{handlingNamaMenu(NamaMenu)}</h2>
              <p>Rp {Harga}</p>
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <div className="list-item-quantity">
            <Button
              size="small"
              className="decrease-quantity"
              shape="circle"
              icon={<MinusOutlined style={{ color: "#FFFFFF" }} />}
              onClick={handlingDecreaseQty}
            />
            <span className="show-quantity">{Quantity}</span>
            <Button
              size="small"
              className="increase-quantity"
              shape="circle"
              icon={<PlusOutlined style={{ color: "#FFFFFF" }} />}
              onClick={handlingIncreaseQty}
            />
          </div>
        </Col>
      </Row>
      <div className="list-item-delete">
        <Button
          size="large"
          className="delete-item"
          shape="circle"
          icon={<DeleteFilled style={{ color: "#FFFFFF" }} />}
          onClick={handleDeleteItem}
        />
      </div>
    </div>
  );
};

export default PelayanPesananItem;

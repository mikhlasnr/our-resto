import React from "react";
import "./menu-list-card.styles.scss";

// Hanlding Redux
import { useDispatch } from "react-redux";
import { fetchDataMenuById } from "../../../../../redux/menuById/menuById.action";
import {
  toggleShowModalDeleteMenu,
  toggleShowModalUpdateMenu,
} from "../../../../../redux/menu/menu.action";

// Import Components
import { Row, Col, Button, Image, Space } from "antd";

const MenuListCard = ({ menu }) => {
  const { NamaMenu, Harga, NamaKategori, Foto, IdMenu } = menu;
  const dispatch = useDispatch();
  const handlingClickEdit = () => {
    dispatch(fetchDataMenuById(IdMenu));
    dispatch(toggleShowModalUpdateMenu());
  };
  const handlingClickHapus = () => {
    dispatch(fetchDataMenuById(IdMenu));
    dispatch(toggleShowModalDeleteMenu());
  };
  return (
    <Row className="admin-menu-list-card">
      <Col className="card-image">
        <Image
          style={{ backgroundColor: "#FFB649", borderRadius: "15px" }}
          width={121}
          src={Foto || ""}
          fallback="https://ik.imagekit.io/upecbxjan8p/avatar/empty-image_6J-Ssa71Q.png"
        />
      </Col>
      <Col flex="auto" className="card-info">
        <div className="menu-card-info-title">
          <h2>{NamaMenu}</h2>
          <p>{NamaKategori || null}</p>
        </div>
        <span>{`Rp. ${Harga}`}</span>
      </Col>
      <Col className="card-action">
        <Space>
          <Button className="btn-action-primary" onClick={handlingClickEdit}>
            Edit
          </Button>
          <Button className="btn-action-secondary" onClick={handlingClickHapus}>
            Hapus
          </Button>
        </Space>
      </Col>
    </Row>
  );
};

export default MenuListCard;

import React from "react";
import "./pelayan-pilih-menu.styles.scss";

// Hanlding Redux
import { useSelector } from "react-redux";
import { selectDataMenu } from "../../../redux/menu/menu.selectors";
// Import Component
import { Row, Col, Divider } from "antd";
import PelayanPilihMenuItem from "../pelayan-pilih-menu-item/pelayan-pilih-menu-item.component";

const PelayanPilihMenu = () => {
  const dataMenu = useSelector(selectDataMenu);

  const handlingRenderMenu = () => {
    return dataMenu.map(menu => (
      <Col key={menu.IdMenu} span={8}>
        <PelayanPilihMenuItem menu={menu} />
      </Col>
    ));
  };
  return (
    <div id="pilih-menu">
      <Divider orientation="left">Pilih Menu</Divider>
      <Row gutter={[24, 40]} className="pilih-menu-items">
        {!dataMenu ? null : handlingRenderMenu()}
      </Row>
    </div>
  );
};

export default PelayanPilihMenu;

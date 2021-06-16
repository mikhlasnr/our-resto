import React from "react";
import "./kategori-menu.styles.scss";

// handling redux
import { connect, useSelector } from "react-redux";
import KategoriMenuCarousel from "./kategori-menu-carousel.component";
import KategoriMenuCard from "../kategori-menu-card/kategori-menu-card.component";
import KategoriMenuAdd from "../kategori-menu-add/kategori-menu-add.component";
import DATA_KATEGORI from "./DATA_KATEGORI";
const KategoriMenu = () => {
  const currentUserRole = useSelector(state => state.users.currentUser.role);

  const handlingRenderKategori = () => {
    return DATA_KATEGORI.map((kategori, index) => (
      <KategoriMenuCard
        isDefaultActive={kategori.katTitle === "All"}
        katImage={kategori.katImage}
        katTitle={kategori.katTitle}
      />
    ));
  };

  return (
    <div className="kategori-menu">
      <h1>Kategori Menu</h1>
      {currentUserRole !== "admin" ? (
        <KategoriMenuCarousel>{handlingRenderKategori()}</KategoriMenuCarousel>
      ) : (
        <KategoriMenuCarousel>
          <KategoriMenuAdd />
          {handlingRenderKategori()}
        </KategoriMenuCarousel>
      )}
    </div>
  );
};

export default connect()(KategoriMenu);

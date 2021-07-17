import React from "react";
import "./kategori-menu.styles.scss";

// Handling redux
import { useSelector } from "react-redux";
import { selectCurrentUserRole } from "../../../redux/user/user.selectors";

// Import Components
import KategoriMenuCarousel from "./kategori-menu-carousel.component";
import KategoriMenuCard from "../kategori-menu-card/kategori-menu-card.component";
import KategoriMenuAdd from "../kategori-menu-add/kategori-menu-add.component";
import DATA_KATEGORI from "../../../assets/data/DATA_KATEGORI";
const KategoriMenu = () => {
  const currentUserRole = useSelector(selectCurrentUserRole);
  const handlingRenderKategori = () =>
    DATA_KATEGORI.map((kategori, index) => (
      <KategoriMenuCard
        key={index}
        isDefaultActive={kategori.katTitle === "All"}
        katImage={kategori.katImage}
        katTitle={kategori.katTitle}
      />
    ));

  return (
    <div className="kategori-menu">
      <h1>Kategori Menu</h1>
      {currentUserRole !== "admin" ? (
        <KategoriMenuCarousel>
          <KategoriMenuCard
            isDefaultActive={true}
            katImage="https://firebasestorage.googleapis.com/v0/b/our-resto.appspot.com/o/kategoriImages%2Fall.png?alt=media&token=15eb8007-bd64-400f-abbd-982d876b5067"
            katTitle="all"
          />
          {handlingRenderKategori()}
        </KategoriMenuCarousel>
      ) : (
        <KategoriMenuCarousel>
          <KategoriMenuAdd />
          <KategoriMenuCard
            isDefaultActive={true}
            katImage="https://firebasestorage.googleapis.com/v0/b/our-resto.appspot.com/o/kategoriImages%2Fall.png?alt=media&token=15eb8007-bd64-400f-abbd-982d876b5067"
            katTitle="ALL"
          />
          {handlingRenderKategori()}
        </KategoriMenuCarousel>
      )}
    </div>
  );
};

export default KategoriMenu;

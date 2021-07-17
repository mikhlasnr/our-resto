import React from "react";
import "./kategori-menu.styles.scss";

// Handling redux
import { useSelector } from "react-redux";
import { selectCurrentUserRole } from "../../../redux/user/user.selectors";
import { selectDataKategoriMenu } from "../../../redux/kategoriMenu/kategoriMenu.selectors";

// Import Components
import KategoriMenuCarousel from "./kategori-menu-carousel.component";
import KategoriMenuCard from "../kategori-menu-card/kategori-menu-card.component";
import KategoriMenuAdd from "../kategori-menu-add/kategori-menu-add.component";
import KategoriMenuCardSkeleton from "../kategori-menu-card-skeleton/kategori-menu-card-skeleton.components";
import DATA_KATEGORI from "../../../assets/data/DATA_KATEGORI";
import { NumberOutlined } from "@ant-design/icons";
const KategoriMenu = () => {
  const currentUserRole = useSelector(selectCurrentUserRole);
  const dataKategoriMenu = useSelector(selectDataKategoriMenu);

  const handlingRenderKategoriCard = () => {
    return dataKategoriMenu.map((kategori, index) => (
      <KategoriMenuCard
        key={index}
        isDefaultActive={false}
        katImage={kategori.Foto}
        katTitle={kategori.NamaKategori}
      />
    ));
  };

  const handlingRenderKategori = () => {
    return currentUserRole !== "admin" ? (
      <KategoriMenuCarousel>
        <KategoriMenuCard
          isDefaultActive={true}
          katImage="https://firebasestorage.googleapis.com/v0/b/our-resto.appspot.com/o/kategoriImages%2Fall.png?alt=media&token=15eb8007-bd64-400f-abbd-982d876b5067"
          katTitle="all"
        />
        {dataKategoriMenu && handlingRenderKategoriCard()}
      </KategoriMenuCarousel>
    ) : (
      <KategoriMenuCarousel>
        <KategoriMenuAdd />
        <KategoriMenuCard
          isDefaultActive={true}
          katImage="https://firebasestorage.googleapis.com/v0/b/our-resto.appspot.com/o/kategoriImages%2Fall.png?alt=media&token=15eb8007-bd64-400f-abbd-982d876b5067"
          katTitle="ALL"
        />
        {dataKategoriMenu && handlingRenderKategoriCard()}
      </KategoriMenuCarousel>
    );
  };

  const handlingRenderKategoriSkeleton = () => {
    return (
      <KategoriMenuCarousel>
        {[0, 1, 2, 3, 4].map(item => (
          <KategoriMenuCardSkeleton key={item} />
        ))}
      </KategoriMenuCarousel>
    );
  };

  return (
    <div className="kategori-menu">
      <h1>Kategori Menu</h1>
      {dataKategoriMenu
        ? handlingRenderKategori()
        : handlingRenderKategoriSkeleton()}
    </div>
  );
};

export default KategoriMenu;

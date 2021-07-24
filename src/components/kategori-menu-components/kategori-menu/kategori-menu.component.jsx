import React from "react";
import "./kategori-menu.styles.scss";

// Handling redux
import { useSelector } from "react-redux";
import { selectCurrentUserRole } from "../../../redux/user/user.selectors";
import {
  selectDataKategoriMenu,
  selectIsUploading,
} from "../../../redux/kategoriMenu/kategoriMenu.selectors";

// Import Components
import KategoriMenuCarousel from "./kategori-menu-carousel.component";
import KategoriMenuCard from "../kategori-menu-card-component/kategori-menu-card/kategori-menu-card.component";
import KategoriMenuCardAdd from "../kategori-menu-card-component/kategori-menu-card-add/kategori-menu-card-add.component";
import KategoriMenuCardSkeleton from "../kategori-menu-card-component/kategori-menu-card-skeleton/kategori-menu-card-skeleton.components";
import KategoriMenuAddModal from "../kategori-menu-add-compnents/kategori-menu-add-modal/kategori-menu-add-modal.component";
import KategoriMenuDeleteModal from "../kategori-menu-delete-modal/kategori-menu-delete-modal.component";

const KategoriMenu = () => {
  const currentUserRole = useSelector(selectCurrentUserRole);
  const dataKategoriMenu = useSelector(selectDataKategoriMenu);
  const isKategoriUploading = useSelector(selectIsUploading);

  const handlingRenderKategoriCard = () => {
    return dataKategoriMenu.map((kategori, index) => (
      <KategoriMenuCard
        key={index}
        isDefaultActive={false}
        IdKategori={kategori.IdKategori}
        allowDelete={true}
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
          allowDelete={false}
          katImage="https://firebasestorage.googleapis.com/v0/b/our-resto.appspot.com/o/kategoriImages%2Fall.png?alt=media&token=15eb8007-bd64-400f-abbd-982d876b5067"
          katTitle="all"
        />
        {dataKategoriMenu && handlingRenderKategoriCard()}
      </KategoriMenuCarousel>
    ) : (
      <KategoriMenuCarousel>
        <KategoriMenuCardAdd />
        <KategoriMenuCard
          isDefaultActive={true}
          allowDelete={false}
          katImage="https://firebasestorage.googleapis.com/v0/b/our-resto.appspot.com/o/kategoriImages%2Fall.png?alt=media&token=15eb8007-bd64-400f-abbd-982d876b5067"
          katTitle="all"
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
      {dataKategoriMenu ? (
        <>
          {isKategoriUploading
            ? handlingRenderKategoriSkeleton()
            : handlingRenderKategori()}
          <KategoriMenuAddModal />
          <KategoriMenuDeleteModal />
        </>
      ) : (
        handlingRenderKategoriSkeleton()
      )}
    </div>
  );
};

export default KategoriMenu;

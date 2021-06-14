import React from "react";
import "./kategori-menu.styles.scss";

// handling redux
import { connect } from "react-redux";
import KategoriMenuCarousel from "./kategori-menu-carousel.component";
import KategoriMenuCard from "../kategori-menu-card/kategori-menu-card.component";
// handling router
const KategoriMenu = () => {
  return (
    <KategoriMenuCarousel>
      <KategoriMenuCard
        isDefaultActive={true}
        katImage="https://ik.imagekit.io/upecbxjan8p/kategori/kentang.png"
        katTitle="All"
      />
      <KategoriMenuCard
        katImage="https://ik.imagekit.io/upecbxjan8p/kategori/burger.png"
        katTitle="Burger"
      />
      <KategoriMenuCard
        katImage="https://ik.imagekit.io/upecbxjan8p/kategori/minuman.png"
        katTitle="Minuman"
      />
      <KategoriMenuCard
        katImage="https://ik.imagekit.io/upecbxjan8p/kategori/donut.png"
        katTitle="Donut"
      />
      <KategoriMenuCard
        katImage="https://ik.imagekit.io/upecbxjan8p/kategori/hotdog.png"
        katTitle="Hot Dog"
      />
    </KategoriMenuCarousel>
  );
};

export default connect()(KategoriMenu);

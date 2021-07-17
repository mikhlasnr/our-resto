import React from "react";
import "./kategori-menu-card-skeleton.styles.scss";
import { Skeleton } from "antd";
const KategoriMenuCardSkeleton = () => {
  return (
    <div className="kategori-menu-item-skeleton">
      <div className="image-container">
        <Skeleton.Image active />
      </div>
      <Skeleton.Button active />
    </div>
  );
};

export default KategoriMenuCardSkeleton;

import React, { useEffect } from "react";

// Handling Redux
import { useDispatch } from "react-redux";
import { fetchDataKategoriMenu } from "../../redux/kategoriMenu/kategoriMenu.action";
import { fetchDataMenu } from "../../redux/menu/menu.action";

// import component
import { Layout } from "antd";
import PelayandMain from "../../components/pelayan-components/pelayan-main/pelayan-main.component";
import PelayanSidebar from "../../components/pelayan-components/pelayan-sidebar/pelayan-sidebar.component";
import BuatPesananModal from "../../components/pelayan-components/buat-pesanan-modal/buat-pesanan-modal.component";

const DashBoardPelayanPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataKategoriMenu());
    dispatch(fetchDataMenu());
  }, [dispatch]);

  return (
    <Layout id="dashboard-pelayan-page">
      <PelayandMain />
      <PelayanSidebar />
      <BuatPesananModal />
    </Layout>
  );
};

export default DashBoardPelayanPage;

import React, { useEffect } from "react";
import "./dashboard-page.components.scss";
// Handlng Redux
import { useDispatch } from "react-redux";
import {
  fetchDataReport,
  removeDataReport,
} from "../../../../redux/report/report.action";

// Import Components
import { getCurrenDate } from "./dashboard-page.utils";
import PendapatanSection from "../pendapatan-components/pendapatan-section/pendapatan-section.components";
const DashboardPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataReport());
    return () => {
      dispatch(removeDataReport());
    };
  }, []);
  return (
    <div id="admin-dashboard-page">
      <header>
        <div className="header-container">
          <h1>Dashboard</h1>
          <p>{getCurrenDate()}</p>
          <span className="border-dash"></span>
        </div>
      </header>
      <main>
        <PendapatanSection />
      </main>
    </div>
  );
};

export default DashboardPage;

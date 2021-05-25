import React, { Component } from "react";

// import component
import { Layout } from "antd";

import DashboardKasirMain from "../../components/dashboard-kasir-main/dashboard-kasir-main.component";
import DashboardKasirSidebar from "../../components/dashboard-kasir-sidebar/dashboard-kasir-sidebar.component";

class DashBoadrKasirPage extends Component {
  render() {
    const { Sider, Content } = Layout;
    return (
      <section id="dashboard-kasir-page">
        <Layout>
          <Layout
            className="site-layout"
            style={{ padding: "87px 524px 30px 100px", background: "#FFFFFF" }}
          >
            <Content>
              <DashboardKasirMain />
            </Content>
          </Layout>
          <Sider
            theme="light"
            width={493}
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              right: 0,
              background: "#FFFFFF",
              boxShadow: "-12px 0px 68px rgba(215, 215, 215, 0.26)",
            }}
          >
            <DashboardKasirSidebar />
          </Sider>
        </Layout>
      </section>
    );
  }
}

export default DashBoadrKasirPage;

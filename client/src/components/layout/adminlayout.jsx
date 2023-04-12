import React from "react";
import { Layout } from "antd";
import AdminSideBar from "../sidebar/adminsidebar";
const { Content } = Layout;
export default function Adminlayout({ children }) {
  return (
    <Layout>
      <AdminSideBar />
      <Layout>
        <Content style={{ padding: "10px" }}>{children}</Content>
      </Layout>
    </Layout>
  );
}

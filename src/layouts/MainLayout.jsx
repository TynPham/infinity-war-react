import React from "react";
import { Outlet } from "react-router-dom";
import LeftSidebar from "../component/Sidebar/LeftSidebar";
import RightSidebar from "../component/Sidebar/RightSidebar";
import TopNav from "../component/topNav/TopNav";
import "./mainlayout.scss";

function MainLayout(props) {
  return (
    <div className="mainLayout">
      <TopNav />
      <LeftSidebar />
      <RightSidebar />
      <Outlet />
    </div>
  );
}

export default MainLayout;

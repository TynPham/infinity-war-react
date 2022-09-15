import React from "react";
import { Outlet } from "react-router-dom";
import LeftSidebar from "../component/Sidebar/LeftSidebar";
import RightSidebar from "../component/Sidebar/RightSidebar";
import TopNav from "../component/topNav/TopNav";

function MainLayout(props) {
  return (
    <div>
      <TopNav />
      <LeftSidebar />
      <RightSidebar />
      <Outlet />
    </div>
  );
}

export default MainLayout;

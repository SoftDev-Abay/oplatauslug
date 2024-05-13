// import { useState } from "react";
import "./RootLayout.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
const RootLayout = () => {
  // const [sideBarOpen, setSideBarOpen] = useState(true);
  return (
    <div className="wrapper">
      {/* {sideBarOpen && <Sidebar />} */}
      <Sidebar />
      <main className="main-container">
        {/* <button
          type="button"
          className="sidebar-toggle"
          onClick={() => setSideBarOpen(!sideBarOpen)}
        >
          {sideBarOpen ? "Close" : "Open"}
        </button> */}
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;

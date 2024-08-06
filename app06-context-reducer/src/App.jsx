import React, { useState } from "react";
import MuiHeader from "./components/MuiHeader";
import SRoute from "./components/SRoute";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const DrawerToggle = (dOpen) => {
    setDrawerOpen(dOpen);
  };

  return (
    <div className="pApp">
      <ToastContainer />
      <MuiHeader onDrawer={DrawerToggle} />
      <SRoute drawerOpen={drawerOpen} />
    </div>
  );
}

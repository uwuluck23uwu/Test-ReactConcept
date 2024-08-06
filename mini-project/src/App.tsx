import React from "react";
import Header from "./components/Header";
import AllRoute from "./components/AllRoute";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const handleDrawerToggle = (isOpen) => {
    setDrawerOpen(isOpen);
  };

  return (
    <div
      style={{
        marginLeft: drawerOpen ? 250 : 0,
        transition: "margin 0.2s",
      }}
    >
      <div className="header">
        <Header onDrawerToggle={handleDrawerToggle} drawerOpen={drawerOpen} />
      </div>
      <AllRoute />
      <Footer />
    </div>
  );
}

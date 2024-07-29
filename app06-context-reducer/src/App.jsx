import React, {useState} from 'react'
import MuiHeader from "./components/MuiHeader"
import SRoute from "./components/SRoute";

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const DrawerToggle = (dOpen) => {
    setDrawerOpen(dOpen);
  };

  return (
    <div className="pApp">
      <MuiHeader onDrawer={DrawerToggle} />
      <SRoute drawerOpen={drawerOpen} />
    </div>
  );
}

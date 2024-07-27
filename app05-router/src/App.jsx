import React, {useState} from 'react'
import MuiHeader from './components/MuiHeader'
import MainRoute from './components/MainRoute'

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const DrawerToggle = (dOpen) => {
    setDrawerOpen(dOpen);
  };

  return (
    <div>
      <MuiHeader onDrawer={DrawerToggle} />
      <MainRoute drawerOpen={drawerOpen} />
    </div>
  );
}
export default App
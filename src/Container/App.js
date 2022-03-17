import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Box, Toolbar, LinearProgress } from '@mui/material';
import Header from '../Components/Header/Header';
import Sidebar from '../Components/Sidebar/Sidebar';
import { drawerWidth } from './Exports';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Home from '../Components/Pages/Home/Home';
import Product from '../Components/Pages/Product/Product';
import AddProduct from '../Components/Pages/Product/AddProduct/AddProduct';
import EditProduct from '../Components/Pages/Product/EditProduct/EditProduct';
import AddVariant from '../Components/Pages/Product/EditProduct/AddVariant/AddVariant';
import ScrollToTop from './ScrollToTop';
import Fileupload from '../Components/Fileupload/Fileupload';

// import Layout from '../Components/ThemeEditor/Layout/Layout';
import './App.css';

const theme = createTheme({
  palette: {
    type: 'light',
    background: {
      default: "#f5f5f5"
    },
    primary: {
      main: "#030303",
      dark: '#161A1D',
      contrastText: '#fff'
    },
    secondary: {
      main: '#fff',
      contrastText: '#030303'
    },
    info: {
      main: '#EEF4FF',
      contrastText: '#6c91ff'
    },
    success: {
      main: "#00CEAA",
      dark: "#007A66",
      light: "#00CEAA",
      contrastText: '#fff'
    },
  },
  typography: {
    fontFamily: "Roboto",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    allVariants: {
      textTransform: "none",
    },
  }
});

function App() {

  const location = window.location.pathname
  const [mobileOpen, setMobileOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showLoading, setShowLoading] = useState(true);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false)
    }, 500);
    return () => clearTimeout(timer);
  }, []);


  return (
    <ThemeProvider theme={theme}>    

      <Box sx={{ display: 'flex' }}>
         
        <Router>
          <ScrollToTop />
          {location !== "/customizer" &&
            <>
              <Sidebar handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
              <Header handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
            </>
          }
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
            <Toolbar />
            {showLoading ? <LinearProgress className="fixedloading" /> :
              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/product/all" element={<Product />} exact />
                <Route path="/product/all/add-product" element={<AddProduct />} exact />
                <Route path="/product/all/edit-product" element={<EditProduct />} exact />
                {/* <Route path="/customizer" element={<Layout />} exact /> */}
                <Route path="/product/all/edit-product/add-variant" element={<AddVariant />} exact />
                
                {/* file */}
                <Route path="/file" element={<Fileupload />} exact />
              </Routes>
            }
          </Box>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;

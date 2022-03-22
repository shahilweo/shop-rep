
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Box, Toolbar } from '@mui/material';

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

import Layout from '../Components/ThemeEditor/Layout/Layout';

import './App.css';
const theme = createTheme({
  palette: {
    type: 'light',
    background: {
      default: "#f5f5f5"
    },
    primary: {
      // main: "#030303",
      // dark: '#161A1D',
      main: "#0d7e5e",
      dark: '#565555',
      contrastText: '#fff'
    },
    secondary: {
      main: '#00ae5c',
      contrastText: '#fff'
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
    white: {
      main: "#fff"
    }
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
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


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

            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/product/list" element={<Product />} exact />
              <Route path="/product/add-product" element={<AddProduct />} exact />
              <Route path="/product/edit-product" element={<EditProduct />} exact />
              <Route path="/customizer" element={<Layout />} exact />
              <Route path="/product/add-variant" element={<AddVariant />} exact />
            </Routes>


          </Box>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;

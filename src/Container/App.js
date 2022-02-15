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

import Layout from '../Components/ThemeEditor/Layout/Layout';

import './App.css';

const theme = createTheme({
  palette: {
    type: 'light',
    background: {
      default: "#F8F8FB"
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
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    allVariants: {
      textTransform: "none",
    },
  }
});


function App() {
  const location = window.location.pathname
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <Router>
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
              <Route path="/product/all" element={<Product />} exact />
              <Route path="/product/all/add-product" element={<AddProduct />} exact />
              <Route path="/product/all/edit-product" element={<EditProduct />} exact />
              <Route path="/customizer" element={<Layout />} exact />
            </Routes>
          </Box>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;

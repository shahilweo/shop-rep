import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router";
import { Box, Drawer, List, Collapse, Button, Divider } from '@mui/material';
import { Link, NavLink } from "react-router-dom";
import { drawerWidth } from '../../Container/Exports';

import Logo from '../../Assets/images/logo.png';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PersonIcon from '@mui/icons-material/Person';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import StoreIcon from '@mui/icons-material/Store';

import './Sidebar.css';


export default function Sidebar(props) {
    const location = useLocation()
    const [sideMenu, setSideMenu] = useState([
        { main: 'Home', link: "/", submain: [], dropDown: false, active: false, icon: <HomeIcon />, },

        {
            main: 'Order', link: "", submain: [
                { sbname: 'All Order', link: '', active: false },
                { sbname: 'Create', link: '', active: false }
            ], dropDown: false, active: false, icon: <ListAltIcon />,
        },
        {
            main: 'Products', link: "", submain: [
                { sbname: 'All Products', link: "/product/list", active: false },
                { sbname: 'Inventory', link: "/product/inventory", active: false },
                { sbname: 'Category', link: "/product/category", active: false }
            ], dropDown: false, active: false, icon: <Inventory2OutlinedIcon />,
        },
        { main: 'Users', link: "/users", submain: [], dropDown: false, active: false, icon: <PersonIcon />, },
        { main: 'Discount', link: "/discount", submain: [], dropDown: false, active: false, icon: <LocalOfferOutlinedIcon />, },
        {
            main: 'Settings', link: "", submain: [
                { sbname: 'Account', link: "/account", active: false, },
            ], dropDown: false, active: false, icon: <SettingsIcon />,
        },
    ]);

    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;

    const handleClick = (e, index) => {
        let updatemenu = [];
        sideMenu.map((data) => {
            return updatemenu.push({ ...data, 'dropDown': false, 'active': false })
        })
        updatemenu[index].dropDown = !sideMenu[index].dropDown
        updatemenu[index].active = !sideMenu[index].active
        setSideMenu(updatemenu)
    };

    const drawer = (
        <div>
            <Box sx={{ textAlign: "center", padding: "16px" }} >
                <img src={Logo} alt="" width="90" sx={{ margin: "0 auto", display: "block", }} />
            </Box>
            <List>
                {sideMenu.map((menu, index) => (
                    <Box key={index}>
                        {menu.submain.length > 0 ?
                            <Button onClick={(data) => handleClick(data, index)} variant="contained" className={`sidebarButton ${menu.active || location.pathname === menu.link ? "active" : ""} `}  >
                                <Box sx={{ display: 'flex', alignItems: 'center', }}>
                                    <Box className="sidebarButton__icon" sx={{ display: 'flex', mr: 1, }}>{menu.icon}</Box>
                                    {menu.main}
                                </Box>
                                {/* {menu.submain.length > 0 ?
                                    <>
                                        {
                                            menu.dropDown ? <ExpandLess /> : <ExpandMore />
                                        }
                                    </> :
                                    null
                                } */}
                            </Button> :
                            <NavLink component={Link} to={`${menu.link}`} onClick={(data) => handleClick(data, index)} variant="contained" className={`sidebarButton ${menu.active || location.pathname === menu.link ? "active" : ""} `}  >
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Box className="sidebarButton__icon" sx={{ display: 'flex', mr: 1, }}>{menu.icon}</Box>
                                    {menu.main}
                                </Box>
                            </NavLink>
                        }

                        {menu.submain.length > 0 ?
                            <Collapse in={menu.dropDown} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding >
                                    {menu.submain.map((data, index1) => (
                                        <NavLink key={index1} component={Link} to={`${data.link}`} variant="contained" className={`sidebarButton sidebarButton--inner ${data.active || location.pathname === data.link ? "active" : ""} `} >  {data.sbname}</NavLink>
                                    ))}
                                </List>
                            </Collapse> : null}
                    </Box>
                ))}
            </List>
        </div >
    );
    const updateActivemenu = () => {
        if ((location.pathname).split("/").length > 2) {
            let updatemenu = {};
            sideMenu.filter(data => data.link === `/${(location.pathname).split("/")[1]}`).map((data) => {
                updatemenu = { ...data, 'dropDown': true, 'active': true }
            })
            console.log("updatemenu: ", updatemenu)
            // setSideMenu(updatemenu)
        }
        // let list = sideMenu.filter(data => data.link === `/${(location.pathname).split("/")[1]}`)
        // console.log("list", list);
    }
    useEffect(() => {
        // Update the document title using the browser API 
        updateActivemenu()
    });
    return (
        <Box
            component="nav"
            sx={{ boxShadow: "0 0px 6px rgb(0 0 0 / 10%)", width: { sm: drawerWidth }, flexShrink: { sm: 0 }, }}
            aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            {/* <Drawer
                container={container}
                variant="temporary"
                open={props.mobileOpen}
                onClose={props.handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', background: "#ffffff", border: "0", width: drawerWidth },
                }}>
                {drawer}
            </Drawer> */}
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', background: "#ffffff", border: "0", width: drawerWidth },
                }}
                open>
                {drawer}
                <Divider sx={{mb:1}} />
                <a href='/customizer' className="sidebarButton">
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box className="sidebarButton__icon" sx={{ display: 'flex', mr: 1, }}><StoreIcon /></Box>
                        Store settings
                    </Box>
                </a>
            </Drawer>
        </Box>
    )
}

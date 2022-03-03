import { Box } from "@mui/system";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function HeaderCart() {
    return (
        <Box>
            <IconButton color="primary" component="span">
                <SearchIcon />
            </IconButton>
            <IconButton color="primary" component="span">
                <AccountCircleIcon />
            </IconButton>
            <IconButton color="primary" component="span">
                <ShoppingCartIcon />
            </IconButton>
        </Box>
    )
}
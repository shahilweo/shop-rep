import React from 'react'
import { Link } from "react-router-dom";
import { alpha } from '@mui/material/styles';
import { 
    Grid, Divider, Typography, Paper, ButtonGroup, 
    Button, InputBase, Menu, MenuItem, Box, Chip, 
    Card, IconButton,  } from '@mui/material'
import { styled } from '@mui/material/styles';

import SearchIcon from '@mui/icons-material/Search';
import bundleprod from '../../../Assets/images/bundleprod.jpg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


import { DataGrid } from '@mui/x-data-grid';

// secrch
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '200px',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        borderBottom: "1px solid #d9d9d9",
        // borderRadius:"10px",
        // background: "#f7f8fa",
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

// secrch

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));


// dropdown

const columns = [
    { field: 'id', headerName: 'Id', width: 70, sortable: false, },
    { field: 'image', headerName: 'Image', width: 90, renderCell: (params) => <img src={params.value} width="60" />, sortable: false, },
    { field: 'productname', headerName: 'Product Name', renderCell: (params) =>  <Button component={Link} to="/product/all/edit-product"  color="primary">{params.value}</Button>,  width: 200, sortable: false, },
    { field: 'status', headerName: 'Status', sortable: false, renderCell: (params) => <Chip label={params.value} variant="contained" color={params.value === "Active" ? "success" : "secondary"} /> },
    { field: 'inventory', headerName: 'Inventory', width: 200, sortable: false, },
    { field: 'type', headerName: 'Type', sortable: false, },
    { field: 'brands', headerName: 'Brands', sortable: false, },
    { field: 'action', headerName: 'Action', sortable: false, renderCell: (params) => <><IconButton aria-label="edit" color="success"><EditIcon /></IconButton> <IconButton aria-label="delete" color="error"><DeleteIcon /></IconButton></> },

    

    // { field: 'fullName', headerName: 'Full name', description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 160,
    //     valueGetter: (params) =>
    //         `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
    //     }`,
    // },
];

const rows = [
    { id: 1,  image: bundleprod, productname: "Product name", status: "Active", inventory: "in stock for 4 variants", type: "TOYS", brands: "apple", action:""  },
    { id: 2,  image: bundleprod, productname: "Product name", status: "Inactive", inventory: "in stock for 4 variants", type: "TOYS", brands: "apple", action:""  },
    { id: 3,  image: bundleprod, productname: "Product name", status: "Active", inventory: "in stock for 4 variants", type: "TOYS", brands: "apple", action:""  },
    { id: 4,  image: bundleprod, productname: "Product name", status: "Inactive", inventory: "in stock for 4 variants", type: "TOYS", brands: "apple", action:""  },
    { id: 5,  image: bundleprod, productname: "Product name", status: "Active", inventory: "in stock for 4 variants", type: "TOYS", brands: "apple", action:""  },
    { id: 6,  image: bundleprod, productname: "Product name", status: "Inactive", inventory: "in stock for 4 variants", type: "TOYS", brands: "apple", action:""  },
    { id: 7,  image: bundleprod, productname: "Product name", status: "Active", inventory: "in stock for 4 variants", type: "TOYS", brands: "apple", action:""  },
    { id: 8,  image: bundleprod, productname: "Product name", status: "Inactive", inventory: "in stock for 4 variants", type: "TOYS", brands: "apple", action:""  },
    { id: 9,  image: bundleprod, productname: "Product name", status: "Active", inventory: "in stock for 4 variants", type: "TOYS", brands: "apple", action:""  },
    { id: 10, image: bundleprod, productname: "Product name", status: "Inactive", inventory: "in stock for 4 variants", type: "TOYS", brands: "apple", action:""  },
 
];


export default function Product() {
    // dropdown btn
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    // dropdown btn
    return (
        <React.Fragment sx={{ marginBottom: "20px", background: "#fff" }}>
                <Box sx={{ marginBottom: "20px" }}>
                    <Grid container spacing={2} columns={12}>
                        <Grid item xs={6}>
                            <Typography variant="h4" component="div"> Product</Typography>
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: { sm: 'right' }, flexShrink: { sm: 0 } }}>
                            <Button component={Link} to="/product/all/add-product" variant="contained" color="success">Add Product</Button>
                        </Grid>
                    </Grid>
                </Box>                       
                <Box sx={{ marginBottom: "20px" }}>
                    <ButtonGroup variant="contained" aria-label="medium success button group">
                        <Button>All</Button>
                        <Button>Active</Button>
                        <Button>Draft</Button>
                        <Button>Archived</Button>
                    </ButtonGroup>
                </Box>
                <Divider sx={{ marginBottom: "20px" }} />
                <Box sx={{ marginBottom: "20px" }}>
                    <Grid container spacing={2} columns={12}>
                        <Grid item xs={6}>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon color="grey" />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ textAlign: "Right" }}>
                                <Button
                                    id="demo-customized-button"
                                    aria-controls="demo-customized-menu"
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    variant="text"
                                    disableElevation
                                    onClick={handleClick}
                                    endIcon={<KeyboardArrowDownIcon />}
                                    sx={{ marginRight: "10px" }}>
                                    Brands
                                </Button>
                                <StyledMenu
                                    id="demo-customized-menu"
                                    MenuListProps={{ 'aria-labelledby': 'demo-customized-button' }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}>
                                    <MenuItem onClick={handleClose} disableRipple>ADIDAS</MenuItem>
                                    <MenuItem onClick={handleClose} disableRipple>AMERICAN GIRL</MenuItem>
                                    <MenuItem onClick={handleClose} disableRipple>ASICS TIGER</MenuItem>
                                    <MenuItem onClick={handleClose} disableRipple>Apple</MenuItem>
                                </StyledMenu>
                                <Button
                                    id="sortButton"
                                    aria-controls="sortButtonArea"
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    variant="text"
                                    disableElevation
                                    onClick={handleClick}
                                    endIcon={<KeyboardArrowDownIcon />}>
                                    Sort by
                                </Button>
                                <StyledMenu
                                    id="sortButtonArea"
                                    MenuListProps={{ 'aria-labelledby': 'sortButton', }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}>
                                    <MenuItem onClick={handleClose} disableRipple>Product title A–Z</MenuItem>
                                    <MenuItem onClick={handleClose} disableRipple>Product title Z–A</MenuItem>
                                    <MenuItem onClick={handleClose} disableRipple>Created (oldest first)</MenuItem>
                                    <MenuItem onClick={handleClose} disableRipple>Created (newest first)</MenuItem>
                                </StyledMenu>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>             
            <Card sx={{ marginBottom: "20px" }}>
                <Box sx={{ height: 650, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        checkboxSelection
                        disableColumnMenu
                        disableSelectionOnClick={true}
                    />
                </Box>
            </Card>
        </React.Fragment>
    )
}

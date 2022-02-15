import React, { useState, useEffect } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import {
    Box, Button, Grid, ButtonGroup,
    MenuItem, Card, CardContent,
    FormControl, Divider, FormHelperText,
    Typography, Select, TextField, InputBase,
    Chip, Stack, IconButton, Menu, Avatar,
} from '@mui/material';

import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { alpha } from '@mui/material/styles';
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SearchIcon from '@mui/icons-material/Search';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import bundleprod from '../../../../../Assets/images/bundleprod.jpg';
import ImageIcon from '@mui/icons-material/Image';

import PopupModal from '../../../../PopupModal/PopupModal';


// text Editor
const myTheme = createTheme({
    // Set up your custom MUI theme here
    marginBottom: "15px !important"
});

const save = (data) => {
    console.log(data);
};

const filter = createFilterOptions();

const AddVariant = () => {
    const [weight, setWeight] = useState(1);
    const [prodStatus, setProdStatus] = useState(1);
    const [media, setMedia] = useState([]);
    const [values, setValues] = useState({
        amount: '',
    });
    const [value, setValue] = useState(null);
    const [brand, setBrand] = useState(null);
    const [videourl, setVideourl] = useState();

    const [prodOption, setprodOption] = useState([
        { optionName: "Size", optionValue: ["s", "m", "l"], edit: false },
        { optionName: "Color", optionValue: ["red", "green", "Blue"], edit: false },
    ]);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMoreActionopen = Boolean(anchorEl);



    const moreActonClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const moreActionClose = () => {
        setAnchorEl(null);
    };

    const updateVideourl = (e) => {
        setVideourl(e.target.value)
    };

    const handleMediaChange = (e) => {
        setMedia(e)
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleChangeWeight = (event) => {
        setWeight(event.target.value);
    };
    const handleChangeproductStat = (event) => {
        setProdStatus(event.target.value);
    };

    const filterOptions = createFilterOptions({
        matchFrom: 'start',
        stringify: (option) => option.title,
    });

    const getChangedPos = (currentPos, newPos) => {
        console.log(currentPos, newPos);
    };

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        // marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            // marginLeft: theme.spacing(3),
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
            border: "1px solid #d9d9d9",
            margin: 0,
            [theme.breakpoints.up('md')]: {
                width: '100%',
            },
        },
    }));




    return (
        <React.Fragment>
            <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={6}>
                    <Button component={Link} variant="text" to="/product/all/edit-product" color="success" startIcon={<ArrowBackIosIcon />}> Add Variant </Button>
                </Grid>
                <Grid item xs={6}>

                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Card sx={{ mb: 2 }}>
                        <CardContent>
                            <Grid container spacing={2} columns={12}>
                                <Grid item xs={4}>
                                    <Box> <img src={bundleprod} alt="" /> </Box>

                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant="h6" gutterBottom component="div">For your Buns Bundle</Typography>
                                    <Chip label="Active" color="success" />
                                    <Box sx={{ pt: 1, }}>
                                        <Typography variant="caption" display="block" gutterTop gutterBottom> 5 variants </Typography>
                                    </Box>
                                    <Button component={Link} variant="text" to="/product/all/edit-product" color="success" sx={{ p: 0 }} > Back to product </Button>

                                </Grid>
                            </Grid>

                        </CardContent>
                    </Card>
                    <Card sx={{ mb: 2 }}>
                        <CardContent>
                            <Typography variant="h6" component="div">Variants</Typography>
                            <Divider sx={{ my: 2 }} />
                            <Box sx={{ display: 'flex' }} >
                                <Box>
                                    <Avatar><ImageIcon /></Avatar>
                                </Box>
                                <Box>
                                    medium / Red / fit
                                </Box>

                            </Box>

                        </CardContent>
                    </Card>



                </Grid>
                <Grid item xs={8}>
                    <Card sx={{ mb: 2 }}>
                        <CardContent>
                            <Typography variant="h6" component="h6" >Product status</Typography>
                            <FormControl fullWidth sx={{ m: 0 }}>
                                <Select
                                    labelId="ProductStatus"
                                    id="productStatus"
                                    value={prodStatus}
                                    onChange={handleChangeproductStat}
                                    sx={{ mt: 2 }} >
                                    <MenuItem value={1}>Draft</MenuItem>
                                    <MenuItem value={2}>Active</MenuItem>
                                </Select>
                                <FormHelperText >This product will be hidden from all sales channels</FormHelperText>
                            </FormControl>
                        </CardContent>
                    </Card>
                    <Card sx={{ mb: 2 }}>
                        <CardContent>
                            <Grid container spacing={2} columns={12}>
                                <Grid item md={6}>
                                    <Box><Typography variant="h6" component="h6" sx={{ marginBottom: "15px !important" }}>Media Image</Typography></Box>
                                </Grid>
                                <Grid item md={6} sx={{ textAlign: "Right" }}>
                                    <Button>Add media from URL</Button>
                                </Grid>
                            </Grid>
                            <Box sx={{ marginBottom: "15px !important" }}></Box>
                            <DropzoneArea
                                onChange={(files) => handleMediaChange(files)}
                                acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                                filesLimit={5}
                                showAlerts={false}
                                // onChange={(files) => console.log('Files:', files)}
                                showPreviewsInDropzone={false}
                                showPreviews={true}
                            // showFileNamesInPreview={true}
                            />
                        </CardContent>
                    </Card>
                    <Card sx={{ mb: 2 }}>
                        <CardContent>
                            <Typography variant="h6" component="h6" sx={{ marginBottom: "15px !important" }}>Organization</Typography>
                            <Typography component="label" sx={{ mb: "10px !important", display: "block" }}>Brands</Typography>

                        </CardContent>
                        <Divider sx={{ mt: "15px" }}></Divider>
                        <CardContent>
                            <Typography variant="h6" component="h6" sx={{ marginBottom: "15px !important" }}>Product Type</Typography>
                            <Typography component="label" sx={{ mb: "10px !important", display: "block" }}>Standard</Typography>
                            <FormControl fullWidth sx={{ m: 0 }}>

                            </FormControl>
                        </CardContent>

                        <CardContent>
                            <Typography variant="h6" component="h6" sx={{ marginBottom: "15px !important" }}>Category</Typography>
                            <FormControl fullWidth sx={{ marginBottom: "15px !important" }} >

                            </FormControl>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Divider sx={{ my: "15px" }}></Divider>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Box sx={{ textAlign: "left" }}>
                                <Button variant="contained" color="secondary" size="large">Archive product</Button>
                                <Button variant="contained" color="error" size="large" sx={{ ml: 1 }}>Delete product</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ textAlign: "right" }}>
                                <Button variant="contained" color="success" size="large">Save</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


        </React.Fragment>
    );
}

export default AddVariant
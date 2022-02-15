import React, { useState } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import {
    Box, Button, Grid, MenuItem, Card, CardContent,
    FormControl, InputAdornment, Divider, FormControlLabel,
    Checkbox, FormHelperText, Typography, FormGroup, Select, TextField, InputBase
} from '@mui/material';

import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete'; 

import { alpha } from '@mui/material/styles';
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SearchIcon from '@mui/icons-material/Search';

import { createTheme, ThemeProvider } from '@mui/material/styles'
import MUIRichTextEditor from 'mui-rte';
 
import Seo from '../../../Seo/Seo'; 

const AddProduct = () => {
    const [weight, setWeight] = useState(1);
    const [prodStatus, setProdStatus] = useState(1);
    const [media, setMedia] = useState([]);
    const [value, setValue] = useState(null);
    const [brand, setBrand] = useState(null);
    const [pricing, setPricing] = useState({
        price: 0,
        cost: 0,
        margin: 0,
        profit: 0,
    });
    // text Editor
    const myTheme = createTheme({
        // Set up your custom MUI theme here
        marginBottom: "15px !important"
    })
    const save = (data) => {
        console.log(data);
    };
    // text Editor 
    const marginprofit = (e) => {
        setPricing({ ...pricing, [e.target.name]: e.target.value })
    };
    const getprofit = (e) => {
        let mprofit = pricing.price - pricing.cost
        let mMargin = (100 - (pricing.cost / pricing.price * 100))
        setPricing({ ...pricing, 'profit': mprofit, 'margin': mMargin })
    };

    console.log(pricing);

    const handleMediaChange = (e) => {
        setMedia(e)
    };

    const handleChangeWeight = (event) => {
        setWeight(event.target.value);
    };
    const handleChangeproductStat = (event) => {
        setProdStatus(event.target.value);
    };
    const handleChangeBrand = (event) => {
        setBrand(event.target.value);
    };
    const filter = createFilterOptions();
    const filterOptions = createFilterOptions({
        matchFrom: 'start',
        stringify: (option) => option.title,
    });

    const productTypesList = [
        { title: 'product type 1' },
        { title: 'product type 2' },
        { title: 'product type 3' },
        { title: 'product type 4' },
        { title: 'product type 5' },
        { title: "product type 6" },
        { title: 'product type 7' },
    ];
    const organization = [
        { title: 'Organization 1' },
        { title: 'Organization 2' },
        { title: 'Organization 3' },
        { title: 'Organization 4' },
        { title: 'Organization 5' },
        { title: "Organization 6" },
        { title: 'Organization 7' },
    ];

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
            // borderRadius:"10px",
            // background: "#f7f8fa",
            margin: 0,
            [theme.breakpoints.up('md')]: {
                width: '100%',
            },
        },
    }));


    return (
        <Box>
            <Box sx={{ mb: 2 }}>
                <Grid container spacing={2} columns={12}>
                    <Grid item md={6}>
                        <Button component={Link} variant="text" to="/product/all" color="success" startIcon={<ArrowBackIosIcon />}> Product </Button>
                    </Grid>
                    <Grid item md={6} sx={{ textAlign: "Right" }}></Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container spacing={2} columns={12}>
                    <Grid item md={8}>
                        <Card sx={{ mb: 2 }}>
                            <CardContent>
                                <Typography variant="h6" component="div">Product Title</Typography>
                                <FormControl fullWidth sx={{ mt: 2.5 }}>
                                    <TextField
                                        id="standard-basic"
                                        label="Title"
                                        InputLabelProps={{ shrink: true }}
                                        variant="outlined" />
                                </FormControl>
                            </CardContent>
                        </Card>
                        <Card sx={{ mb: 2 }}>
                            <CardContent>
                                <Typography variant="h6" component="div">Product Description</Typography>
                                <ThemeProvider theme={myTheme} >
                                    <MUIRichTextEditor
                                        label="Type something here..."
                                        onSave={save}
                                        inlineToolbar={true} />
                                    <Box sx={{ paddingTop: "36px" }}></Box>
                                </ThemeProvider>
                            </CardContent>
                        </Card>
                        <Card sx={{ mb: 2 }}>
                            <CardContent>
                                <Typography variant="h6" component="h6" sx={{ marginBottom: "15px !important" }}>Media Image</Typography> 
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
                                <Typography variant="h6" component="h6" sx={{ marginBottom: "15px !important" }}>Pricing</Typography>
                                <Grid container spacing={2} columns={12}>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth sx={{ m: 0 }} >
                                            <TextField
                                                label="Price"
                                                type="number"
                                                id="prodPrice"
                                                name="price"
                                                onChange={marginprofit}
                                                onBlur={getprofit}
                                                sx={{ m: 0, width: '100%' }}
                                                InputProps={{
                                                    startadornment: <InputAdornment position="start">₹</InputAdornment>
                                                }}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth sx={{ margin: "0px" }}>
                                            <TextField
                                                label="Compare at price"
                                                type="number"
                                                id="comparePrice"
                                                sx={{ m: 0, width: '100%' }}
                                                InputProps={{
                                                    startadornment: <InputAdornment position="start">₹</InputAdornment>
                                                }}
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ my: "15px" }}></Divider>
                                <Grid container spacing={2} columns={12}>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth sx={{ m: 0 }}>
                                            <TextField
                                                label="Cost per item"
                                                type="number"
                                                id="costpItem"
                                                name="cost"
                                                onChange={marginprofit}
                                                onBlur={getprofit}
                                                startadornment={<InputAdornment position="start">₹</InputAdornment>}
                                            />
                                            <FormHelperText >Customers won’t see this </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box>
                                            <Grid container spacing={2} columns={12}>
                                                <Grid item xs={6} sx={{ textAlign: "center", marginTop: "10px" }}>
                                                    Margin
                                                    <Box>{pricing.margin.toFixed(2)}{pricing.margin !== 0 && "%"}</Box>
                                                </Grid>
                                                <Grid item xs={6} sx={{ textAlign: "center", marginTop: "10px" }}>
                                                    Profit
                                                    <Box>{pricing.profit !== 0 && "₹"}{pricing.profit.toFixed(2)}</Box>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel control={<Checkbox />} label="Charge tax on this product" />
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <Card sx={{ mb: 2 }}>
                            <CardContent>
                                <Typography variant="h6" component="h6" sx={{ marginBottom: "15px !important" }}>Inventory</Typography>
                                <Grid container spacing={2} columns={12}>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth sx={{ m: 0 }}>
                                            <TextField
                                                label="SKU (Stock Keeping Unit) "
                                                id="sku"
                                                sx={{ m: 0, width: '100%' }} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth sx={{ m: 0 }}>
                                            <TextField
                                                label="Barcode (ISBN, UPC, GTIN, etc.) at price"
                                                id="barcode"
                                                sx={{ m: 0, width: '100%' }} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6} sx={{ paddingTop: "15px" }}>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Track quantity" />
                                            <FormControlLabel control={<Checkbox />} label="Continue selling when out of stock" />
                                        </FormGroup>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ my: "15px" }}></Divider>
                                <Typography variant="h6" component="h6" sx={{ marginBottom: "15px !important" }}>Quantity</Typography>
                                <FormControl fullWidth sx={{ m: 0 }}>
                                    <TextField
                                        label="Available"
                                        type="number"
                                        id="quantity"
                                    />
                                </FormControl>
                            </CardContent>
                        </Card>
                        <Card sx={{ mb: 2 }}>
                            <CardContent>
                                <Typography variant="h6" component="h6" sx={{ marginBottom: "15px !important" }}>Shipping</Typography>
                                <FormControlLabel control={<Checkbox />} label="This is a physical product" />

                                <Divider sx={{ my: "15px" }}></Divider>

                                <Typography variant="h6" component="h6" sx={{ marginBottom: "15px !important" }}>Weight</Typography>
                                <Typography variant="body1" gutterBottom>Used to calculate shipping rates at checkout and label prices during fulfillment.</Typography>
                                <TextField
                                    label="Weight"
                                    type="number"
                                    id="weight"
                                    sx={{ mt: 1, }}
                                />
                                <FormControl sx={{ m: 1 }}>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={weight}
                                        onChange={handleChangeWeight}
                                        sx={{ m: 0, marginLeft: "8px" }} >
                                        <MenuItem value={1}>Kg</MenuItem>
                                        <MenuItem value={2}>LBS</MenuItem>
                                        <MenuItem value={3}>Pound</MenuItem>
                                    </Select>
                                </FormControl>
                            </CardContent>
                        </Card>
                        <Card sx={{ mb: 2 }}>
                            <CardContent>
                                <Seo />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={4}>
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
                                <Typography variant="h6" component="h6" sx={{ marginBottom: "15px !important" }}>Organization</Typography>
                                <Typography component="label" sx={{ mb: "10px !important", display: "block" }}>Brands</Typography>
                                <FormControl fullWidth sx={{ m: 0 }}>
                                    <Autocomplete
                                        value={brand}
                                        onChange={(event, newValue) => {
                                            if (typeof newValue === "string") {
                                                setBrand({
                                                    title: newValue
                                                });
                                            } else if (newValue && newValue.inputValue) {
                                                // Create a new value from the user input
                                                setBrand({
                                                    title: newValue.inputValue
                                                });
                                            } else {
                                                setBrand(newValue);
                                            }
                                        }}
                                        filterOptions={(options, params) => {
                                            const filtered = filter(options, params);

                                            const { inputValue } = params;
                                            // Suggest the creation of a new value
                                            const isExisting = options.some(
                                                (option) => inputValue === option.title
                                            );
                                            if (inputValue !== "" && !isExisting) {
                                                filtered.push({
                                                    inputValue,
                                                    title: `Add "${inputValue}"`
                                                });
                                            }

                                            return filtered;
                                        }}
                                        selectOnFocus
                                        clearOnBlur
                                        handleHomeEndKeys
                                        id="brandTypes"
                                        options={organization}
                                        getOptionLabel={(option) => {
                                            // Value selected with enter, right from the input
                                            if (typeof option === "string") {
                                                return option;
                                            }
                                            // Add "xxx" option created dynamically
                                            if (option.inputValue) {
                                                return option.inputValue;
                                            }
                                            // Regular option
                                            return option.title;
                                        }}
                                        renderOption={(props, option) => <li {...props}>{option.title}</li>}
                                        sx={{ width: "100%" }}
                                        freeSolo
                                        renderInput={(params) => (
                                            <TextField {...params} label="Free solo with text demo" />
                                        )}
                                    />
                                </FormControl>
                            </CardContent>

                            <Divider sx={{ mt: "15px" }}></Divider>

                            <CardContent>
                                <Typography variant="h6" component="h6" sx={{ marginBottom: "15px !important" }}>Product Type</Typography>
                                <Typography component="label" sx={{ mb: "10px !important", display: "block" }}>Standard</Typography>
                                <FormControl fullWidth sx={{ m: 0 }}>
                                    <Autocomplete
                                        value={value}
                                        onChange={(event, newValue) => {
                                            if (typeof newValue === 'string') {
                                                setValue({
                                                    title: newValue,
                                                });
                                            } else if (newValue && newValue.inputValue) {
                                                // Create a new value from the user input
                                                setValue({
                                                    title: newValue.inputValue,
                                                });
                                            } else {
                                                setValue(newValue);
                                            }
                                        }}
                                        filterOptions={(options, params) => {
                                            const filtered = filter(options, params);
                                            const { inputValue } = params;
                                            // Suggest the creation of a new value
                                            const isExisting = options.some((option) => inputValue === option.title);
                                            if (inputValue !== '' && !isExisting) {
                                                filtered.push({
                                                    inputValue,
                                                    title: `Add "${inputValue}"`,
                                                });
                                            }

                                            return filtered;
                                        }}
                                        selectOnFocus
                                        clearOnBlur
                                        handleHomeEndKeys
                                        id="productTypes"
                                        options={productTypesList}
                                        getOptionLabel={(option) => {
                                            // Value selected with enter, right from the input
                                            if (typeof option === 'string') {
                                                return option;
                                            }
                                            // Add "xxx" option created dynamically
                                            if (option.inputValue) {
                                                return option.inputValue;
                                            }
                                            // Regular option
                                            return option.title;
                                        }}
                                        renderOption={(props, option) => <li {...props}>{option.title}</li>}
                                        sx={{ width: "100%" }}
                                        freeSolo
                                        renderInput={(params) => (
                                            <TextField  {...params} label="Search types" />
                                        )}
                                    />
                                </FormControl>
                            </CardContent>

                            <CardContent>
                                <Typography variant="h6" component="h6" sx={{ marginBottom: "15px !important" }}>Category</Typography>
                                <FormControl fullWidth sx={{ marginBottom: "15px !important" }} >
                                    <Search>
                                        <SearchIconWrapper>
                                            <SearchIcon color="grey" />
                                        </SearchIconWrapper>
                                        <StyledInputBase
                                            placeholder="Search…"
                                            inputProps={{ 'aria-label': 'search' }}
                                            sx={{ display: "flex" }}
                                        />
                                    </Search>
                                </FormControl>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={12}>
                        <Divider sx={{ my: "15px" }}></Divider>
                        <Box sx={{ textAlign: "left" }}>
                            <Button variant="contained" color="success" size="large">Save</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default AddProduct
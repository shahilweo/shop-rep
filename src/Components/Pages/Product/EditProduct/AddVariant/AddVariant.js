import React, { useState } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import {
    Box, Button, Grid,
    MenuItem, Card, CardContent,
    FormControl, Divider, FormHelperText,
    Typography, Select, TextField, InputBase,
    Chip, Avatar, List, ListItemButton, ListItemText,
    ListItemAvatar, InputAdornment, FormControlLabel, Checkbox
} from '@mui/material';

import { createFilterOptions } from '@mui/material/Autocomplete';
import { alpha } from '@mui/material/styles';
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { createTheme } from '@mui/material/styles';
import bundleprod from '../../../../../Assets/images/bundleprod.jpg';
import ImageIcon from '@mui/icons-material/Image';


const AddVariant = () => {
    const [weight, setWeight] = useState(1);
    const [prodStatus, setProdStatus] = useState(1);
    const [media, setMedia] = useState([]);

    const [anchorEl, setAnchorEl] = useState(null);
    const [values, setValues] = useState({
        amount: '',
    });
    const [pricing, setPricing] = useState({
        price: 0,
        cost: 0,
        margin: 0,
        profit: 0,
    });

    const marginprofit = (e) => {
        setPricing({ ...pricing, [e.target.name]: e.target.value })
    };
    const getprofit = (e) => {
        let mprofit = pricing.price - pricing.cost
        let mMargin = (100 - (pricing.cost / pricing.price * 100))
        setPricing({ ...pricing, 'profit': mprofit, 'margin': mMargin })
    };


    const handleMediaChange = (e) => {
        setMedia(e)
    };


    const handleChangeWeight = (event) => {
        setWeight(event.target.value);
    };




    return (
        <React.Fragment>
            <Box className="smallContainer">
                <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid item xs={6}>
                        <Button component={Link} variant="text" to="/product/all/edit-product" color="success" startIcon={<ArrowBackIosIcon />}> Edit product </Button>
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
                                        <Typography variant="h6" gutterBottom component="div">For your buns bundle</Typography>
                                        <Chip label="Active" color="success" />
                                        <Box sx={{ pt: 1, }}>
                                            <Typography variant="caption" display="block" gutterBottom> 5 variants </Typography>
                                        </Box>
                                        <Button component={Link} variant="text" to="/product/all/edit-product" color="success" sx={{ p: 0 }} > Back to product </Button>

                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <Card sx={{ mb: 2 }}>
                            <CardContent>
                                <Typography variant="h6" component="div"  >Variants</Typography> 
                                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                    <Link to="" className='basicAnchor' >
                                        <ListItemButton>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <ImageIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="medium / red / fit" />
                                        </ListItemButton>
                                    </Link>
                                    <Link to="" className='basicAnchor' >
                                        <ListItemButton>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <ImageIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="medium / red / fit" />
                                        </ListItemButton>
                                    </Link>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={8}>
                        <Card sx={{ mb: 2 }}>
                            <CardContent>
                                <Typography variant="h6" component="h6" gutterBottom>Options</Typography>
                                <Grid container spacing={2} columns={12}>
                                    <Grid item md={4}>
                                        <FormControl fullWidth  >
                                            <TextField id="option1" label="options name 1" variant="outlined"   size="small" />
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={4}>
                                        <FormControl fullWidth  >
                                            <TextField id="option2" label="options name 2" variant="outlined"   size="small" />
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={4}>
                                        <FormControl fullWidth  >
                                            <TextField id="option2" label="options name 3" variant="outlined"   size="small" />
                                        </FormControl>
                                    </Grid>
                                </Grid>

                            </CardContent>
                        </Card>
                        <Card sx={{ mb: 2 }}>
                            <CardContent>
                                <Grid container spacing={2} columns={12}>
                                    <Grid item md={6}>
                                        <Box><Typography variant="h6" component="h6" gutterBottom>Media image</Typography></Box>
                                    </Grid>
                                    <Grid item md={6} sx={{ textAlign: "Right" }}>

                                    </Grid>
                                </Grid>
                            
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
                                <Typography variant="h6" component="h6" gutterBottom>Pricing</Typography>
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
                                                 size="small"
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
                                                 size="small"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ my: 2 }}></Divider>
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
                                                 size="small"
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
                                <Divider sx={{ my: 1 }}></Divider>
                                <Typography variant="h6" component="h6" gutterBottom >Inventory</Typography>
                                <Grid container spacing={2} columns={12}>
                                    <Grid item md={6}>
                                        <FormControl fullWidth >
                                            <TextField id="option1" label="SKU (Stock Keeping Unit) " variant="outlined"   size="small" />
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={6}>
                                        <FormControl fullWidth >
                                            <TextField id="option2" label="Barcode (ISBN, UPC, GTIN, etc.)" variant="outlined"   size="small" />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box>
                                            <FormControlLabel control={<Checkbox />} label="Track quantity" />
                                        </Box>
                                        <Box>
                                            <FormControlLabel control={<Checkbox />} label="Continue selling when out of stock" />
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ my: 1 }}></Divider>
                                <Typography variant="h6" component="h6" gutterBottom >Quantity</Typography>
                                <Grid container spacing={2} columns={12}>
                                    <Grid item md={6}>
                                        <FormControl fullWidth >
                                            <TextField id="option1" label="Available" type="number" variant="outlined"   size="small" />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <Card sx={{ mb: 2 }}>
                            <CardContent>
                                <Typography variant="h6" component="h6" gutterBottom>Shipping</Typography>
                                <FormControlLabel control={<Checkbox />} label="This is a physical product" />

                                <Divider sx={{ my: 1 }}></Divider>

                                <Typography variant="h6" component="h6" gutterBottom>Weight</Typography>
                                <Typography variant="body1" gutterBottom>Used to calculate shipping rates at checkout and label prices during fulfillment.</Typography>
                                <TextField
                                    label="Weight"
                                    type="number"
                                    id="weight"
                                    sx={{ mt: 1, }}
                                     size="small"
                                />
                                <FormControl sx={{ m: 1 }}>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={weight}
                                        onChange={handleChangeWeight}
                                        sx={{ m: 0, marginLeft: "8px" }}
                                         size="small" >
                                        <MenuItem value={1}>Kg</MenuItem>
                                        <MenuItem value={2}>LBS</MenuItem>
                                        <MenuItem value={3}>Pound</MenuItem>
                                    </Select>
                                </FormControl>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12}>
                        <Divider sx={{ my: 2 }}></Divider>
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <Box sx={{ textAlign: "right" }}>
                                    <Button variant="contained" color="error" size="large" sx={{ mr: 1 }}>Cancel</Button>
                                    <Button variant="contained" color="success" size="large">Save variant</Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Box>
        </React.Fragment>
    );
}

export default AddVariant
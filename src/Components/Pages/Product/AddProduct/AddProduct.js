import React, { useEffect, useState, useRef } from 'react';
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

import htmlToDraft from "html-to-draftjs";

import { EditorState, convertToRaw, ContentState, convertFromHTML } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { useDropzone } from 'react-dropzone';

import Seo from '../../../Seo/Seo';

// file drag drop 

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

// file drag drop  

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

    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );

    const [files, setFiles] = useState([]);

    const { getRootProps, getInputProps } = useDropzone({

        accept: 'image/*',
        onDrop: acceptedFiles => {
            let updateFiles = [];
            files.map((data) => {
                return updateFiles.push({ ...data })
            })





            acceptedFiles.map(file => {
                // reader.onloadend = () => {
                Object.assign(file, {
                    preview: URL.createObjectURL(file),
                })
                // }
            })

            let combineData = [...files, ...acceptedFiles]
            console.log("combineData", combineData)
            setFiles(combineData);
            console.log("acceptedFiles: ", acceptedFiles)
        }

    });


    const updateTextDescription = async (state) => {
        await setEditorState(state);
        const data = convertToRaw(editorState.getCurrentContent());
    };


    const thumbs = files.length > 0 && files.map((file, i) => {
        return (
            <div className="filePreviewBox" key={i.toString()}>
                <div className="filePreviewBox__img" >
                    <img src={file} />
                </div>
                <div className="filePreviewBox__cntnt">

                </div>
            </div>
        )
    });

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


    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks
        console.log('files', files)
        files.forEach(file => URL.revokeObjectURL(file.preview));

    }, [files]);

    return (
        <Box className="smallContainer">
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
                                <Typography variant="h6" component="div" gutterBottom>Product Title</Typography>
                                <FormControl fullWidth  >
                                    <TextField
                                        id="standard-basic"
                                        label="Title"
                                        InputLabelProps={{ shrink: true }}
                                        size="small"
                                        variant="outlined" />
                                </FormControl>
                            </CardContent>
                        </Card>
                        <Card sx={{ mb: 2 }}>
                            <CardContent>
                                <Typography variant="h6" component="div" gutterBottom>Product Description</Typography>
                                <div  >
                                    <Editor
                                        editorState={editorState}
                                        toolbarClassName="textEditorBoxToolbar"
                                        wrapperClassName="wrapperClassName"
                                        editorClassName="textEditorBox"
                                        onEditorStateChange={updateTextDescription}
                                        toolbar={
                                            {
                                                options: ['inline', 'blockType', 'emoji', 'image', 'colorPicker', 'list', 'textAlign', 'link',],
                                                inline: {
                                                    inDropdown: false,
                                                    className: undefined,
                                                    component: undefined,
                                                    dropdownClassName: undefined,
                                                    options: ['bold', 'italic', 'underline'],

                                                },
                                                blockType: {
                                                    inDropdown: true,
                                                    options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote'],
                                                    className: undefined,
                                                    component: undefined,
                                                    dropdownClassName: undefined,
                                                },
                                                list: {
                                                    inDropdown: true,
                                                    className: undefined,
                                                    component: undefined,
                                                    dropdownClassName: undefined,
                                                    options: ['unordered', 'ordered', 'indent', 'outdent'],

                                                },
                                                textAlign: {
                                                    inDropdown: true,
                                                    className: undefined,
                                                    component: undefined,
                                                    dropdownClassName: undefined,
                                                    options: ['left', 'center', 'right', 'justify'],

                                                },
                                                colorPicker: {
                                                    className: undefined,
                                                    component: undefined,
                                                    popupClassName: undefined,
                                                    colors: ['rgb(97,189,109)', 'rgb(26,188,156)', 'rgb(84,172,210)', 'rgb(44,130,201)',
                                                        'rgb(147,101,184)', 'rgb(71,85,119)', 'rgb(204,204,204)', 'rgb(65,168,95)', 'rgb(0,168,133)',
                                                        'rgb(61,142,185)', 'rgb(41,105,176)', 'rgb(85,57,130)', 'rgb(40,50,78)', 'rgb(0,0,0)',
                                                        'rgb(247,218,100)', 'rgb(251,160,38)', 'rgb(235,107,86)', 'rgb(226,80,65)', 'rgb(163,143,132)',
                                                        'rgb(239,239,239)', 'rgb(255,255,255)', 'rgb(250,197,28)', 'rgb(243,121,52)', 'rgb(209,72,65)',
                                                        'rgb(184,49,47)', 'rgb(124,112,107)', 'rgb(209,213,216)'],
                                                },
                                                link: {
                                                    inDropdown: true,
                                                    className: undefined,
                                                    component: undefined,
                                                    popupClassName: undefined,
                                                    dropdownClassName: undefined,
                                                    showOpenOptionOnHover: true,
                                                    defaultTargetOption: '_self',
                                                    options: ['link', 'unlink'],
                                                    linkCallback: undefined
                                                },
                                                emoji: {
                                                    className: undefined,
                                                    component: undefined,
                                                    popupClassName: undefined,
                                                    emojis: [
                                                        '😀', '😁', '😂', '😃', '😉', '😋', '😎', '😍', '😗', '🤗', '🤔', '😣', '😫', '😴', '😌', '🤓',
                                                        '😛', '😜', '😠', '😇', '😷', '😈', '👻', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '🙈',
                                                        '🙉', '🙊', '👼', '👮', '🕵', '💂', '👳', '🎅', '👸', '👰', '👲', '🙍', '🙇', '🚶', '🏃', '💃',
                                                        '⛷', '🏂', '🏌', '🏄', '🚣', '🏊', '⛹', '🏋', '🚴', '👫', '💪', '👈', '👉', '👉', '👆', '🖕',
                                                        '👇', '🖖', '🤘', '🖐', '👌', '👍', '👎', '✊', '👊', '👏', '🙌', '🙏', '🐵', '🐶', '🐇', '🐥',
                                                        '🐸', '🐌', '🐛', '🐜', '🐝', '🍉', '🍄', '🍔', '🍤', '🍨', '🍪', '🎂', '🍰', '🍾', '🍷', '🍸',
                                                        '🍺', '🌍', '🚑', '⏰', '🌙', '🌝', '🌞', '⭐', '🌟', '🌠', '🌨', '🌩', '⛄', '🔥', '🎄', '🎈',
                                                        '🎉', '🎊', '🎁', '🎗', '🏀', '🏈', '🎲', '🔇', '🔈', '📣', '🔔', '🎵', '🎷', '💰', '🖊', '📅',
                                                        '✅', '❎', '💯',
                                                    ],
                                                },
                                                embedded: {
                                                    className: undefined,
                                                    component: undefined,
                                                    popupClassName: undefined,
                                                    embedCallback: undefined,
                                                    defaultSize: {
                                                        height: 'auto',
                                                        width: 'auto',
                                                    },
                                                },
                                                image: {
                                                    className: undefined,
                                                    component: undefined,
                                                    popupClassName: undefined,
                                                    urlEnabled: true,
                                                    uploadEnabled: true,
                                                    alignmentEnabled: true,
                                                    uploadCallback: undefined,
                                                    previewImage: false,
                                                    inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                                                    alt: { present: false, mandatory: false },
                                                    defaultSize: {
                                                        height: 'auto',
                                                        width: 'auto',
                                                    },
                                                },

                                            }
                                        }
                                    />
                                    <textarea
                                        disabled
                                        style={{ width: "100%", display: "none" }}
                                        value={draftToHtml(
                                            convertToRaw(
                                                editorState && editorState.getCurrentContent()
                                            )
                                        )}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                        <Card sx={{ mb: 2 }}>
                            <CardContent>
                                <Typography variant="h6" component="h6" gutterBottom>Media Image</Typography>


                                <Box className="container">

                                    <Box className={`fileUploader ${files.length > 0 ? "active" : null}`}>
                                        {thumbs}
                                        <div {...getRootProps({ className: 'dropzone' })}>
                                            <input {...getInputProps()} />
                                            <p>Drag 'n' drop some files here.</p>
                                        </div>
                                    </Box>
                                </Box>
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
                                                size="small"
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
                                                size="small"
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
                                                size="small"
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
                                <Typography variant="h6" component="h6" gutterBottom>Inventory</Typography>
                                <Grid container spacing={2} columns={12}>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth sx={{ m: 0 }}>
                                            <TextField
                                                label="SKU (Stock Keeping Unit) "
                                                id="sku"

                                                size="small"
                                                sx={{ m: 0, width: '100%' }} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth sx={{ m: 0 }}>
                                            <TextField

                                                size="small"
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
                                <Typography variant="h6" component="h6" gutterBottom>Quantity</Typography>
                                <FormControl fullWidth sx={{ m: 0 }}>
                                    <TextField
                                        label="Available"
                                        type="number"
                                        id="quantity"

                                        size="small"
                                    />
                                </FormControl>
                            </CardContent>
                        </Card>
                        <Card sx={{ mb: 2 }}>
                            <CardContent>
                                <Typography variant="h6" component="h6" gutterBottom>Shipping</Typography>
                                <FormControlLabel control={<Checkbox />} label="This is a physical product" />

                                <Divider sx={{ my: "15px" }}></Divider>

                                <Typography variant="h6" component="h6" gutterBottom>Weight</Typography>
                                <Typography variant="body1" gutterBottom>Used to calculate shipping rates at checkout and label prices during fulfillment.</Typography>
                                <TextField
                                    label="Weight"
                                    type="number"
                                    id="weight"

                                    size="small"
                                    sx={{ mt: 1, }}
                                />
                                <FormControl sx={{ m: 1 }}>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        defaultValue={weight}
                                        size="small"
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
                                <Typography variant="h6" component="h6" gutterBottom >Product status</Typography>
                                <FormControl fullWidth sx={{ m: 0 }}>
                                    <Select
                                        labelId="ProductStatus"
                                        id="productStatus"
                                        onChange={handleChangeproductStat}
                                        sx={{ mt: 0}}
                                        defaultValue={prodStatus} size="small"
                                    >
                                        <MenuItem value={1}>Draft</MenuItem>
                                        <MenuItem value={2}>Active</MenuItem>
                                    </Select>
                                    <FormHelperText >This product will be hidden from all sales channels</FormHelperText>
                                </FormControl>
                            </CardContent>
                        </Card>
                        <Card sx={{ mb: 2 }}>
                            <CardContent>
                                <Typography variant="h6" component="h6" gutterBottom>Organization</Typography>
                                <Typography component="label" gutterBottom sx={{   display: "block" }}>Brands</Typography>
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
                                            <TextField {...params} label="Free solo with text demo" size="small" />
                                        )}
                                    />
                                </FormControl>
                            </CardContent>
                            <Divider sx={{ mt: "15px" }}></Divider>
                            <CardContent>
                                <Typography variant="h6" component="h6" gutterBottom>Product Type</Typography>
                                <Typography component="label" gutterBottom sx={{  display: "block" }}>Standard</Typography>
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
                                            <TextField  {...params} label="Search types" size="small" />
                                        )}
                                    />
                                </FormControl>
                            </CardContent>
                            <CardContent>
                                <Typography variant="h6" component="h6" gutterBottom>Category</Typography>
                                <FormControl fullWidth gutterBottom >
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
                            <Button variant="contained" color="error" size="large" >Cancel</Button>
                            <Button variant="contained" color="success" size="large" sx={{ ml: 1 }}>Save</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default AddProduct
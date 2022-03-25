import React, { useEffect, useState, useRef } from 'react';
import {
    Box, Button, Grid, MenuItem, Card, CardContent,
    FormControl, InputAdornment, Divider, FormControlLabel,
    Checkbox, FormHelperText, Typography, FormGroup, Select, TextField, InputBase, Container
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
import Fileupload from '../../../common/Fileupload/Fileupload';
import CustomEditor from '../../../common/CustomEditor/CustomEditor';

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
    console.log("brand: ", brand)

    const [selectedFile, setSelectedFile] = useState([])
    const [preview, setPreview] = useState([])

    const [dataVal, setData] = useState("");
    const [contentState, setcontentState] = useState()
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
    };
    const onContentStateChange = (contentState) => {
        setcontentState(draftToHtml(contentState))
        setData(draftToHtml(contentState))
    }

    const handleHtmlChange = (val) => {
        setData(val)
        const contentBlock = htmlToDraft(val);
        if (contentBlock) {
            const contentState = ContentState.createFromBlockArray(
                contentBlock.contentBlocks
            );
            const editorState = EditorState.createWithContent(contentState);
            setEditorState(editorState)
        }
    }

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

    const onSelectFile = (e) => {
        e.preventDefault()
        const fileobj = [];
        let files = Array.from(e.target.files);
        fileobj.push(files);
        let reader;
        let selectedFiles = [...selectedFile]
        for (var i = 0; i < fileobj[0].length; i++) {
            selectedFiles.push(files[i])
            setSelectedFile(selectedFiles)
            reader = new FileReader();
            reader.readAsDataURL(fileobj[0][i]);
            reader.onload = event => {
                preview.push(event.target.result);
                setPreview([...new Set(preview)]);
            }
        }
    }


    useEffect(() => {
        // console.log('files', files)
        // files.forEach(file => URL.revokeObjectURL(file.preview));

    }, [files]);
    console.log("selectedFile: ", selectedFile)
    console.log("preview: ", preview)

    return (
        <Container maxWidth="lg">
            <Box sx={{ mb: 2 }}>
                <Grid container spacing={2} columns={12}>
                    <Grid item md={6}>
                        <Button component={Link} variant="text" to="/products/list" startIcon={<ArrowBackIosIcon />}> Product </Button>
                    </Grid>
                    <Grid item md={6} sx={{ textAlign: "Right" }}></Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container spacing={2} columns={12}>
                    <Grid item md={8}>
                        <Card sx={{ mb: 2 }}>
                            <CardContent>
                                <Typography variant="h6" component="div" gutterBottom>Product title</Typography>
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
                                <Typography variant="h6" component="div" gutterBottom>Product description</Typography>
                                <CustomEditor
                                    editorState={editorState}
                                    updateTextDescription={updateTextDescription}
                                    onContentStateChange={onContentStateChange}
                                    handleHtmlChange={handleHtmlChange}
                                    value={dataVal}
                                />
                            </CardContent>
                        </Card>
                        <Card sx={{ mb: 2 }}>
                            <CardContent>
                                <Typography variant="h6" component="h6" gutterBottom>Product images</Typography>

                                <Fileupload
                                    preview={preview}
                                    onSelectFile={onSelectFile}
                                />
                                {/* <Box className="container">

                                    <Box className={`fileUploader ${files.length > 0 ? "active" : null}`}>
                                        {thumbs}
                                        <div {...getRootProps({ className: 'dropzone' })}>
                                            <input {...getInputProps()} />
                                            <p>Drag 'n' drop some files here.</p>
                                        </div>
                                    </Box>
                                </Box> */}
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
                                    {/* <Grid item xs={6}>
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
                                    </Grid> */}
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
                                        sx={{ mt: 0 }}
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
                                <Typography component="label" gutterBottom sx={{ display: "block" }}>Brands</Typography>
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
                                            <TextField {...params} label="Select or add brand" size="small" />
                                        )}
                                    />
                                </FormControl>
                            </CardContent>
                            <Divider sx={{ mt: "15px" }}></Divider>
                            <CardContent>
                                <Typography variant="h6" component="h6" gutterBottom>Product Type</Typography>
                                <Typography component="label" gutterBottom sx={{ display: "block" }}>Standard</Typography>
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
                                            <TextField  {...params} label="Select or add product type" size="small" />
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
                        <Button variant="contained" color="primary" className='float_btn' size="large" sx={{ ml: 1 }}>Save product</Button>
                    </Grid>
                    <Grid item md={12}>
                        <Divider sx={{ my: "15px" }}></Divider>
                        <Box sx={{ textAlign: "left" }}>
                            <Button variant="contained" color="error" size="large" >Cancel</Button>
                            <Button variant="contained" color="primary" size="large" sx={{ ml: 1 }}>Save product</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default AddProduct
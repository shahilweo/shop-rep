import React, { useState, useEffect } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import {
    Box, Button, Grid, ButtonGroup,
    MenuItem, Card, CardContent,
    FormControl, Divider, FormHelperText,
    Typography, Select, TextField, InputBase,
    Chip, Stack, IconButton, Menu,
} from '@mui/material';

import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { alpha } from '@mui/material/styles';
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SearchIcon from '@mui/icons-material/Search';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';


import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import bundleprod from '../../../../Assets/images/bundleprod.jpg';

import { Draggable } from "react-drag-reorder";
import { DataGrid } from '@mui/x-data-grid';
import PopupModal from '../../../PopupModal/PopupModal';
import VisibilityIcon from '@mui/icons-material/Visibility';



import htmlToDraft from "html-to-draftjs";

import { EditorState, convertToRaw, ContentState, convertFromHTML } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// text Editor


const save = (data) => {
    console.log(data);
};

const filter = createFilterOptions();

const EditProduct = () => {
    const [weight, setWeight] = useState(1);
    const [prodStatus, setProdStatus] = useState(1);
    const [media, setMedia] = useState([]);
    const [value, setValue] = useState(null);
    const [brand, setBrand] = useState(null);
    const [videourl, setVideourl] = useState();
    const [openModal, setOpenModal] = useState(false);

    const [prodOption, setprodOption] = useState([
        { optionName: "Size", optionValue: ["s", "m", "l"], edit: false },
        { optionName: "Color", optionValue: ["red", "green", "Blue"], edit: false },
    ]);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );

    const isMoreActionopen = Boolean(anchorEl);

    const updateTextDescription = async (state) => {
        await setEditorState(state);
        const data = convertToRaw(editorState.getCurrentContent());
    };


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
    const moreActonClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const moreActionClose = () => {
        setAnchorEl(null);
    };
    const ModalOpen = () => setOpenModal(true);
    const ModalClose = () => setOpenModal(false);
    const savebtnFunct = () => {
        if (videourl === "") {
            console.log("enter some Value");
        } else {

            console.log("videourl", videourl);
        }
    };
    const updateVideourl = (e) => {
        setVideourl(e.target.value)
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
            // borderRadius:"10px",
            // background: "#f7f8fa",
            margin: 0,
            [theme.breakpoints.up('md')]: {
                width: '100%',
            },
        },
    }));

    // const handleDelete = () => {
    //     console.info('You clicked the delete icon.');
    // };

    const editProdOption = (e, index) => {
        let updProdOption = []
        prodOption.map((data) => {
            return updProdOption.push({ ...data, 'edit': false })
        })

        updProdOption[index].edit = !updProdOption[index].edit
        setprodOption(updProdOption)

    };

    const closeProdOption = (e, index) => {
        let updProdOption = []
        prodOption.map((data) => {
            return updProdOption.push({ ...data })
        })

        updProdOption[index].edit = !updProdOption[index].edit
        setprodOption(updProdOption)
    }

    useEffect(() => {

        console.log("prodOption", prodOption);

    }, [prodOption]);

    const columns = [
        { field: 'id', headerName: 'Id', width: 40, sortable: false, },
        { field: 'image', headerName: 'Image', width: 80, renderCell: (params) => <img src={params.value} width="50" />, sortable: false, },
        { field: 'variant', headerName: 'Variant', width: 100, sortable: false, },
        {
            field: 'price', headerName: 'Price', sortable: false, renderCell: (params) => <TextField
                type="text"
                id="prodPrice"
                name="price"
                defaultValue={params.value}
                sx={{ m: 0, width: '100%', border: '0' }}
                size="small"
            />,
        },
        {
            field: 'quantity', headerName: 'Quantity', width: 100, sortable: false,
            renderCell: (params) => <TextField
                type="number"
                id="quantity"
                name="quantity"
                defaultValue={params.value}
                sx={{ m: 0, width: '100%', border: '0' }}
                size="small"
            />,
        },
        {
            field: 'sku', headerName: 'SKU', sortable: false, width: 200, renderCell: (params) => <TextField
                type="text"
                id="sku"
                name="sku"
                defaultValue={params.value}
                sx={{ m: 0, width: '100%', border: '0' }}
                size="small"
            />,
        },
        {
            field: 'action', headerName: 'Action', sortable: false, width: 120, renderCell: (params) =>
                <>
                    <IconButton aria-label="view" color="success"><VisibilityIcon /></IconButton>
                    <IconButton aria-label="edit" color="success"><EditIcon /></IconButton>
                    <IconButton aria-label="delete" color="error"><DeleteIcon /></IconButton>
                </>
        },

        // { field: 'fullName', headerName: 'Full name', description: 'This column has a value getter and is not sortable.',
        //     sortable: false,
        //     width: 160,
        //     valueGetter: (params) =>
        //         `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
        //     }`,
        // },

    ];

    const rows = [
        { id: 1, image: bundleprod, variant: ["s", "red"], price: "$99.99", quantity: 1, sku: "TOYS136", action: "" },
        { id: 2, image: bundleprod, variant: ["s", "red"], price: "$99.99", quantity: 2, sku: "TOYS136", action: "" },
        { id: 3, image: bundleprod, variant: ["s", "red"], price: "$99.99", quantity: 2, sku: "TOYS136", action: "" },
        { id: 4, image: bundleprod, variant: ["s", "red"], price: "$99.99", quantity: 2, sku: "TOYS136", action: "" },
        { id: 5, image: bundleprod, variant: ["s", "red"], price: "$99.99", quantity: 2, sku: "TOYS136", action: "" },
        { id: 6, image: bundleprod, variant: ["s", "m", "red"], price: "$99.99", quantity: 2, sku: "TOYS136", action: "" },
        { id: 7, image: bundleprod, variant: ["s", "red"], price: "$99.99", quantity: 2, sku: "TOYS136", action: "" },
        { id: 8, image: bundleprod, variant: ["s", "red"], price: "$99.99", quantity: 2, sku: "TOYS136", action: "" },
        { id: 9, image: bundleprod, variant: ["s", "red"], price: "$99.99", quantity: 2, sku: "TOYS136", action: "" },
        { id: 10, image: bundleprod, variant: ["s", "red"], price: "$99.99", quantity: 2, sku: "TOYS136", action: "" },
    ];

    return (
        <React.Fragment>
            <Box className="smallContainer">
                <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid item xs={6}>
                        <Button component={Link} variant="text" to="/product/all" color="success" startIcon={<ArrowBackIosIcon />}> Product </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                            <div>
                                <Button
                                    id="demo-positioned-button"
                                    aria-controls={isMoreActionopen ? "demo-positioned-menu" : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={isMoreActionopen ? "true" : undefined}
                                    onClick={moreActonClick}
                                >
                                    More actions
                                </Button>
                                <Menu
                                    id="demo-positioned-menu"
                                    aria-labelledby="demo-positioned-button"
                                    anchorEl={anchorEl}
                                    open={isMoreActionopen}
                                    onClose={moreActionClose}
                                    anchorOrigin={{
                                        vertical: "top",
                                        horizontal: "left"
                                    }}
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "left"
                                    }}
                                >
                                    <MenuItem onClick={moreActionClose}>Duplicate</MenuItem>
                                    <MenuItem onClick={moreActionClose}>View</MenuItem>
                                </Menu>
                            </div>
                            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                <Button><ArrowBackIosIcon /></Button>
                                <Button><ArrowForwardIosIcon /></Button>
                            </ButtonGroup>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Card sx={{ mb: 2 }}>
                            <CardContent>
                                <Typography variant="h6" component="div" gutterBottom>Product Title</Typography>
                                <FormControl fullWidth  >
                                    <TextField
                                        id="standard-basic"
                                        label="Title"
                                        InputLabelProps={{ shrink: true }}
                                        variant="outlined" size="small" />
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
                                                        '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????',
                                                        '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????',
                                                        '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????',
                                                        '???', '????', '????', '????', '????', '????', '???', '????', '????', '????', '????', '????', '????', '????', '????', '????',
                                                        '????', '????', '????', '????', '????', '????', '????', '???', '????', '????', '????', '????', '????', '????', '????', '????',
                                                        '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????',
                                                        '????', '????', '????', '???', '????', '????', '????', '???', '????', '????', '????', '????', '???', '????', '????', '????',
                                                        '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????',
                                                        '???', '???', '????',
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
                                <Grid container spacing={2} columns={12}>
                                    <Grid item md={6}>
                                        <Box><Typography variant="h6" component="h6" gutterBottom>Media Image</Typography></Box>
                                    </Grid>
                                    <Grid item md={6} sx={{ textAlign: "Right" }}>
                                        <Button onClick={ModalOpen}>Add media from URL</Button>
                                    </Grid>
                                </Grid>



                                <Box gutterBottom></Box>
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
                                <Typography variant="h6" component="div" gutterBottom>Options</Typography>
                                <Divider sx={{ mb: 0 }} />
                                {/* <Draggable onPosChange={getChangedPos}> */}

                                {prodOption.map((data, idx) => {
                                    return (
                                        <React.Fragment key={idx} >

                                            {data.edit ? null :
                                                <Box sx={{ textAlign: "left", m: 2, }} className="flex-item">
                                                    <Grid container spacing={2} columns={12} alignItems="center">
                                                        <Grid item md={1} sx={{ textAlign: "center" }}>
                                                            <DragIndicatorIcon />
                                                        </Grid>
                                                        <Grid item md={10}>
                                                            <Box>
                                                                <Typography variant="subtitle1" component="div" gutterBottom > {data.optionName}</Typography>
                                                            </Box>
                                                            <Box>
                                                                <Stack direction="row" spacing={1}>
                                                                    {data.optionValue.map((cntnt, indx) => {
                                                                        return (<Chip key={indx} label={cntnt} />)
                                                                    })}
                                                                </Stack>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item md={1}>
                                                            {data.edit ? null : <IconButton aria-label="edit" color="success" onClick={() => editProdOption(data, idx)}><EditIcon /></IconButton>}
                                                        </Grid>
                                                    </Grid>
                                                </Box>

                                                            }
                                            {data.edit ?
                                                <>
                                                    {/* <Divider sx={{ my: 2 }} /> */}
                                                    <Box sx={{pt: 1}}>
                                                        <Grid container spacing={2} columns={12} alignItems="center">
                                                            <Grid item md={1} sx={{ textAlign: "center" }}></Grid>
                                                            <Grid item md={10}>
                                                                <Typography variant="subtitle1" component="div" gutterBottom> Option name </Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container spacing={2} columns={12} alignItems="center">
                                                            <Grid item md={1} sx={{ textAlign: "center" }}>
                                                                <DragIndicatorIcon />
                                                            </Grid>
                                                            <Grid item md={10}>
                                                                <Box>
                                                                    <Stack direction="row" spacing={1}>
                                                                        <FormControl fullWidth sx={{ m: 0 }}>
                                                                            <TextField id="outlined-basic" defaultValue={data.optionName} variant="outlined" size="small" />
                                                                        </FormControl>
                                                                    </Stack>
                                                                </Box>
                                                            </Grid>
                                                            <Grid item md={1}>
                                                                <IconButton aria-label="edit" color="error"><DeleteIcon /></IconButton>
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                    <Box sx={{ pt: 2 }}>
                                                        <Grid container spacing={2} columns={12} alignItems="center">
                                                            <Grid item md={1} sx={{ textAlign: "center" }}></Grid>
                                                            <Grid item md={10}>
                                                                <Typography variant="subtitle1" component="div" gutterBottom > Option values </Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Draggable >
                                                            {data.optionValue.map((cntnt, indx) => {
                                                                return (
                                                                    <Grid key={indx} container spacing={2} columns={12} sx={{ mb: 1 }} alignItems="center">
                                                                        <Grid item md={1} sx={{ textAlign: "right" }}>
                                                                            <DragIndicatorIcon />
                                                                        </Grid>
                                                                        <Grid item md={10}>
                                                                            <Box>
                                                                                <Stack direction="row" spacing={1}>
                                                                                    <FormControl fullWidth sx={{ m: 0 }}>
                                                                                        <TextField id="outlined-basic" defaultValue={cntnt} variant="outlined" size="small" />
                                                                                    </FormControl>
                                                                                </Stack>
                                                                            </Box>
                                                                        </Grid>
                                                                        <Grid item md={1}>
                                                                            <IconButton aria-label="edit" color="error"><DeleteIcon /></IconButton>
                                                                        </Grid>
                                                                    </Grid>
                                                                )
                                                            })}
                                                        </Draggable>
                                                    </Box>
                                                    <Box sx={{ pt: 2 }}>
                                                        <Grid container spacing={2} columns={12} sx={{ mb: 2 }} alignItems="center">
                                                            <Grid item md={1} sx={{ textAlign: "right" }}></Grid>
                                                            <Grid item md={10}>
                                                                <Box>
                                                                    <Stack direction="row" spacing={1}>
                                                                        <FormControl fullWidth sx={{ m: 0 }}>
                                                                            <TextField id="value2" label="Add another value" variant="outlined" size="small" />
                                                                        </FormControl>
                                                                    </Stack>
                                                                </Box>
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                    <Box sx={{ pt: 2 }}>
                                                        <Grid container spacing={2} columns={12} sx={{ mb: 2 }} alignItems="center">
                                                            <Grid item md={1} sx={{ textAlign: "right" }}></Grid>
                                                            <Grid item md={10}>
                                                                <Button variant="contained" color="success" size="small" onClick={() => closeProdOption(data, idx)} >Done</Button>
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                </> : null
                                            }
                                            <Divider sx={{ my: 2 }} />
                                        </React.Fragment >
                                    );
                                })}
                                {/* </Draggable> */}
                            </CardContent>
                        </Card>
                        <Card sx={{ mb: 2 }}>
                            <CardContent>
                                <Grid container spacing={2} columns={12}>
                                    <Grid item md={6}>
                                        <Box><Typography variant="h6" component="h6" gutterBottom>Variants</Typography></Box>
                                    </Grid>
                                    <Grid item md={6} sx={{ textAlign: "Right" }}>
                                        <Button component={Link} variant="text" to="/product/all/edit-product/add-variant">Add variant</Button>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2} columns={12}>
                                    <Grid item xs={12}>
                                        <div style={{   width: '100%' }}>
                                            <DataGrid
                                                rows={rows}
                                                columns={columns}
                                                pageSize={5}
                                                rowsPerPageOptions={[5]}
                                                checkboxSelection
                                                disableSelectionOnClick
                                                rowHeight={80}
                                                autoHeight={true}
                                            />
                                        </div>
                                    </Grid>
                                </Grid>

                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ mb: 2 }}>
                            <CardContent>
                                <Typography variant="h6" component="h6" gutterBottom>Product status</Typography>
                                <FormControl fullWidth  >
                                    <Select
                                        labelId="ProductStatus"
                                        id="productStatus"
                                        value={prodStatus}
                                        onChange={handleChangeproductStat} 
                                        size="small" >
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
                                <Typography component="label" sx={{ mb: "10px !important", display: "block" }}>Brands</Typography>
                                <FormControl fullWidth sx={{ m: 0 }}>
                                    <Autocomplete
                                        value={brand}
                                        size="small"
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
                                <Typography variant="h6" component="h6" gutterBottom>Product Type</Typography>
                                <Typography component="label" sx={{ mb: "10px !important", display: "block" }}>Standard</Typography>
                                <FormControl fullWidth sx={{ m: 0 }}>
                                    <Autocomplete
                                        value={value}
                                        size="small"
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
                                <Typography variant="h6" component="h6" gutterBottom>Category</Typography>
                                <FormControl fullWidth   >
                                    <Search>
                                        <SearchIconWrapper>
                                            <SearchIcon color="grey" />
                                        </SearchIconWrapper>
                                        <StyledInputBase
                                            placeholder="Search???"
                                            inputProps={{ 'aria-label': 'search' }}
                                            sx={{ display: "flex" }}
                                        />
                                    </Search>
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
            </Box>
            <PopupModal
                open={openModal}
                ModalClose={ModalClose}
                title="Add file from URL"
                cancelbtn={true}
                cancelbtnTxt="Cancel"
                savebtn={true}
                savebtnTxt="Add File"
                savebtnFunct={savebtnFunct}
            >
                <TextField onChange={(data) => updateVideourl(data)} fullWidth label="Image, YouTube, or Vimeo URL" id="fullWidth" size="small" />
            </PopupModal>
        </React.Fragment>
    );
}

export default EditProduct
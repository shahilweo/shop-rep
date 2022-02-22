import React, { useState } from "react";
import { Card, CardContent, ListItem, ListItemButton, ListItemIcon, ListItemText, Slider, Typography, CardMedia, CardActions, Button, TextField, Divider, FormGroup, FormControlLabel, Checkbox, RadioGroup, Radio, FormControl, Grid, IconButton, Input, ImageList, ImageListItem, ImageListItemBar, InputLabel, Select, MenuItem, Link } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Box } from "@mui/system";
import EditIcon from '@mui/icons-material/Edit';
import { ColorPicker } from 'material-ui-color';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { PhotoCamera } from "@material-ui/icons";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CheckIcon from '@mui/icons-material/Check';

function rangeValue(value, unit) {
    return `${value} ${unit}`;
}

function handleColorChange(id, val) {

}
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
        title: 'Bed',
        current: true
    },
    {
        img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
        title: 'Books',
    },
    {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title: 'Sink',
    },
    {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title: 'Kitchen',
    },
    {
        img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
        title: 'Blinds',
    },
    {
        img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
        title: 'Chairs',
    },
    {
        img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
        title: 'Laptop',
    },
    {
        img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
        title: 'Doors',
    },
    {
        img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
        title: 'Storage',
    },
    {
        img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
        title: 'Candle',
    },
    {
        img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
        title: 'Coffee table',
    },
];

export const drawerWidth = 240;

export const renderFn = (data) => {
    if (data.type === "heading") {
        return (
            <Typography variant="button" component="div" sx={{ mb: 1, pb: 0.5, borderBottom: "#eee 1px solid" }}>
                {data.text}
            </Typography>
        )
    }
    if (data.type === "font_family") {
        return (
            <Box sx={{ mb: 3 }}>
                <Typography variant="caption" component="block" sx={{ pb: 1, display: "block" }}>
                    {data.label}
                </Typography>
                <Box sx={{ border: '1px solid #eee' }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary={data.value} />
                            <ListItemIcon>
                                <EditIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </Box>
            </Box>
        )
    }
    if (data.type === "range") {
        return (
            <Box sx={{ mb: 3 }}>
                <Typography variant="caption" component="block" sx={{ pb: 1, display: "block" }}>
                    {data.label}
                </Typography>
                <Box sx={{ px: 2 }}>
                    <Slider
                        aria-label={data.label}
                        defaultValue={data.value}
                        getAriaValueText={(val) => rangeValue(val, data.unit)}
                        valueLabelFormat={(val) => rangeValue(val, data.unit)}
                        step={data.step}
                        marks
                        min={data.min}
                        max={data.max}
                        valueLabelDisplay="auto"
                    />
                </Box>
            </Box>
        )
    }
    if (data.type === "color_picker") {
        return (
            <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                <ColorPicker value={data.value} hideTextfield onChange={val => handleColorChange(data.id, val)} disableAlpha />
                <Box sx={{ ml: 1 }}>
                    <Typography variant="caption" gutterBottom component="block">
                        {data.label}<br />
                        {data.value}
                    </Typography>
                </Box>
            </Box>
        )
    }
    if (data.type === "image_file") {
        const showUploader = (id) => {
            document.getElementById(id).classList.add("active")
        }
        const backToImage = (id) => {
            document.getElementById(id).classList.remove("active")
        }
        const Input = styled('input')({
            display: 'none',
        });
        return (
            <Box sx={{ mb: 3 }}>
                <Box id={data.id} className="uploader_outer">
                    <Card sx={{ py: 1 }} className="pre_uploader">
                        <CardMedia
                            component="img"
                            width={data.width}
                            image={data.value}
                            alt={data.alt}
                            sx={{ maxHeight: data.height, objectFit: "contain" }}
                        />
                        <Divider sx={{ pt: 1, mb: 0 }} />
                        <CardContent sx={{ pt: 1 }}>
                            {data.note !== "" &&
                                <Typography variant="caption" component="div" sx={{ mb: 1 }}>
                                    <i>{data.note}</i>
                                </Typography>
                            }
                            <TextField
                                label="Alt text"
                                defaultValue={data.alt}
                                variant="standard"
                                fullWidth
                                size="small"
                            />
                        </CardContent>
                        <CardActions sx={{ px: 2 }}>
                            <Button fullWidth variant="contained" onClick={() => showUploader(data.id)}>Change</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ p: 2 }} className="post_uploader">
                        <Button startIcon={<ArrowBackIcon />} onClick={() => backToImage(data.id)}>
                            Back
                        </Button>
                        <Divider sx={{ pt: 1, mb: 1 }} />
                        <Box sx={{ border: "#ccc 2px dashed", textAlign: 'center', p: 1, cursor: 'pointer' }}>
                            <label htmlFor={`img_${data.id}`}>
                                <Input accept="image/*" id={`img_${data.id}`} type="file" />
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera />
                                </IconButton>
                                <Typography variant="p" gutterBottom component="div">
                                    Upload new
                                </Typography>
                            </label>
                        </Box>
                        <Box sx={{ width: '100%', height: 250, overflowY: 'scroll', my: 1 }}>
                            <ImageList variant="masonry" cols={3} gap={4} sx={{ mt: 0 }}>
                                {itemData.map((item) => (
                                    <ImageListItem key={item.img}>
                                        <img
                                            src={`${item.img}?w=248&fit=crop&auto=format`}
                                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                        {item.current &&
                                            <ImageListItemBar
                                                actionIcon={
                                                    <IconButton
                                                        sx={{ color: '#fff', p: 0 }}
                                                        aria-label={`info about ${item.title}`}
                                                    >
                                                        <CheckIcon />
                                                    </IconButton>
                                                }
                                            />
                                        }
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: "end", width: "100%" }}>
                            <Button variant="contained">
                                Done
                            </Button>
                        </Box>
                    </Card>
                </Box>
            </Box>
        )
    }
    if (data.type === "checkbox") {
        return (
            <FormGroup>
                <FormControlLabel control={<Checkbox checked={data.value} />} label={data.label} />
            </FormGroup>
        )
    }
    if (data.type === "radio") {
        return (
            <FormControl>
                <RadioGroup
                    aria-labelledby={data.id}
                    name={data.name}
                    value={data.value}
                >
                    <FormControlLabel value={data.value} control={<Radio checked={data.value} />} label={data.label} />
                </RadioGroup>
            </FormControl>
        )
    }
    if (data.type === "text" || data.type === "number") {
        return (
            <TextField
                label={data.label}
                defaultValue={data.value}
                variant="standard"
                fullWidth
                type={data.type}
                size="small"
                name={data.id}
                placeholder={data.placeholder}
                sx={{ mb: 2 }}
            />
        )
    }
    if (data.type === "select") {
        return (
            <FormControl fullWidth>
                <Select
                    id={data.id}
                    value={data.current}
                    label={data.label}
                    size="small"
                >
                    {data.items.length > 0 && data.items.map((val, index) => {
                        return (
                            <MenuItem value={val.value} key={index.toString()}>{val.name}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        )
    }
    if (data.type === "nav_list") {
        return (
            <Link href={data.current.link} underline="hover" sx={{pb:2, display: "block"}}>
                {data.current.name} <OpenInNewIcon fontSize="inherit" sx={{verticalAlign: 'middle'}} />
            </Link>
        )
    }
    if (data.type === "header") {
        return (
            <Typography variant="button" component="div" sx={{ mb: 1, pb: 0.5, borderBottom: "#eee 1px solid" }}>
                {/* {data.text} */}
            </Typography>
        )
    }
}
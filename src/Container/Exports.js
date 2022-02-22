import React, { useState } from "react";
import { Card, CardContent, ListItem, ListItemButton, ListItemIcon, ListItemText, Slider, Typography, CardMedia, CardActions, Button, TextField, Divider, FormGroup, FormControlLabel, Checkbox, RadioGroup, Radio, FormControl, Grid, IconButton, Input, ImageList, ImageListItem, ImageListItemBar, InputLabel, Select, MenuItem, Link, List } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Box } from "@mui/system";
import EditIcon from '@mui/icons-material/Edit';
import { ColorPicker } from 'material-ui-color';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { PhotoCamera } from "@material-ui/icons";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CheckIcon from '@mui/icons-material/Check';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import ImagePicker from "../Components/ThemeEditor/Layout/Sidebar/Components/ImagePicker";
import SlideSettings from "../Components/ThemeEditor/Layout/Sidebar/Components/SlideSettings";

function rangeValue(value, unit) {
    return `${value} ${unit}`;
}

function handleColorChange(id, val) {

}

export const drawerWidth = 240;

export const renderFn = (data) => {
    if (data.type === "heading") {
        return (
            <Typography variant="button" component="div" sx={{ mb: 2, pb: 0.5, borderBottom: "#eee 1px solid" }}>
                {data.text}
            </Typography>
        )
    }
    if (data.type === "font_family") {
        return (
            <Box sx={{ mb: 3 }}>
                <Typography variant="caption" component="div" sx={{ pb: 1, display: "block" }}>
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
                <Typography variant="caption" component="div" sx={{ pb: 1, display: "block" }}>
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
                    <Typography variant="caption" gutterBottom component="div">
                        {data.label}<br />
                        {data.value}
                    </Typography>
                </Box>
            </Box>
        )
    }
    if (data.type === "image_file") {
        return (
            <ImagePicker
                data={data}
            />
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
                variant="outlined"
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
                {data.label !== "" &&
                    <InputLabel>{data.label}</InputLabel>
                }
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
            <Link href={data.current.link} underline="hover" sx={{ pb: 2, display: "block" }}>
                {data.current.name} <OpenInNewIcon fontSize="inherit" sx={{ verticalAlign: 'middle' }} />
            </Link>
        )
    }
    if (data.type === "divider") {
        return (
            <Divider sx={{ my: 2 }} />
        )
    }
    if (data.type === "slide_item") {
        let array = []
        for (let i = 1; i <= data.length; i++) {
            array.push(i)
        }
        return (
            <List sx={{ m: 0, p: 0 }}>
                {array.map((opt, index) => {
                    return (
                        <ListItem disablePadding key={index.toString()}>
                            <ListItemButton sx={{ p: 0.5, borderBottom: '#eee 1px solid' }}>
                                <ListItemIcon sx={{ minWidth: "30px" }}>
                                    <DragIndicatorIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={`${data.label} ${opt}`} />
                                <ListItemIcon>
                                    <EditIcon fontSize="inherit" />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
        )
    }
    if (data.type === "slide_settings") {
        return (
            <SlideSettings />
        )
    }
}
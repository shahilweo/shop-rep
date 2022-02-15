import React from "react";
import { Card, CardContent, ListItem, ListItemButton, ListItemIcon, ListItemText, Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import EditIcon from '@mui/icons-material/Edit';
import { ColorPicker } from 'material-ui-color';

function rangeValue(value) {
    return `${value}`;
}

function handleColorChange(id, val) {

}

export const drawerWidth = 240;

export const renderFn = (data) => {
    if (data.type === "heading") {
        return (
            <Typography variant="p" gutterBottom component="div" sx={{ mb: 1, pb: 1, borderBottom: "#eee 1px solid" }}>
                {data.text}
            </Typography>
        )
    }
    if (data.type === "font_family") {
        return (
            <Box sx={{ mb: 3 }}>
                <Typography variant="p" gutterBottom component="small" sx={{ pb: 1, display: "block" }}>
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
                <Typography variant="p" gutterBottom component="small" sx={{ pb: 1, display: "block" }}>
                    {data.label}
                </Typography>
                <Box>
                    <Slider
                        aria-label={data.label}
                        defaultValue={data.value}
                        getAriaValueText={rangeValue}
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
                <Box sx={{ml:1}}>
                    <Typography variant="p" gutterBottom component="small">
                        {data.label}<br />
                        {data.value}
                    </Typography>
                </Box>
            </Box>
        )
    }
}
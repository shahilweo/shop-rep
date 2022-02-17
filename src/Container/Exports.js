import React from "react";
import { Card, CardContent, ListItem, ListItemButton, ListItemIcon, ListItemText, Slider, Typography, CardMedia, CardActions, Button, TextField, Divider, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
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
        return (
            <Box sx={{ mb: 3 }}>
                <Typography variant="caption" gutterBottom component="block" sx={{ pb: 1, display: "block" }}>
                    {data.label}
                </Typography>
                <Card sx={{ py: 1 }}>
                    <CardMedia
                        component="img"
                        width={data.width}
                        image={data.value}
                        alt={data.alt}
                        sx={{ maxHeight: data.height, objectFit: "contain" }}
                    />
                    <Divider sx={{ pt: 1, mb: 0 }} />
                    <CardContent>
                        <Typography variant="caption" component="div" sx={{ mb: 1 }}>
                            <i>{data.note}</i>
                        </Typography>
                        <TextField
                            label="Alt text"
                            defaultValue={data.alt}
                            variant="standard"
                            fullWidth
                            size="small"
                        />
                    </CardContent>
                    <CardActions sx={{ px: 2 }}>
                        <Button fullWidth variant="contained">Change</Button>
                    </CardActions>
                </Card>
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
    if (data.type === "text") {
        return (
            <TextField
                label={data.label}
                defaultValue={data.value}
                variant="standard"
                fullWidth
                size="small"
                name={data.id}
                placeholder={data.placeholder}
                sx={{ mb: 2 }}
            />
        )
    }
}
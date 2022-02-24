import React from "react";
import { Box, Typography } from "@mui/material";
import { ColorPicker } from 'material-ui-color';

export default function Colors({ data, handleColorChange }) {
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
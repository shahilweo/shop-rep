import React from "react";
import { Box, Slider, Typography } from "@mui/material";

export default function RangeSlider({ data, rangeValue }) {
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
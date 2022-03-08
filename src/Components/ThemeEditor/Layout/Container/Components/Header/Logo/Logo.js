import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

export default function Logo({ image, width }) {
    return (
        <Box sx={{ width: '100%' }}>
            <img src={image} alt={'Logo'} style={{ width: width }} />
        </Box>
    )
}
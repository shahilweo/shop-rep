import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

export default function Logo({logo}) {
    return (
        <Box sx={{ width: '100%' }}>
            <img src={logo.logo_image} alt={logo.logo_alt} style={{maxWidth: logo.logo_width}} />
        </Box>
    )
}
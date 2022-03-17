import { Box } from "@mui/system";
import React from "react";

export default function Logo({ image, width }) {
    return (
        <Box sx={{ width: '100%' }}>
            <img src={image} alt={'Logo'} style={{ width: width }} />
        </Box>
    )
}
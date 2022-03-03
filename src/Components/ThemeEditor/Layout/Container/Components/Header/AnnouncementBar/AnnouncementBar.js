import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

export default function AnnouncementBar({ data }) {
    return (
        <Box sx={{ backgroundColor: data.bar_color }}>
            <Link to={data.link} style={{ textDecoration: 'none', color: data.text_color, padding: 15, display: 'block' }}>
                <Typography variant="p" component="div" sx={{ textAlign: 'center' }}>
                    {data.text}
                </Typography>
            </Link>
        </Box>
    )
}
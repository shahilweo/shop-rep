import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

export default function AnnouncementBar({ data }) {
    return (
        <>
            {data && data.show_announcement &&
                <Box sx={{ backgroundColor: data && data.bar_color }}>
                    <Link to={data && data.announcement_link} style={{ textDecoration: 'none', color: data && data.bar_text_color, padding: 15, display: 'block' }}>
                        <Typography variant="p" component="div" sx={{ textAlign: 'center' }}>
                            {data && data.announcement_text}
                        </Typography>
                    </Link>
                </Box>
            }
        </>
    )
}
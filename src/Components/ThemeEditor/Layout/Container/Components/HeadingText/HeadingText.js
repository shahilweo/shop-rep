import { Grid, Typography } from "@mui/material";
import React from "react";

export default function HeadingText({ data }) {
    return (
        <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item sm={12} md={data.container_width || 12} >
                <Typography variant={`${data.size === "large" ? "h2" : data.size === "medium" ? "h3" : "h4"}`} component="div" sx={{ textAlign: 'center', mb: 2 }}>
                    {data.heading}
                </Typography>
                {data.subheading &&
                    <Typography variant="p" component="div" sx={{ textAlign: 'center', mb: 2 }}>
                        {data.subheading}
                    </Typography>
                }
            </Grid>
        </Grid>
    )
}
import React from "react";
import { Typography } from "@mui/material";

export default function Heading({ data }) {
    return (
        <Typography variant="button" component="div" sx={{ mb: 1, pb: 0.5, borderBottom: "#eee 1px solid" }}>
            {data.text}
        </Typography>
    )
}
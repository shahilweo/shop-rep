import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

export default function NavBar() {
    const [nav, setNav] = useState([
        { label: "Home", link: "", slug: "home" },
        { label: "Clothing", link: "", slug: "clothing" },
        { label: "Accessories", link: "", slug: "accessories" },
        { label: "Blog", link: "", slug: "blog" },
    ])
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container justifyContent="center" spacing={2}>
                {nav.length > 0 && nav.map((opt, index) => {
                    return (
                        <Grid item key={index.toString()}>
                            <Button variant="text" color="secondary">{opt.label}</Button>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}
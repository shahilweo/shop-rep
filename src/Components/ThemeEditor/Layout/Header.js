import React, { useState } from "react";
import { Button, Divider, FormControl, Grid, MenuItem, Paper, Select } from "@mui/material";
import { Box } from "@mui/system";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function LayoutHeader() {
    const pages = [
        { name: "Home page", value: "home" },
        { name: "Product page", value: "product" },
        { name: "Category page", value: "category" },
        { name: "Category List page", value: "category_list" },
    ]
    const [current, setCurrent] = useState("home")
    const handleChange = (e) => {
        setCurrent(e.target.value)
    }
    return (
        <Paper elevation={3} sx={{ borderRadius: "0", position: "relative", zIndex: 9 }}>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ flexWrap: "nowrap", p: 1 }}
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="start"
                    alignItems="center"
                    sx={{ flexWrap: "nowrap", p: 1 }}
                >
                    <Button startIcon={<ArrowBackIcon />}>
                        Exit
                    </Button>
                    <Divider orientation="vertical" flexItem />
                    <FormControl fullWidth variant="standard" sx={{ ml: 5, width: 300 }}>
                        <Select
                            labelId="current-page"
                            onChange={handleChange}
                            value={current}
                            id="current-page-id"
                        >
                            {pages.map((page, index) => {
                                return (
                                    <MenuItem key={index.toString()} sx={{ fontSize: "14px" }} value={page.value}>{page.name}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid
                    container
                    direction="row"
                    justifyContent="end"
                    alignItems="center"
                    sx={{ flexWrap: "nowrap", whiteSpace: 'nowrap' }}
                >
                    <Button variant="outlined" color="error">Reset</Button>
                    <Button variant="contained" sx={{ mx: 3 }}>Save</Button>
                </Grid>
            </Grid>
        </Paper>
    )
}
import React from "react";
import { Button, Divider, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function LayoutHeader() {
    return (
        <Paper elevation={3} sx={{ borderRadius: "0" }}>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ flexWrap: "nowrap", p: 1 }}
            >
                <Box>
                    <Button startIcon={<ArrowBackIcon />}>
                        Exit
                    </Button>
                    <Divider orientation="vertical" flexItem />
                </Box>

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
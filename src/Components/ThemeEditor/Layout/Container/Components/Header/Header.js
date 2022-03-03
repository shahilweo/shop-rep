import { Box, Container, Grid } from "@mui/material";
import React from "react";
import schema from "../../../../../../Container/schema";
import HeaderCart from "./HeaderCart/HeaderCart";
import Logo from "./Logo/Logo";
import NavBar from "./Navbar/NavBar";

export default function Header({ data }) {
    return (
        <Box sx={{py:3}}>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Logo logo={data.logo} />
                    </Grid>
                    <Grid item xs={8}>
                        <NavBar />
                    </Grid>
                    <Grid item xs={2}>
                        <HeaderCart />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
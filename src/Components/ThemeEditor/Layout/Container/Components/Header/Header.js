import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import schema from "../../../../../../Container/schema";
import AnnouncementBar from "./AnnouncementBar/AnnouncementBar";
import HeaderCart from "./HeaderCart/HeaderCart";
import Logo from "./Logo/Logo";
import NavBar from "./Navbar/NavBar";

export default function Header({ data }) {
    const logo = useSelector((state) => state.logo)
    const announcement = useSelector((state) => state)
    console.log("announcement: ", announcement)
    return (
        <Box>
            {/* <AnnouncementBar
                data={announcement}
            />
            <Box sx={{ py: 3 }}>
                <Container maxWidth="lg">
                    {logo && logo.value === "left" ?
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={2}>
                                <Logo image={logo && logo.image} width={logo && logo.width} />
                            </Grid>
                            <Grid item xs={8}>
                                <NavBar />
                            </Grid>
                            <Grid item xs={2}>
                                <Grid container spacing={0} justifyContent="flex-end">
                                    <Grid item xs={'auto'}>
                                        <HeaderCart
                                            data={data}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        :
                        <>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                </Grid>
                                <Grid item xs={4} sx={{ textAlign: 'center' }}>
                                    <Logo image={logo && logo.image} width={logo && logo.width} />
                                </Grid>
                                <Grid item xs={4}>
                                    <Grid container spacing={0} justifyContent="flex-end">
                                        <Grid item xs={'auto'}>
                                            <HeaderCart
                                                data={data}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <NavBar />
                        </>
                    }
                </Container>
            </Box> */}
        </Box>
    )
}
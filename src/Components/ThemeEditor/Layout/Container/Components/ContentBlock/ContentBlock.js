import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HeadingText from "../HeadingText/HeadingText";

export default function ContentBlock({ data }) {
    return (
        <Box sx={{ py: 5 }}>
            <Container maxWidth="lg">
                <HeadingText
                    data={data}
                />
                <Grid container spacing={4} alignItems={data.alignment === "top" ? "flex-start" : data.alignment === "bottom" ? "flex-end" : 'center'}>
                    <Grid item sm={12} md={6} >
                        <img src={data.image.src} alt={data.image.alt} className="img-fluid" />
                    </Grid>
                    <Grid item sm={12} md={6} >
                        <Typography variant="h4" component="div" sx={{ mb: 2 }}>
                            {data.content.heading}
                        </Typography>
                        <Typography variant="p" component="div" sx={{ mb: 2 }}>
                            {data.content.paragraph}
                        </Typography>
                        <Button variant="contained" size="large" href={data.content.button_link}>{data.content.button_label}</Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
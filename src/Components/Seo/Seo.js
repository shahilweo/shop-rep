import React from 'react'
import {
    Typography, Divider, TextField, FormControl,
    FormHelperText, Grid, Box, Link,
} from '@mui/material';

export default function Seo() {
    return <>


        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Box><Typography variant="h6" component="h6" sx={{ marginBottom: "15px !important" }}>Search engine listing preview</Typography></Box>
            </Grid>
            <Grid item xs={4}>
                <Box sx={{ textAlign: "right" }}>  
                     <Link href="#" underline="none" color="info" >Edit website SEO</Link>
                </Box>
            </Grid>

        </Grid>


        <Typography variant="body1" gutterBottom>  Add a title and description to see how this product might appear in a search engine listing</Typography>
        <Divider sx={{ my: "15px" }}></Divider>
        <FormControl fullWidth sx={{ mb: 2 }}>
            <TextField
                label="Page title"
                type="text"
                id="seoTitle"
                sx={{ m: 0, }}
            />
            <FormHelperText >0 of 70 characters used</FormHelperText>
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
            <TextField
                label="Description"
                type="text"
                id="seoDescription"
                sx={{ m: 0, }}
            />
            <FormHelperText >0 of 320 characters used</FormHelperText>
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
            <TextField
                label="URL and handle"
                type="text"
                id="seoDescription"
                sx={{ m: 0, }}
            />
        </FormControl>
    </>;
}

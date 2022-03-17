
import React, { useEffect, useState } from "react";
import { Box, FormControl, InputLabel, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Select, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

export default function FontFamily({ data }) {
    const [fonts, setFonts] = useState({
        items: []
    })
    const [fontId, setFontId] = useState("")
    useEffect(async () => {
        await fetch("https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=AIzaSyAji20_I9xPY6CwPxvMZalrEGkWN1DYQc4")
            .then(res => res.json())
            .then(
                (result) => {
                    setFonts(result);
                },
                (error) => {
                    alert(error)
                }
            )
    }, [])
    const showFonts = (id) => {
        setFontId(fontId === id ? "" : id)
    }
    return (
        <Box sx={{ mb: 3 }}>
            <Typography variant="caption" component="div" sx={{ pb: 1, display: "block" }}>
                {data.label}
            </Typography>
            <Box sx={{ border: '1px solid #eee' }}>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => showFonts(data.id)}>
                        <ListItemText primary={data.value} />
                        <ListItemIcon>
                            <EditIcon />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                {fonts.items.length > 0 && fontId === data.id &&
                    <FormControl fullWidth sx={{ my: 2 }}>
                        <InputLabel>Google Fonts</InputLabel>
                        <Select
                            id={data.id}
                            value={data.value}
                            label={data.label}
                        >
                            {(fonts.items).slice(0, 10).map((val, index) => {
                                return (
                                    <MenuItem value={val.family} key={index.toString()}>{val.family}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                }
            </Box>
        </Box>
    )
}
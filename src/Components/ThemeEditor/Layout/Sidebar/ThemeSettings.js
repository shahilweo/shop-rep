import React from "react";
import { Button, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import schema from "../../../../Container/schema";
import _ from "underscore";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom'

export default function ThemeSettings({clickBlock}) {
    const navigate = useNavigate()
    let list = []
    _.each(schema.theme, (val, key) => {
        list.push({ 'name': key, 'data': val })
    })

    return (
        <List sx={{ width: "100%" }}
            component="nav"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader" sx={{backgroundColor: "#f9f9f9"}}>
                    <Button startIcon={<ArrowBackIcon />} sx={{px: 0}} onClick={() => navigate(-1)}>
                        Theme settings
                    </Button>
                    <Divider flexItem />
                </ListSubheader>
            }
        >
            {list.length > 0 && list.map((opt, index) => {
                return (
                    <ListItem disablePadding key={index.toString()}>
                        <ListItemButton onClick={()=>clickBlock(opt.name)}>
                            <ListItemText primary={opt.data.name} />
                            <ListItemIcon>
                                <NavigateNextIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                )
            })}
        </List>
    )
}
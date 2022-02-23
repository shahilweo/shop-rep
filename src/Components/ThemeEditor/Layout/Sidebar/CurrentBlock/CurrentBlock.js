import React from "react";
import schema from "../../../../../Container/schema";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

export default function CurrentBlock({openSection}) {
    return (
        <>
            {schema.active.blocks.length > 0 && schema.active.blocks.map((opt, index) => {
                let activeName = schema.components[opt].name
                return (
                    <ListItem disablePadding key={index.toString()}>
                        <ListItemButton onClick={() => openSection(opt)} sx={{px: 0}}>
                            <ListItemIcon sx={{minWidth: '25px'}}>
                                <DragIndicatorIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={activeName} />
                        </ListItemButton>
                    </ListItem>
                )
            })}
        </>
    )
}
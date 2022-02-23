import React, { useEffect, useState } from "react";
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Slider, Typography, TextField, Divider, FormGroup, FormControlLabel, Checkbox, RadioGroup, Radio, FormControl, InputLabel, Select, MenuItem, Link, List, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate, useLocation } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import { ColorPicker } from 'material-ui-color';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import ImagePicker from "../Components/ThemeEditor/Layout/Sidebar/Components/ImagePicker";
import SlideSettings from "../Components/ThemeEditor/Layout/Sidebar/Components/SlideSettings";
import TextFields from "../Components/ThemeEditor/Layout/Sidebar/Components/TextField";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


export const drawerWidth = 240;

export default function RenderFn({ data }) {
    const navigate = useNavigate()
    const location = useLocation()
    const params = new URLSearchParams(window.location.search)
    const [array, setArray] = useState([])
    function rangeValue(value, unit) {
        return `${value} ${unit}`;
    }

    function handleColorChange(id, val) {

    }
    const editItem = (id) => {
        if (params.get("slide") && params.get("slide").toString() !== id.toString()) {
            params.set('slide', id)
        } else if (params.get("slide") && params.get("slide").toString() === id.toString()) {
            params.delete("slide")
        } else {
            params.append("slide", id)
        }
        const to = { pathname: location.pathname, search: params.toString() };
        navigate(to, { replace: true });
    }

    useEffect(() => {
        if (data.type === "slide_item") {
            console.log("data.type: ", data.type)
            let arr = []
            for (let i = 1; i <= data.length; i++) {
                arr.push(i)
            }
            setArray(arr)
        }
    }, [data])
    return (
        <>
            {data.type === "heading" &&
                <Typography variant="button" component="div" sx={{ mb: 2, pb: 0.5, borderBottom: "#eee 1px solid" }}>
                    {data.text}
                </Typography>
            }
            {data.type === "font_family" &&
                <Box sx={{ mb: 3 }}>
                    <Typography variant="caption" component="div" sx={{ pb: 1, display: "block" }}>
                        {data.label}
                    </Typography>
                    <Box sx={{ border: '1px solid #eee' }}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary={data.value} />
                                <ListItemIcon>
                                    <EditIcon />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    </Box>
                </Box>
            }
            {data.type === "range" &&
                <Box sx={{ mb: 3 }}>
                    <Typography variant="caption" component="div" sx={{ pb: 1, display: "block" }}>
                        {data.label}
                    </Typography>
                    <Box sx={{ px: 2 }}>
                        <Slider
                            aria-label={data.label}
                            defaultValue={data.value}
                            getAriaValueText={(val) => rangeValue(val, data.unit)}
                            valueLabelFormat={(val) => rangeValue(val, data.unit)}
                            step={data.step}
                            marks
                            min={data.min}
                            max={data.max}
                            valueLabelDisplay="auto"
                        />
                    </Box>
                </Box>
            }
            {data.type === "color_picker" &&
                <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                    <ColorPicker value={data.value} hideTextfield onChange={val => handleColorChange(data.id, val)} disableAlpha />
                    <Box sx={{ ml: 1 }}>
                        <Typography variant="caption" gutterBottom component="div">
                            {data.label}<br />
                            {data.value}
                        </Typography>
                    </Box>
                </Box>
            }
            {data.type === "image_file" &&
                <ImagePicker
                    data={data}
                />
            }
            {data.type === "checkbox" &&
                <FormGroup>
                    <FormControlLabel control={<Checkbox checked={data.value} />} label={data.label} />
                </FormGroup>
            }
            {data.type === "radio" &&
                <FormControl>
                    <RadioGroup
                        aria-labelledby={data.id}
                        name={data.name}
                        value={data.value}
                    >
                        <FormControlLabel value={data.value} control={<Radio checked={data.value} />} label={data.label} />
                    </RadioGroup>
                </FormControl>
            }
            {data.type === "text" || data.type === "number" ?
                <TextFields
                    data={data}
                /> : null
            }
            {data.type === "select" &&
                <FormControl fullWidth>
                    {data.label !== "" &&
                        <InputLabel>{data.label}</InputLabel>
                    }
                    <Select
                        id={data.id}
                        value={data.current}
                        label={data.label}
                        size="small"
                    >
                        {data.items.length > 0 && data.items.map((val, index) => {
                            return (
                                <MenuItem value={val.value} key={index.toString()}>{val.name}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            }
            {data.type === "nav_list" &&
                <Link href={data.current.link} underline="hover" sx={{ pb: 2, display: "block" }}>
                    {data.current.name} <OpenInNewIcon fontSize="inherit" sx={{ verticalAlign: 'middle' }} />
                </Link>
            }
            {data.type === "divider" &&
                <Divider sx={{ my: 2 }} />
            }
            {data.type === "slide_item" &&
                <>
                    <List sx={{ m: 0, p: 0 }}>
                        {array.map((opt, index) => {
                            return (
                                <>
                                    <ListItem disablePadding key={index.toString()}>
                                        <ListItemButton sx={{ p: 0.5, borderBottom: '#eee 1px solid' }} onClick={() => editItem(opt)}>
                                            <ListItemIcon sx={{ minWidth: "30px" }}>
                                                <DragIndicatorIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={`${data.label} ${opt}`} />
                                            <ListItemIcon>
                                                <EditIcon fontSize="inherit" />
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </ListItem>
                                    {params.get('slide') === opt.toString() &&
                                        <SlideSettings
                                            id={opt}
                                        />
                                    }
                                </>
                            )
                        })}
                        <ListItem disablePadding>
                            <ListItemButton sx={{ p: 0.5, borderBottom: '#eee 1px solid' }}>
                                <ListItemIcon sx={{ minWidth: "30px" }}>
                                    <AddCircleOutlineIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Add new" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </>
            }
        </>
    )
}
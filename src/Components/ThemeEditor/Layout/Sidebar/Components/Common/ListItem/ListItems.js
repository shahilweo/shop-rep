import React, { useEffect, useState } from "react"
import { useNavigate, useLocation } from 'react-router-dom'
import { ListItem, ListItemButton, ListItemIcon, ListItemText, List } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SlideSettings from "../Slider/SlideSettings";
import ListItemDetail from "./ListItemDetail";
import GalleryEdit from "../Gallery/GalleryEdit";
import BrandEdit from "../BrandList/BrandEdit";
import TestimonialtestimonialSettings from "../Testimonials/TestimonialSlideSettings";
import { renderImport } from "../../../../../../../Container/Exports";

export default function ListItems({ data }) {
    const navigate = useNavigate()
    const location = useLocation()
    const params = new URLSearchParams(window.location.search)
    const [array, setArray] = useState([])
    const editItem = (id) => {
        let pageType = ""
        if (params.get('type') === "hero_slider") {
            pageType = "slide"
        } else if (params.get('type') === "text_column_with_image" || params.get('type') === "gallery") {
            pageType = "column"
        } else if (params.get('type') === "brands_list") {
            pageType = "brand"
        } else if (params.get('type') === "testimonials") {
            pageType = "testimonial"
        }

        if (params.get(pageType) && params.get(pageType).toString() !== id.toString()) {
            params.set(pageType, id)
        } else if (params.get(pageType) && params.get(pageType).toString() === id.toString()) {
            params.delete(pageType)
        } else {
            params.append(pageType, id)
        }
        const to = { pathname: location.pathname, search: params.toString() };
        navigate(to, { replace: true });
    }
    useEffect(() => {
        let arr = []
        for (let i = 1; i <= data.length; i++) {
            arr.push(i)
        }
        setArray(arr)
    }, [data])
    return (
        <List sx={{ m: 0, p: 0 }}>
            {array.map((opt, index) => {
                return (
                    <React.Fragment key={index.toString()}>
                        <ListItem disablePadding className={params.get('slide') === opt.toString() || params.get('column') === opt.toString() ? "active_item" : ""}>
                            <ListItemButton sx={{ p: 0.5, borderBottom: '#eee 1px solid' }}>
                                <ListItemIcon sx={{ minWidth: "30px" }}>
                                    <DragIndicatorIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={`${data.label} ${opt}`} />
                                <ListItemIcon>
                                    <EditIcon fontSize="inherit" sx={{ minWidth: "30px" }} onClick={() => editItem(opt)} />
                                    <DeleteIcon fontSize="inherit" sx={{ minWidth: "30px" }} color="error" />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                        {params.get('slide') === opt.toString() &&
                            renderImport(SlideSettings)
                        }
                        {params.get('column') === opt.toString() && params.get('type') !== "gallery" &&
                            renderImport(ListItemDetail)
                        }
                        {params.get('column') === opt.toString() && params.get('type') === "gallery" &&
                            renderImport(GalleryEdit)
                        }
                        {params.get('testimonial') === opt.toString() && params.get('type') === "testimonials" &&
                            renderImport(TestimonialtestimonialSettings)
                        }
                        {params.get('brand') === opt.toString() &&
                            renderImport(BrandEdit)
                        }
                    </React.Fragment>
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
    )
}
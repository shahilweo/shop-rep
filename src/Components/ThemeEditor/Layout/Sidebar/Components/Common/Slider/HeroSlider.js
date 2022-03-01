import { Box } from "@mui/material"
import React from "react"
import RenderFn from "../../../../../../../Container/Exports"

export default function HeroSlider() {
    let data = [
        {
            type: "heading",
            text: "Slide list"
        },
        {
            type: "slide_item",
            label: "Slide",
            length: 3
        },
        {
            type: "divider"
        },
        {
            type: "heading",
            text: "Slider settings"
        },
        {
            type: "text",
            id: "slider_class",
            label: "Class name",
            value: "",
            placeholder: ""
        },
        {
            type: "select",
            label: "Slider text alignment",
            id: "slider_text_alignment",
            current: "center",
            items: [
                { name: "Left", value: "left" },
                { name: "Center", value: "center" },
                { name: "Right", value: "right" }
            ]
        },
        {
            type: "divider"
        },
        {
            type: "checkbox",
            id: "slider_autoplay",
            label: "Autoplay",
            value: true
        },
        {
            type: "checkbox",
            id: "slider_loop",
            label: "Infinite",
            value: true
        },
        {
            type: "checkbox",
            id: "slider_arrows",
            label: "Arrows",
            value: false
        },
        {
            type: "checkbox",
            id: "slider_dots",
            label: "Dots",
            value: true
        }
    ]
    return (
        <React.Fragment>
            {data.map((opt, index) => {
                return (
                    <Box key={index.toString()}>
                        <RenderFn data={opt} />
                    </Box>
                )
            })}
        </React.Fragment>
    )
}
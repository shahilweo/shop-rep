import { Box } from "@mui/material"
import React from "react"
import RenderFn from "../../../../../../Container/Exports"

export default function ContentBlock() {
    let data = [
        {
            type: "select",
            label: "Order",
            id: "content_block_order",
            current: "default",
            items: [
                { name: "Default", value: "default" },
                { name: "Reverse", value: "reverse" },
            ]
        },
        {
            type: "image_file",
            id: "content_block_image",
            label: "Image",
            note: "",
            height: "200px",
            width: "100%",
            alt: "",
            value: "http://122.160.61.100/design/st/Dr.Khasha-HTML/V2/images/testimonials-2.jpg"
        },
        {
            type: "range",
            label: "Image container width",
            value: 50,
            min: 20,
            max: 100,
            step: 5,
            unit: "%"
        },
        {
            type: "select",
            label: "Image alignment",
            id: "content_block_image_alignment",
            current: "center",
            items: [
                { name: "Top", value: "top" },
                { name: "Center", value: "center" },
                { name: "Bottom", value: "bottom" },
            ]
        },
        {
            type: "text",
            id: "content_block_heading",
            label: "Heading",
            value: "",
            placeholder: ""
        },
        {
            type: "editor",
            id: "content_block_text",
            label: "Text",
            value: "",
        },
        {
            type: "range",
            label: "Content container width",
            value: 50,
            min: 20,
            max: 100,
            step: 5,
            unit: "%"
        },
        {
            type: "select",
            label: "Content alignment",
            id: "content_block_text_alignment",
            current: "center",
            items: [
                { name: "Top", value: "top" },
                { name: "Center", value: "center" },
                { name: "Bottom", value: "bottom" },
            ]
        },
        {
            type: "text",
            id: "content_block_button_label",
            label: "Button label",
            value: "Shop now",
            placeholder: ""
        },
        {
            type: "text",
            id: "content_block_button_link",
            label: "Button link",
            value: "",
            placeholder: ""
        },
    ]
    return (
        <Box sx={{pt:2}}>
            {data.map((opt, index) => {
                return (
                    <Box key={index.toString()}>
                        <RenderFn data={opt} />
                    </Box>
                )
            })}
        </Box>
    )
}
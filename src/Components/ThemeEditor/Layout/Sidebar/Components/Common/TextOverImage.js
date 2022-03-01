import { Box } from "@mui/material"
import React from "react"
import RenderFn from "../../../../../../Container/Exports"

export default function TextOverImage() {
    let data = [
        {
            type: "heading",
            text: "Image"
        },
        {
            type: "image_file",
            id: "logo_image",
            label: "Logo image",
            note: "",
            height: "200px",
            width: "100%",
            alt: "",
            value: "http://122.160.61.100/design/st/Dr.Khasha-HTML/V2/images/testimonials-2.jpg"
        },
        {
            type: "select",
            label: "Image layout",
            id: "image_layout",
            current: "full",
            items: [
                { name: "Full width", value: "full" },
                { name: "Fixed width", value: "fixed" }
            ]
        },
        {
            type: "divider"
        },
        {
            type: "heading",
            text: "Text"
        },
        {
            type: "text",
            id: "image_caption_heading",
            label: "Heading",
            value: "Lorem ipsum dolor",
            placeholder: ""
        },
        {
            type: "editor",
            id: "image_caption_text",
            label: "Text",
            value: "",
        },
        {
            type: "select",
            label: "Position",
            id: "image_text_alignment",
            current: "center",
            items: [
                { name: "Top", value: "top" },
                { name: "Center", value: "center" },
                { name: "Bottom", value: "bottom" }
            ]
        },
        {
            type: "select",
            label: "Size",
            id: "image_text_size",
            current: "large",
            items: [
                { name: "Small", value: "small" },
                { name: "Medium", value: "medium" },
                { name: "Large", value: "large" }
            ]
        },
        {
            type: "heading",
            text: "Button"
        },
        {
            type: "text",
            id: "image_button_label",
            label: "Label",
            value: "Shop now",
            placeholder: ""
        },
        {
            type: "text",
            id: "image_button_link",
            label: "Link",
            value: "",
            placeholder: ""
        },
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
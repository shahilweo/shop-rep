import { Box } from "@mui/material"
import React from "react"
import RenderFn from "../../../../../../../Container/Exports"

export default function ListItemDetail({ id }) {
    let data = [
        {
            type: "image_file",
            id: "column1_image",
            label: "column image",
            note: "",
            height: "200px",
            width: "100%",
            alt: `Column ${id}`,
            value: "http://122.160.61.100/design/st/Dr.Khasha-HTML/V2/images/testimonials-2.jpg"
        },
        {
            type: "text",
            id: "column1_heading",
            label: "Heading",
            value: "Lorem ipsum dolor",
            placeholder: ""
        },
        {
            type: "editor",
            id: "column1_text",
            label: "Text",
            value: "",
        },
        {
            type: "text",
            id: "column1_btn_label",
            label: "Button label",
            value: "Shop now",
            placeholder: ""
        },
        {
            type: "text",
            id: "column1_link",
            label: "Link",
            value: "",
            placeholder: ""
        },
    ]
    console.log("data: ", data)
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
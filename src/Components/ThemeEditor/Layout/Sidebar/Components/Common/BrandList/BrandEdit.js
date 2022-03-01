import { Box } from "@mui/material"
import React from "react"
import RenderFn from "../../../../../../../Container/Exports"

export default function BrandEdit({ id }) {
    let data = [
        {
            type: "image_file",
            id: "brand1_image",
            label: "Brand image",
            note: "",
            height: "200px",
            width: "100%",
            alt: `Brand ${id}`,
            value: "http://122.160.61.100/design/st/Dr.Khasha-HTML/V2/images/testimonials-2.jpg"
        },
        {
            type: "text",
            id: "brand1_heading",
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
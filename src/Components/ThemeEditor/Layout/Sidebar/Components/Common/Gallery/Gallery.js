import { Box } from "@mui/material"
import React from "react"
import RenderFn from "../../../../../../../Container/Exports"

export default function Gallery() {
    let data = [
        {
            type: "text",
            id: "gallery_heading",
            label: "Heading",
            value: "",
            placeholder: ""
        },
        {
            type: "range",
            label: "Items per row",
            value: 3,
            min: 2,
            max: 5,
            step: 1,
            unit: ""
        },
        {
            type: "checkbox",
            id: "lightbox",
            label: "Enable lightbox",
            value: false
        },
        {
            type: "divider"
        },
        {
            type: "column_item",
            label: "Column",
            length: 6
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
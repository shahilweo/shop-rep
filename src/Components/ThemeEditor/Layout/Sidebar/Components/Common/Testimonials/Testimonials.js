import { Box } from "@mui/material"
import React from "react"
import RenderFn from "../../../../../../../Container/Exports"

export default function Testimonials() {
    let data = [
        {
            type: "text",
            id: "testimonials_heading",
            label: "Heading",
            value: "",
            placeholder: ""
        },        
        {
            type: "range",
            label: "Items per row",
            value: 2,
            min: 1,
            max: 4,
            step: 1,
            unit: ""
        },
        {
            type: "divider"
        },
        {
            type: "column_item",
            label: "Testimonial",
            length: 6
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
import { Box } from "@mui/material"
import React from "react"
import RenderFn from "../../../../../../Container/Exports"

export default function HeadingText() {
    let data = [
        {
            type: "text",
            id: "heading_text_heading",
            label: "Heading",
            value: "",
            placeholder: ""
        },
        {
            type: "editor",
            id: "heading_text_subheading",
            label: "Subheading",
            value: "",
        },    
        {
            type: "range",
            label: "Container width",
            value: 50,
            min: 25,
            max: 100,
            step: 5,
            unit: "%"
        },
        {
            type: "select",
            label: "Text Size",
            id: "heading_text_size",
            current: "medium",
            items: [
                { name: "Small", value: "small" },
                { name: "Medium", value: "medium" },
                { name: "Large", value: "large" },
            ]
        }
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
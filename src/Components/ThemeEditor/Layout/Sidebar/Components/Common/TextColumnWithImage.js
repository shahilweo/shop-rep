import { Box } from "@mui/material"
import React from "react"
import RenderFn from "../../../../../../Container/Exports"

export default function TextColumnWithImage() {
    let data = [
        {
            type: "text",
            id: "text_column_heading",
            label: "Heading",
            value: "",
            placeholder: ""
        },
        {
            type: "column_item",
            label: "Column",
            length: 3
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
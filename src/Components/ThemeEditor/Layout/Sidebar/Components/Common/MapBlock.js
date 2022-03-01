import { Box } from "@mui/material"
import React from "react"
import RenderFn from "../../../../../../Container/Exports"

export default function MapBlock() {
    let data = [
        {
            type: "text",
            id: "map_src",
            label: "Map src",
            value: "",
            placeholder: "Add map embeded code"
        },
        {
            type: "text",
            id: "map_heading",
            label: "Map heading",
            value: "Store name",
            placeholder: ""
        },
        {
            type: "text",
            id: "map_address",
            label: "Store address",
            value: "301 Front St W, Toronto",
            placeholder: ""
        },
        {
            type: "editor",
            id: "map_address_text",
            label: "Address text",
            value: "",
        },
        {
            type: "text",
            id: "map_button_label",
            label: "Button label",
            value: "Get directions",
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
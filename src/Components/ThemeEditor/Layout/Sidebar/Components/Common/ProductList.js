import { Box } from "@mui/material"
import React from "react"
import RenderFn from "../../../../../../Container/Exports"

export default function ProductList() {
    let data = [
        {
            type: "text",
            id: "product_list_heading",
            label: "Heading",
            value: "Featured collection",
            placeholder: ""
        },
        {
            type: "select",
            label: "Choose category",
            id: "product_list_category",
            current: "",
            items: [
                { name: "Category 1", value: "1" },
                { name: "Category 2", value: "2" },
                { name: "Category 3", value: "3" },
                { name: "Category 4", value: "4" }
            ]
        },
        {
            type: "divider"
        },
        {
            type: "range",
            label: "Items per row",
            value: 4,
            min: 2,
            max: 5,
            step: 1,
            unit: ""
        },
        {
            type: "checkbox",
            id: "product_list_slider",
            label: "Show as slider",
            value: false
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
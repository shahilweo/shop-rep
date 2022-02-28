import { Box } from "@mui/material"
import React from "react"
import RenderFn from "../../../../../../../Container/Exports"

export default function GalleryEdit({ id }) {
    let data = [
        {
            type: "image_file",
            id: "gallery1_image",
            label: "Gallery image",
            note: "",
            height: "200px",
            width: "100%",
            alt: `Gallery ${id}`,
            value: "http://122.160.61.100/design/st/Dr.Khasha-HTML/V2/images/testimonials-2.jpg"
        },
        {
            type: "text",
            id: "gallery1_caption",
            label: "Caption",
            value: "Lorem ipsum dolor",
            placeholder: ""
        },
        {
            type: "text",
            id: "gallery1_link",
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
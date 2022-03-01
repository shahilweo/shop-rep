import { Box } from "@mui/material"
import React from "react"
import RenderFn from "../../../../../../../Container/Exports"

export default function TestimonialtestimonialSettings({ id }) {
    let data = [
        {
            type: "image_file",
            id: "testimonial1_image",
            label: "Client image",
            note: "",
            height: "150px",
            width: "100%",
            alt: `Testimonial ${id}`,
            value: "http://122.160.61.100/design/st/Dr.Khasha-HTML/V2/images/testimonials-2.jpg"
        },
        {
            type: "editor",
            id: "testimonial1_message",
            label: "Message Text",
            value: "",
        },
        {
            type: "text",
            id: "testimonial1_author",
            label: "Author",
            value: "",
            placeholder: ""
        }
    ]
    return (
        <React.Fragment>
            {data.map((opt, index) => {
                return (
                    <Box key={index.toString()} sx={{ p: 2, background: "#fff", border: "#ededed 1px solid" }}>
                        <RenderFn data={opt} />
                    </Box>
                )
            })}
        </React.Fragment>
    )
}
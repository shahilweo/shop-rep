import { Box } from "@mui/material"
import React from "react"
import ImagePicker from "./ImagePicker"
import TextFields from "./TextField"

export default function SlideSettings({ id }) {
    let data = [
        {
            type: "image_file",
            id: "slide1_image",
            label: "Slide image",
            note: "",
            height: "150px",
            width: "100%",
            alt: `Slide ${id}`,
            value: "http://122.160.61.100/design/st/Dr.Khasha-HTML/V2/images/testimonials-2.jpg"
        },
        {
            type: "text",
            id: "slide1_heading",
            label: "Heading",
            value: "Lorem ipsum dolor",
            placeholder: ""
        },
        {
            type: "text",
            id: "slide1_subheading",
            label: "Sub heading",
            value: "Lorem ipsum dolor sit amet",
            placeholder: ""
        },
        {
            type: "text",
            id: "slide1_btn_label",
            label: "Button label",
            value: "Shop now",
            placeholder: ""
        },
        {
            type: "text",
            id: "slide1_link",
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
                    <Box key={index.toString()} sx={{ p: 2, background: "#fff", border: "#ededed 1px solid" }}>
                        {opt.type == "image_file" &&
                            <ImagePicker
                                data={opt}
                            />
                        }
                        {opt.type == "text" &&
                            <TextFields
                                data={opt}
                            />
                        }
                    </Box>
                )
            })}
        </React.Fragment>
    )
}
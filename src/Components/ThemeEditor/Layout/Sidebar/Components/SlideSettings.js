import React from "react"
import ImagePicker from "./ImagePicker"

export default function SlideSettings() {
    let data = [
        {
            type: "image_file",
            id: "slide1_image",
            label: "Slide image",
            note: "",
            height: "",
            width: "100%",
            alt: "Slide 1",
            value: "https://www.psd2html5.co/img/logo-light.svg"
        },
    ]
    console.log("data: ", data)
    return (
        <ImagePicker
            data={data.filter((opt)=>opt.type == "image_file")[0]}
        />
    )
}
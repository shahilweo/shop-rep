export default [
    {
        type: "heading",
        text: "Image"
    },
    {
        type: "image_file",
        id: "logo_image",
        label: "Logo image",
        note: "",
        height: "200px",
        width: "100%",
        alt: "",
        value: "http://122.160.61.100/design/slide.jpg"
    },
    {
        type: "select",
        label: "Image layout",
        name: "image_layout",
        value: "full",
        items: [
            { name: "Full width", value: "full" },
            { name: "Fixed width", value: "fixed" }
        ]
    },
    {
        type: "divider"
    },
    {
        type: "heading",
        text: "Text"
    },
    {
        type: "text",
        id: "image_caption_heading",
        label: "Heading",
        value: "Lorem ipsum dolor",
        placeholder: ""
    },
    {
        type: "editor",
        id: "image_caption_text",
        label: "Text",
        value: "",
    },
    {
        type: "select",
        label: "Position",
        name: "image_text_alignment",
        value: "center",
        items: [
            { name: "Top", value: "top" },
            { name: "Center", value: "center" },
            { name: "Bottom", value: "bottom" }
        ]
    },
    {
        type: "select",
        label: "Size",
        name: "image_text_size",
        value: "large",
        items: [
            { name: "Small", value: "small" },
            { name: "Medium", value: "medium" },
            { name: "Large", value: "large" }
        ]
    },
    {
        type: "heading",
        text: "Button"
    },
    {
        type: "text",
        id: "image_button_label",
        label: "Label",
        value: "Shop now",
        placeholder: ""
    },
    {
        type: "text",
        id: "image_button_link",
        label: "Link",
        value: "",
        placeholder: ""
    },
]
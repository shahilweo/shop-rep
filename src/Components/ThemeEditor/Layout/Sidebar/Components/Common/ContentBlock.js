export default [
    {
        type: "select",
        label: "Order",
        id: "content_block_order",
        current: "default",
        items: [
            { name: "Default", value: "default" },
            { name: "Reverse", value: "reverse" },
        ]
    },
    {
        type: "image_file",
        id: "content_block_image",
        label: "Image",
        note: "",
        height: "",
        width: "100%",
        alt: "",
        value: "http://122.160.61.100/design/side-image.jpg"
    },
    {
        type: "select",
        label: "Image alignment",
        id: "content_block_image_alignment",
        current: "center",
        items: [
            { name: "Top", value: "top" },
            { name: "Center", value: "center" },
            { name: "Bottom", value: "bottom" },
        ]
    },
    {
        type: "text",
        id: "content_block_heading",
        label: "Heading",
        value: "",
        placeholder: ""
    },
    {
        type: "editor",
        id: "content_block_text",
        label: "Text",
        value: "",
    },
    {
        type: "select",
        label: "Content alignment",
        id: "content_block_text_alignment",
        current: "center",
        items: [
            { name: "Top", value: "top" },
            { name: "Center", value: "center" },
            { name: "Bottom", value: "bottom" },
        ]
    },
    {
        type: "text",
        id: "content_block_button_label",
        label: "Button label",
        value: "Shop now",
        placeholder: ""
    },
    {
        type: "text",
        id: "content_block_button_link",
        label: "Button link",
        value: "",
        placeholder: ""
    },
]
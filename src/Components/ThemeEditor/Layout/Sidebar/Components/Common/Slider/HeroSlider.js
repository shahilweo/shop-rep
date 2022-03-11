export default [
        {
            type: "heading",
            text: "Slide list"
        },
        {
            type: "slide_item",
            label: "Slide",
            length: 3
        },
        {
            type: "divider"
        },
        {
            type: "heading",
            text: "Slider settings"
        },
        {
            type: "text",
            name: "class",
            label: "Class name",
            value: "",
            placeholder: ""
        },
        {
            type: "select",
            label: "Slider text alignment",
            name: "slider_text_alignment",
            value: "center",
            items: [
                { name: "Left", value: "left" },
                { name: "Center", value: "center" },
                { name: "Right", value: "right" }
            ]
        },
        {
            type: "divider"
        },
        {
            type: "checkbox",
            id: "slider_autoplay",
            name: "autoplay",
            label: "Autoplay",
            value: true
        },
        {
            type: "checkbox",
            id: "slider_loop",
            name: "infinite",
            label: "Infinite",
            value: true
        },
        {
            type: "checkbox",
            id: "slider_arrows",
            name: "arrows",
            label: "Arrows",
            value: true
        },
        {
            type: "checkbox",
            id: "slider_dots",
            name: "dots",
            label: "Dots",
            value: true
        }
    ]
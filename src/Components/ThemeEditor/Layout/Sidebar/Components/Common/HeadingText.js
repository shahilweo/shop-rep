export default [
    {
        type: "text",
        id: "heading_text_heading",
        label: "Heading",
        value: "",
        placeholder: ""
    },
    {
        type: "editor",
        id: "heading_text_subheading",
        label: "Subheading",
        value: "",
    },
    {
        type: "range",
        label: "Container width",
        value: 8,
        min: 2,
        max: 12,
        step: 1,
        unit: ""
    },
    {
        type: "select",
        label: "Text Size",
        id: "heading_text_size",
        current: "medium",
        items: [
            { name: "Small", value: "small" },
            { name: "Medium", value: "medium" },
            { name: "Large", value: "large" },
        ]
    }
]
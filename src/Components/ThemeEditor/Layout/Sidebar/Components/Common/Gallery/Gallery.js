export default [
    {
        type: "text",
        id: "gallery_heading",
        label: "Heading",
        value: "",
        placeholder: ""
    },
    {
        type: "range",
        label: "Items per row",
        value: 3,
        min: 2,
        max: 5,
        step: 1,
        unit: ""
    },
    {
        type: "checkbox",
        id: "lightbox",
        label: "Enable lightbox",
        value: false
    },
    {
        type: "divider"
    },
    {
        type: "column_item",
        label: "Column",
        length: 6
    },
]
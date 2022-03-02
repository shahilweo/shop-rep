export default [
    {
        type: "text",
        id: "brands_list_heading",
        label: "Heading",
        value: "",
        placeholder: ""
    },
    {
        type: "range",
        label: "Items per row",
        value: 4,
        min: 2,
        max: 8,
        step: 1,
        unit: ""
    },
    {
        type: "checkbox",
        id: "brand_slider",
        label: "Enable slider",
        value: true
    },
    {
        type: "divider"
    },
    {
        type: "column_item",
        label: "Brand",
        length: 6
    },
]
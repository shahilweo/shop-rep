export default [
    {
        type: "text",
        id: "product_list_heading",
        label: "Heading",
        value: "Featured collection",
        placeholder: ""
    },
    {
        type: "select",
        label: "Choose category",
        name: "product_list_category",
        value: "",
        items: [
            { name: "Category 1", value: "1" },
            { name: "Category 2", value: "2" },
            { name: "Category 3", value: "3" },
            { name: "Category 4", value: "4" }
        ]
    },
    {
        type: "divider"
    },
    {
        type: "range",
        label: "Items per row",
        value: 4,
        min: 2,
        max: 5,
        step: 1,
        unit: ""
    },
    {
        type: "checkbox",
        id: "product_list_slider",
        label: "Show as slider",
        value: false
    },
]
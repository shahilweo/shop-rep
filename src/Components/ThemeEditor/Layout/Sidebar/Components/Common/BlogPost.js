export default [
    {
        type: "text",
        id: "blog_sec_heading",
        label: "Heading",
        value: "Blog posts",
        placeholder: ""
    },
    {
        type: "heading",
        text: "Blog"
    },
    {
        type: "nav_list",
        label: "Static blog",
        current: {
            name: "News",
            link: ""
        }
    },
    {
        type: "select",
        label: "",
        id: "nav_menu",
        current: "news_blog",
        items: [
            { name: "News", value: "news_blog" },
            { name: "Fashion", value: "fashion_blog" }
        ]
    },
    {
        type: "divider"
    },
    {
        type: "range",
        label: "Items per row",
        value: 2,
        min: 1,
        max: 4,
        step: 1,
        unit: ""
    },
    {
        type: "checkbox",
        id: "show_date",
        label: "Show date",
        value: true
    },
    {
        type: "checkbox",
        id: "show_author",
        label: "Show author",
        value: true
    },
]
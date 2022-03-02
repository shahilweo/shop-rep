export default [
        {
            type: "heading",
            text: "Logo image"
        },
        {
            type: "image_file",
            id: "logo_image",
            label: "Logo image",
            note: "",
            height: "70px",
            width: "200px",
            alt: "Logo",
            value: "https://www.psd2html5.co/img/logo-light.svg"
        },
        {
            type: "heading",
            text: "Logo alignment"
        },
        {
            type: "radio",
            id: "logo_align_left",
            label: "Left",
            value: true
        },
        {
            type: "radio",
            id: "logo_align_center",
            label: "Center",
            value: false
        },
        {
            type: "heading",
            text: "Logo width"
        },
        {
            type: "range",
            label: "",
            value: 100,
            min: 50,
            max: 300,
            step: 10,
            unit: "px"
        },
        {
            type: "heading",
            text: "Navigation"
        },
        {
            type: "nav_list",
            label: "Static menu",
            current: {
                name: "Main menu",
                link: ""
            }
        },
        {
            type: "select",
            label: "",
            id: "nav_menu",
            current: "main_menu",
            items: [
                { name: "Main menu", value: "main_menu" },
                { name: "Footer menu", value: "footer_menu" }
            ]
        },
        {
            type: "divider"
        },
        {
            type: "heading",
            text: "Announcement bar"
        },
        {
            type: "checkbox",
            id: "show_announcement",
            label: "Show",
            value: true
        },
        {
            type: "text",
            id: "announcement_text",
            label: "Text",
            value: "",
            placeholder: "Enter announcement text"
        },
        {
            type: "text",
            id: "announcement_link",
            label: "Link",
            value: "",
            placeholder: "Enter redirect URL"
        },
        {
            type: "heading",
            text: "Announcement colors"
        },
        {
            type: "color_picker",
            id: "bar_color",
            label: "Bar color",
            value: "#000000"
        },
        {
            type: "color_picker",
            id: "bar_text_color",
            label: "Text color",
            value: "#ffffff"
        },
    ]
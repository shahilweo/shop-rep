export default [
    {
        name: "Typography",
        type: "typography",
        settings: [
            {
                type: "heading",
                text: "Headings"
            },
            {
                type: "font_family",
                label: "Font family",
                value: "Arial"
            },
            {
                type: "range",
                label: "Heading Size",
                value: 26,
                min: 20,
                max: 40,
                step: 2,
                unit: "px"
            },
            {
                type: "heading",
                text: "Body text"
            },
            {
                type: "font_family",
                label: "Font family",
                value: "Arial"
            },
            {
                type: "range",
                label: "Base Size",
                value: 14,
                min: 12,
                max: 20,
                step: 1,
                unit: "px"
            }
        ]
    },
    {
        name: "Colors",
        type: "colors",
        settings: [
            {
                type: "heading",
                text: "Text colors"
            },
            {
                type: "color_picker",
                id: "heading_color",
                label: "Headings",
                value: "#000000"
            },
            {
                type: "color_picker",
                id: "body_text_color",
                label: "Body text",
                value: "#000000"
            },
            {
                type: "heading",
                text: "Button colors"
            },
            {
                type: "color_picker",
                id: "button_color",
                label: "Button color",
                value: "#000000"
            },
            {
                type: "color_picker",
                id: "button_hover_color",
                label: "Button hover color",
                value: "#ff0000"
            },
            {
                type: "color_picker",
                id: "button_text_color",
                label: "Button text color",
                value: "#ffffff"
            },
            {
                type: "heading",
                text: "Body colors"
            },
            {
                type: "color_picker",
                id: "body_bg_color",
                label: "Background",
                value: "#ffffff"
            },
            {
                type: "heading",
                text: "Overlay color"
            },
            {
                type: "color_picker",
                id: "overlay_bg_color",
                label: "Background",
                value: "#000000"
            },
            {
                type: "color_picker",
                id: "overlay_text_color",
                label: "Text color",
                value: "#ffffff"
            },
            {
                type: "range",
                id: "overlay_opacity",
                label: "Opacity",
                value: 40,
                min: 0,
                max: 100,
                step: 5,
                unit: "%"
            }
        ]
    },
    {
        name: "Favicon",
        type: "favicon",
        settings: [
            {
                type: "heading",
                text: "Add Favicon image"
            },
            {
                type: "image_file",
                id: "favicon",
                label: "Add Favicon image",
                note: "Recommended size 64 X 64",
                height: "64px",
                width: "100%",
                alt: "",
                value: "https://www.psd2html5.co/img/logo-light.svg"
            }
        ]
    },
    {
        name: "Social share",
        type: "share_button",
        settings: [
            {
                type: "heading",
                text: "Social sharing"
            },
            {
                type: "checkbox",
                id: "facebook_share",
                label: "Share on Facebook",
                value: true
            },
            {
                type: "checkbox",
                id: "twitter_share",
                label: "Share on Twitter",
                value: true
            },
            {
                type: "checkbox",
                id: "pinterest_share",
                label: "Share on Pinterest",
                value: false
            }
        ]
    },
    {
        name: "Social links",
        type: "social_button",
        settings: [
            {
                type: "text",
                id: "facebook_link",
                label: "Facebook",
                value: "",
                placeholder: ""
            },
            {
                type: "text",
                id: "twitter_link",
                label: "Twitter",
                value: "",
                placeholder: ""
            },
            {
                type: "text",
                id: "pinterest_link",
                label: "Pinterest",
                value: "",
                placeholder: ""
            },
            {
                type: "text",
                id: "instagram_link",
                label: "Instagram",
                value: "",
                placeholder: ""
            },
            {
                type: "text",
                id: "youtube_link",
                label: "Youtube",
                value: "",
                placeholder: ""
            },
            {
                type: "text",
                id: "vimeo_link",
                label: "Vimeo",
                value: "",
                placeholder: ""
            },
            {
                type: "text",
                id: "tumblr_link",
                label: "Tumblr",
                value: "",
                placeholder: ""
            },
            {
                type: "text",
                id: "snapchat_link",
                label: "Snapchat",
                value: "",
                placeholder: ""
            }
        ]
    },
    {
        name: "Header",
        type: "header",
        settings: [
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
    },
    {
        name: "Slider",
        type: "hero_slider",
        settings: [
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
                id: "slider_class",
                label: "Class name",
                value: "",
                placeholder: ""
            },
            {
                type: "select",
                label: "Slider text alignment",
                id: "slider_text_alignment",
                current: "center",
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
                label: "Autoplay",
                value: true
            },
            {
                type: "checkbox",
                id: "slider_loop",
                label: "Infinite",
                value: true
            },
            {
                type: "checkbox",
                id: "slider_arrows",
                label: "Arrows",
                value: false
            },
            {
                type: "checkbox",
                id: "slider_dots",
                label: "Dots",
                value: true
            },
            {
                type: "slide_settings",
            }
        ]
    }
]
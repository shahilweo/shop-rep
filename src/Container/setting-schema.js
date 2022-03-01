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
                id: "heading_font",
                value: "Roboto"
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
                id: "body_font",
                value: "Roboto"
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
                type: "header"
            }
        ]
    },
    {
        name: "Slider",
        type: "hero_slider",
        settings: [
            {
                type: "hero_slider"
            }
        ]
    },
    {
        name: "Text Over Image",
        type: "text_over_image",
        settings: [
            {
                type: "text_over_image"
            }
        ]
    },
    {
        name: "Product list",
        type: "product_list",
        settings: [
            {
                type: "product_list"
            }
        ]
    },
    {
        name: "Text column with image",
        type: "text_column_with_image",
        settings: [
            {
                type: "text_column_with_image"
            }
        ]
    },
    {
        name: "Gallery",
        type: "gallery",
        settings: [
            {
                type: "gallery"
            }
        ]
    },
    {
        name: "Content block",
        type: "content_block",
        settings: [
            {
                type: "content_block"
            }
        ]
    },
    {
        name: "Brand list",
        type: "brands_list",
        settings: [
            {
                type: "brands_list"
            }
        ]
    },
    {
        name: "Map",
        type: "map",
        settings: [
            {
                type: "map"
            }
        ]
    },
    {
        name: "Heading text",
        type: "heading_text",
        settings: [
            {
                type: "heading_text"
            }
        ]
    },
    {
        name: "Testimonials",
        type: "testimonials",
        settings: [
            {
                type: "testimonials"
            }
        ]
    }
]
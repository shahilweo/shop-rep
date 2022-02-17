export default {
    common: {
        header: {
            name: "Header",
            settings: {
                logo: {
                    logo_alignment: "left",
                    logo_image: "",
                    logo_width: 200
                },
                navigation: "",
                announcement: {
                    show: true,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    link: "",
                    bar_color: "#000000",
                    text_color: "#ffffff"
                },
                show_search: true
            }
        },
        footer: {
            name: "Footer",
            settings: {
                background_color: "#000000",
                text_color: "#ffffff"
            },
            navigation: [
                {
                    heading: "Quick links",
                    list: [
                        {
                            label: "About",
                            link: "/about"
                        },
                        {
                            label: "Contact us",
                            link: "/contact"
                        }
                    ]
                }
            ]
        }
    },
    components: {
        hero_slider: {
            name: "Slider",
            class: "hero-slider",
            limit: 5,
            config: {
                type: "slide_with_text",
                settings: {
                    image_src: "",
                    link: "",
                    heading: "Lorem ipsum dolor sit.",
                    subheading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    button_label: "Shop now",
                    alignment: "center"
                },
                autoplay: true,
                loop: true,
                dots: true,
                arrow: true
            }
        },
        text_over_image: {
            name: "Text Over Image",
            image: "",
            settings: {
                layout: "full"
            },
            caption: {
                heading: "Lorem ipsum dolor sit",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                alignment: "center",
                size: "large"
            },
            button: {
                label: "Shop now",
                link: ""
            }
        },
        gallery: {
            name: "Gallery",
            heading: "",
            item_per_row: 4,
            lightbox: true,
            items: [
                {
                    image: "",
                    link: "",
                    caption: ""
                }
            ]
        },
        content_block: {
            name: "Content Block",
            heading: "",
            settings: [
                {
                    order: "default",
                    image: {
                        src: "",
                        column_width: 5,
                        alignment: "center"
                    },
                    content: {
                        heading: "Lorem ipsum dolor sit",
                        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        column_width: 5,
                        alignment: "center",
                        button_label: "Learn more",
                        button_link: ""
                    }
                }
            ]
        },
        brands_list: {
            name: "Brand list",
            heading: "",
            item_per_row: 5,
            slider: true,
            items: [
                {
                    image_src: "",
                    link: ""
                }
            ]
        },
        map: {
            name: "Map",
            settings: {
                iframe: {
                    link: "",
                    width: "",
                    height: ""
                },
                map_address: {
                    heading: "Our store",
                    address_text: "",
                    map_address: "",
                    button_label: "Get Direction"
                }
            }
        },
        heading_text: {
            name: "Heading text",
            heading: "Lorem ipsum dolor sit",
            subheading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            size: "large",
            container_width: 8
        },
        testimonials: {
            name: "Testimonials",
            heading: "",
            item_per_row: 1,
            limit: 5,
            arrows: true,
            items: [
                {
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    author: "John smith",
                    client_image: ""
                }
            ]
        },
        newsletter: {
            name: "Newsletter",
            heading: "",
            subheading: "",
            button_label: "Submit",
            config: ""
        },
        blog_post: {
            name: "Blog post",
            heading: "",
            blog_list: "",
            item_per_row: 3,
            show_date: true,
            show_readmore: true,
            show_author: true
        },
        video: {
            name: "Video",
            link: "",
            video_src: "",
            cover_image: "",
            show_overlay: true,
            style: "background_video",
            heading: {
                text: "",
                size: "large"
            }
        },
        button: {
            name: "Button",
            label: "",
            link: "",
            type: "success",
            settings: {
                alignment: "left",
                size: "large"
            }
        },
        counter: {
            name: "Counter",
            heading: "",
            subheading: "",
            date_time: "",
            publish: true
        },
        list_style: {
            name: "List style",
            layout: "list",
            icon: "default",
            items: [
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet."
            ]
        },
        accordion: {
            name: "Accordion",
            heading: "",
            items: [
                {
                    title: "",
                    description: ""
                }
            ]
        },
        custom_html: {
            name: "Custom HTML",
            code: ""
        }
    },
    page: {
        product_page: {
            name: "Product page",
            slider: {
                size: "medium",
                enable_zoom: true,
                thumbnail: {
                    position: "vertical",
                    show_items: 6
                }
            },
            product_detail: {
                show_quantity: true,
                show_vendor: true,
                show_share_buttons: true
            },
            recommend_products: {
                heading: "",
                item_per_row: 5
            }
        },
        product_list: {
            name: "Product list",
            heading: "",
            layout: "grid",
            product_per_row: 4,
            show_vendor: true,
            show_sale_tag: true
        },
        category_list: {
            name: "category list",
            heading: "",
            items_per_row: 3,
            show_list: [
                "all",
                "selected"
            ],
            sort: [
                "all",
                "alphabetically",
                "date",
                "price"
            ]
        }
    },
    theme: {
        typography: {
            name: "Typography",
            heading: {
                font_family: "Arial",
                base_size: 26
            },
            body_text: {
                font_family: "Arial",
                base_size: 16
            }
        },
        colors: {
            name: "Colors",
            heading_color: "#000000",
            button_color: "#000000",
            button_hover_color: "#333333",
            button_text_color: "#ffffff",
            body_text_color: "#000000",
            body_bg_color: "#ffffff",
            overlay_text_color: "#ffffff",
            overlay_bg_color: "#000000",
            overlay_opacity: 40
        },
        share_button: {
            name: "Share buttons",
            options: {
                facebook: true,
                twitter: true,
                pinterest: false
            }
        },
        social_button: {
            name: "Social Buttons",
            title: "Follow us:",
            options: [
                {
                    facebook: "",
                    twitter: "",
                    pinterest: "",
                    instagram: "",
                    youtube: "",
                    vimeo: "",
                    tumblr: "",
                    snapchat: ""
                }
            ]
        },
        favicon: {
            name: "Favicon",
            image_scr: ""
        }
    }
}
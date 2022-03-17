export default {
    blocks: {
        list: [
            "hero_slider",
            "text_over_image",
            "product_list",
            "text_column_with_image",
            "gallery",
            "content_block",
            "brands_list",
            "map",
            "heading_text",
            "testimonials",
            "blog_post"
        ],
        active: [
            "header",
            "hero_slider",
            "content_block",
            "product_list",
            "text_column_with_image",
            "gallery",
            "footer"
        ]
    },
    components: {
        header: {
            name: "Header",
            logo_alignment: "left",
            logo_alt: "Logo",
            logo_image: "https://www.psd2html5.co/img/logo-light.svg",
            logo_width: 100,
            navigation: "",
            show_announcement: true,
            announcement_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            announcement_link: "",
            bar_color: "#000000",
            bar_text_color: "#ffffff",
            show_search: true
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
        },
        hero_slider: {
            name: "Slider",
            class: "hero-slider",
            slider_text_alignment: "center",
            autoplay: true,
            infinite: true,
            dots: true,
            arrows: true,
            items: [
                {
                    id: 1,
                    image_src: "http://122.160.61.100/design/slide.jpg",
                    link: "",
                    heading: "Slide 1 heading",
                    subheading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    slide_img_alt: ""
                },
                {
                    id: 2,
                    image_src: "http://122.160.61.100/design/slide.jpg",
                    link: "",
                    heading: "Slide 2 heading",
                    subheading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    slide_img_alt: ""
                },
                {
                    id: 3,
                    image_src: "http://122.160.61.100/design/slide.jpg",
                    link: "",
                    heading: "Slide 3 heading",
                    subheading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    slide_img_alt: ""
                }
            ],
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
        product_list: {
            name: "Product list",
            heading: "",
            category: "",
            item_per_row: 3,
            is_slider: false,
        },
        text_column_with_image: {
            name: "Text column with image",
            heading: "",
            item_per_row: 3,
            items: []
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
            name: "Content block",
            heading: "Lorem ipsum dolor",
            order: "default",
            alignment: "center",
            image: {
                src: "http://122.160.61.100/design/side-image.jpg",
                alt: "",
            },
            content: {
                heading: "Lorem ipsum dolor sit",
                paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                button_label: "Learn more",
                button_link: ""
            }
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
            map_src: "",
            map_address: {
                heading: "Our store",
                address_text: "",
                map_address: "",
                button_label: "Get Directions"
            }
        },
        heading_text: {
            name: "Heading text",
            heading: "Lorem ipsum dolor sit",
            subheading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            size: "small",
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
        },
        typography: {
            name: "Typography",
            heading_font: "Arial",
            heading_base_size: 26,
            body_font: "Arial",
            body_text_base_size: 16
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
        },
        colors: {
            name: "Colors",
        },
        share_button: {
            name: "Share buttons",
        },
        social_button: {
            name: "Social Buttons",
        },
        favicon: {
            name: "Favicon",
        }
    }
}
import React, { useCallback, useEffect, useState } from "react";
import { Divider, Link } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ImagePicker from "../Components/ThemeEditor/Layout/Sidebar/Components/ImagePicker";
import TextFields from "../Components/ThemeEditor/Layout/Sidebar/Components/TextField";
import SelectBox from "../Components/ThemeEditor/Layout/Sidebar/Components/Select";
import CheckBox from "../Components/ThemeEditor/Layout/Sidebar/Components/CheckBox";
import RadioButton from "../Components/ThemeEditor/Layout/Sidebar/Components/RadioButton";
import Colors from "../Components/ThemeEditor/Layout/Sidebar/Components/ColorPicker";
import RangeSlider from "../Components/ThemeEditor/Layout/Sidebar/Components/RangeSlider";
import TextEditor from "../Components/ThemeEditor/Layout/Sidebar/Components/TextEditor";
import Heading from "../Components/ThemeEditor/Layout/Sidebar/Components/Heading";
import Header from "../Components/ThemeEditor/Layout/Sidebar/Components/Common/Header";
import HeroSlider from "../Components/ThemeEditor/Layout/Sidebar/Components/Common/Slider/HeroSlider";
import TextOverImage from "../Components/ThemeEditor/Layout/Sidebar/Components/Common/TextOverImage";
import Gallery from "../Components/ThemeEditor/Layout/Sidebar/Components/Common/Gallery/Gallery";
import ProductList from "../Components/ThemeEditor/Layout/Sidebar/Components/Common/ProductList";
import ListItems from "../Components/ThemeEditor/Layout/Sidebar/Components/Common/ListItem/ListItems";
import TextColumnWithImage from "../Components/ThemeEditor/Layout/Sidebar/Components/Common/TextColumnWithImage";
import ContentBlock from "../Components/ThemeEditor/Layout/Sidebar/Components/Common/ContentBlock";
import BrandList from "../Components/ThemeEditor/Layout/Sidebar/Components/Common/BrandList/BrandList";
import MapBlock from "../Components/ThemeEditor/Layout/Sidebar/Components/Common/MapBlock";
import HeadingText from "../Components/ThemeEditor/Layout/Sidebar/Components/Common/HeadingText";
import Testimonials from "../Components/ThemeEditor/Layout/Sidebar/Components/Common/Testimonials/Testimonials";
import FontFamily from "../Components/ThemeEditor/Layout/Sidebar/Components/FontFamily";
import BlogPost from "../Components/ThemeEditor/Layout/Sidebar/Components/Common/BlogPost";
import { Box } from "@mui/system";
import NavList from "../Components/ThemeEditor/Layout/Sidebar/Components/NavList";
import { useDispatch, useSelector } from "react-redux";
import _ from "underscore";

import schema from "./schema";
import settingSchema from "./setting-schema";

import { logo } from "../Components/ThemeEditor/Layout/Sidebar/Components/Reducers/Header/LogoReducer";
import { announcement } from "../Components/ThemeEditor/Layout/Sidebar/Components/Reducers/Header/AnnouncementReducer";
import { dataValue } from "../Components/ThemeEditor/Layout/Sidebar/Components/Reducers/Header/CommonReducer";


export const drawerWidth = 240;

export const renderImport = (arr) => {
    return (
        <React.Fragment>
            {arr.map((opt, index) => {
                return (
                    <Box key={index.toString()}>
                        <RenderFn data={opt} />
                    </Box>
                )
            })}
        </React.Fragment>
    )
}


export default function RenderFn({ data }) {
    const params = new URLSearchParams(window.location.search)
    const dispatch = useDispatch()
    const componentScheme = schema.components
    const [schemaData, setSchemaData] = useState(componentScheme)
    const [main, setMain] = useState(Header)

    //Default dispatch function
    const dispatchFn = useCallback((id, val) => {
        const currentId = schemaData[params.get('type')]
        let newObj = { ...currentId, [id]: val }
        schemaData[params.get('type')] = newObj
        setSchemaData(schemaData)
    }, [main, schemaData])

    //Range slider onchange
    const rangeValue = useCallback((value, unit, name) => {
        dispatchFn(name, value)
        main.filter((obj) => obj.name === name).map((opt) => {
            opt.value = value
        })
        setMain([...main])
        return `${value} ${unit}`;
    }, [main, schemaData])

    //Color picker on change
    const handleColorChange = useCallback((name, val) => {
        console.log("name: ", name, "val: ", val)
        dispatchFn(name, `#${val.hex}`)
        main.filter((obj) => obj.name === name).map((opt) => {
            opt.value = `#${val.hex}`
        })
        setMain([...main])
    }, [main, schemaData])

    //Radio button on change
    const handleRadioChange = useCallback((e, id) => {
        dispatchFn(e.target.name, e.target.value)
        main.filter((obj) => obj.name === e.target.name).map((opt) => {
            opt.options.map((val) => {
                if (val.id !== id) {
                    val.checked = false
                } else {
                    val.checked = e.target.checked
                }
            })
        })
        setMain([...main])
    }, [main, schemaData])

    //Checkbox button on change
    const handleCheckboxChange = useCallback((e) => {
        dispatchFn(e.target.name, e.target.checked)
        main.filter((obj) => obj.name === e.target.name).map((opt) => {
            opt.value = e.target.checked
        })
        setMain([...main])
    }, [main, schemaData])

    //image uploader
    const doneUpload = useCallback((id, img) => {
        dispatchFn(id, img)
        main.filter((obj) => obj.id === id).map((opt) => {
            opt.value = img
        })
        setMain([...main])
    }, [main, schemaData])

    //Text/input change
    const handleInputChange = useCallback((e) => {
        dispatchFn(e.target.name, e.target.value)
        main.filter((obj) => obj.name === e.target.name).map((opt) => {
            opt.value = e.target.value
        })
        setMain([...main])
    }, [main, schemaData])

    const handleAltChange = useCallback((e, name) => {
        dispatchFn(name, e.target.value)
        main.filter((obj) => obj.alt_name === name).map((opt) => {
            opt.alt = e.target.value
        })
        setMain([...main])
    }, [main, schemaData])

    useEffect(() => {

        console.log("schemaData: ", schemaData)
        dispatch(dataValue(schemaData))
        if (params.get('type') === "header") {
            setMain(Header)
        }
        else if (params.get('type') === "hero_slider") {
            setMain(HeroSlider)
        }
        else if (params.get('type') === "text_over_image") {
            setMain(TextOverImage)
        }
        else if (params.get('type') === "product_list") {
            setMain(ProductList)
        }
        else if (params.get('type') === "text_column_with_image") {
            setMain(TextColumnWithImage)
        }
        else if (params.get('type') === "gallery") {
            setMain(Gallery)
        }
        else if (params.get('type') === "content_block") {
            setMain(ContentBlock)
        }
        else if (params.get('type') === "brands_list") {
            setMain(BrandList)
        }
        else if (params.get('type') === "map") {
            setMain(MapBlock)
        }
        else if (params.get('type') === "heading_text") {
            setMain(HeadingText)
        }
        else if (params.get('type') === "testimonials") {
            setMain(Testimonials)
        }
        else if (params.get('type') === "blog_post") {
            setMain(BlogPost)
        }
        else {
            let currentObj = {}
            settingSchema.filter((opt)=>opt.type === params.get('type')).map((val)=>{
                currentObj = val.settings
            })
            setMain(currentObj)

        }
    }, [main, schemaData])

    return (
        <>
            {data.type === "heading" &&
                <Heading
                    data={data}
                />
            }
            {data.type === "font_family" &&
                <FontFamily
                    data={data}
                />
            }
            {data.type === "range" &&
                <RangeSlider
                    data={data}
                    rangeValue={rangeValue}
                />
            }
            {data.type === "color_picker" &&
                <Colors
                    data={data}
                    handleColorChange={handleColorChange}
                />
            }
            {data.type === "image_file" &&
                <ImagePicker
                    data={data}
                    doneUpload={doneUpload}
                    handleAltChange={handleAltChange}
                />
            }
            {data.type === "checkbox" &&
                <CheckBox
                    data={data}
                    handleCheckboxChange={handleCheckboxChange}
                />
            }
            {data.type === "radio" &&
                <RadioButton
                    data={data}
                    handleRadioChange={handleRadioChange}
                />
            }
            {data.type === "text" || data.type === "number" ?
                <TextFields
                    data={data}
                    handleInputChange={handleInputChange}
                /> : null
            }
            {data.type === "select" &&
                <SelectBox
                    data={data}
                />
            }
            {data.type === "nav_list" &&
                <NavList
                    data={data}
                />
            }
            {data.type === "divider" &&
                <Divider sx={{ my: 2 }} />
            }
            {data.type === "slide_item" || data.type === "column_item" ?
                <ListItems
                    data={data}
                />
                : null
            }
            {data.type === "editor" &&
                <TextEditor
                    data={data}
                />
            }
            {data.type === "header" ||
                data.type === "hero_slider" ||
                data.type === "text_over_image" ||
                data.type === "product_list" ||
                data.type === "text_column_with_image" ||
                data.type === "gallery" ||
                data.type === "content_block" ||
                data.type === "brands_list" ||
                data.type === "map" ||
                data.type === "heading_text" ||
                data.type === "testimonials" ||
                data.type === "blog_post" ?
                renderImport(main)
                : null
            }
        </>
    )
}
import React from "react";
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


export const drawerWidth = 240;

export default function RenderFn({ data }) {
    function rangeValue(value, unit) {
        return `${value} ${unit}`;
    }

    function handleColorChange(id, val) {

    }

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
                />
            }
            {data.type === "checkbox" &&
                <CheckBox
                    data={data}
                />
            }
            {data.type === "radio" &&
                <RadioButton
                    data={data}
                />
            }
            {data.type === "text" || data.type === "number" ?
                <TextFields
                    data={data}
                /> : null
            }
            {data.type === "select" &&
                <SelectBox
                    data={data}
                />
            }
            {data.type === "nav_list" &&
                <Link href={data.current.link} underline="hover" sx={{ pb: 2, display: "block" }}>
                    {data.current.name} <OpenInNewIcon fontSize="inherit" sx={{ verticalAlign: 'middle' }} />
                </Link>
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
            {data.type === "header" &&
                <Header />
            }
            {data.type === "hero_slider" &&
                <HeroSlider />
            }
            {data.type === "text_over_image" &&
                <TextOverImage />
            }
            {data.type === "product_list" &&
                <ProductList />
            }
            {data.type === "text_column_with_image" &&
                <TextColumnWithImage />
            }
            {data.type === "gallery" &&
                <Gallery />
            }
            {data.type === "content_block" &&
                <ContentBlock />
            }
            {data.type === "brands_list" &&
                <BrandList />
            }
            {data.type === "map" &&
                <MapBlock />
            }
            {data.type === "heading_text" &&
                <HeadingText />
            }
            {data.type === "testimonials" &&
                <Testimonials />
            }
        </>
    )
}
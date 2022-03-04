import { Box } from "@mui/system";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function Heroslider({ data, type }) {
    const slider = useRef(null)
    var settings = { ...data.settings }
    const prevslide = () => {
        slider.current.slickPrev()
    }
    const nextslide = () => {
        slider.current.slickNext()
    }
    return (
        <Box className={`${type === "hero" ? "hero_slider_outer" : "slider_outer"}`}>
            {data.settings.arrows &&
                <Button className="slick-arrows slick-arrows-prev" onClick={prevslide}>
                    <ArrowBackIosNewIcon fontSize="large" />
                </Button>
            }
            <Slider ref={slider} {...settings} className={`main_slider ${data.class}`}>
                {data.items.length > 0 && data.items.map((slide, index) => {
                    return (
                        <Box key={index.toString()} sx={{ position: 'relative' }}>
                            <img src={slide.image_src} alt="" className="img-fluid" />
                            <Link to={slide.link} className="hero_slider_inner">
                                <Container maxWidth="lg">
                                    <Box className={`hero_slider_content ${data.text_alignment}`}>
                                        <Box>
                                            <Typography variant="h2" component="div" sx={{ mb: 1 }}>
                                                {slide.heading}
                                            </Typography>
                                            <Typography variant="h5" component="div">
                                                {slide.subheading}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Container>
                            </Link>
                        </Box>
                    )
                })}
            </Slider>
            {data.settings.arrows &&
                <Button className="slick-arrows slick-arrows-next" onClick={nextslide}>
                    <ArrowForwardIosIcon fontSize="large" />
                </Button>
            }
        </Box>
    )
}
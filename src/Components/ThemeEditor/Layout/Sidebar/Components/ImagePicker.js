import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { PhotoCamera } from "@material-ui/icons";
import CheckIcon from '@mui/icons-material/Check';
import { Box } from "@mui/system";
import { Card, CardContent, Typography, CardMedia, CardActions, Button, TextField, Divider, IconButton, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";




export default function ImagePicker({ data, doneUpload, handleAltChange }) {
    const [itemData, setItemData] = useState([
        {
            img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
            title: 'Bed',
        },
        {
            img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
            title: 'Books',
        },
        {
            img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
            title: 'Sink',
        },
        {
            img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
            title: 'Kitchen',
        },
        {
            img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
            title: 'Blinds',
        },
        {
            img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
            title: 'Chairs',
        },
        {
            img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
            title: 'Laptop',
        },
        {
            img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
            title: 'Doors',
        },
        {
            img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
            title: 'Coffee',
        },
        {
            img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
            title: 'Storage',
        },
        {
            img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
            title: 'Candle',
        },
        {
            img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
            title: 'Coffee table',
        },
    ]);
    const [activeImage, setActiveImage] = useState("")
    const showUploader = (id) => {
        document.getElementById(id).classList.add("active")
    }
    const backToImage = (id) => {
        document.getElementById(id).classList.remove("active")
    }
    const Input = styled('input')({
        display: 'none',
    });

    const clickImage = (index, img) => {
        let newArr = []
        itemData.map((opt) => {
            newArr.push({ ...opt, 'current': false })
        })
        newArr[index].current = true
        setItemData(newArr)
        setActiveImage(img)
    }

    const handleImageChange = (e) => {
        let reader = new FileReader();
        let file = e.target.files[0];
        console.log("file: ", file)
        reader.onloadend = () => {
            setActiveImage(reader.result)
        }
        reader.readAsDataURL(file)
    }
    return (
        <Box sx={{ mb: 3 }}>
            <Box id={data.id} className="uploader_outer">
                <Card sx={{ pb: 1 }} className="pre_uploader">
                    <Box sx={{ p: 1 }}>
                        <CardMedia
                            component="img"
                            width={data.width}
                            image={data.value}
                            alt={data.alt}
                            sx={{ maxHeight: data.height, objectFit: "contain" }}
                        />
                    </Box>
                    <Divider sx={{ pt: 0, mb: 1 }} />
                    <CardContent sx={{ pt: 1 }}>
                        {data.note !== "" &&
                            <Typography variant="caption" component="div" sx={{ mb: 1 }}>
                                <i>{data.note}</i>
                            </Typography>
                        }
                        <TextField
                            label="Alt text"
                            defaultValue={data.alt}
                            onChange={(e)=>handleAltChange(e, data.alt_name)}
                            variant="outlined"
                            fullWidth
                            size="small"
                        />
                    </CardContent>
                    <CardActions sx={{ px: 2 }}>
                        <Button fullWidth variant="contained" onClick={() => showUploader(data.id)}>Change</Button>
                    </CardActions>
                </Card>
                <Card sx={{ p: 2 }} className="post_uploader">
                    <Box sx={{ display: 'flex', justifyContent: "space-between", width: "100%" }}>
                        <Button startIcon={<ArrowBackIcon />} onClick={() => backToImage(data.id)}>
                            Back
                        </Button>
                        <Button variant="contained" disabled={activeImage === "" ? true : false} onClick={() => doneUpload(data.id, activeImage)}>
                            Done
                        </Button>
                    </Box>
                    <Divider sx={{ pt: 1, mb: 1 }} />
                    <Box sx={{ border: "#ccc 2px dashed", textAlign: 'center', p: 1, cursor: 'pointer' }}>
                        <label htmlFor={`img_${data.id}`}>
                            <Input accept="image/*" id={`img_${data.id}`} type="file" onChange={handleImageChange} />
                            {activeImage === "" ?
                                <>
                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                        <PhotoCamera />
                                    </IconButton>
                                    <Typography variant="p" gutterBottom component="div">
                                        Upload new
                                    </Typography>
                                </>
                                :
                                <Box className="edit_selected_image">
                                    <PhotoCamera fontSize="large" />
                                    <img src={activeImage} alt="" className="img-fluid" />
                                </Box>
                            }
                        </label>
                    </Box>
                    <Box sx={{ width: '100%', height: 250, overflowY: 'scroll', my: 1 }}>
                        <ImageList variant="masonry" cols={3} gap={4} sx={{ mt: 0 }}>
                            {itemData.map((item, index) => (
                                <ImageListItem key={item.img} onClick={() => clickImage(index, item.img)}>
                                    <img
                                        src={`${item.img}?w=248&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                    {item.current &&
                                        <ImageListItemBar
                                            actionIcon={
                                                <IconButton
                                                    sx={{ color: '#fff', p: 0 }}
                                                    aria-label={`info about ${item.title}`}
                                                >
                                                    <CheckIcon />
                                                </IconButton>
                                            }
                                        />
                                    }
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>

                </Card>
            </Box>
        </Box>
    )
}
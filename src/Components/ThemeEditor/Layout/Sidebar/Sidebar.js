import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { Button, FormControl, Grid, MenuItem, Select } from "@mui/material";
import ThemeSettings from "./ThemeSettings";
import ActiveBlock from "./ActiveBlock";

export default function LayoutSidebar() {
    const params = new URLSearchParams(window.location.search)

    const navigate = useNavigate()
    const pages = [
        { name: "Home page", value: "home" },
        { name: "Product page", value: "product" },
        { name: "Category page", value: "category" },
        { name: "Category List page", value: "category_list" },
    ]
    const [showAll, setshowAll] = useState(true)
    const [showBlock, setshowBlock] = useState(false)
    const [current, setCurrent] = useState("home")
    const handleChange = (e) => {
        setCurrent(e.target.value)
    }

    useEffect(() => {
        if (params.get('context') !== null && params.get('type') == null) {
            setshowBlock(false)
            setshowAll(false)
        } else if (params.get('context') !== null && params.get('type') !== null) {
            setshowAll(false)
            setshowBlock(true)
        } else {
            setshowAll(true)
        }
    }, [params])

    const clickBlock = (name) => {
        setshowBlock(false)
        navigate(`?context=theme&type=${name}`)
    }
    const backToList = () => {
        setshowBlock(false)
        navigate('?context=theme')
    }
    const backToHome = () => {
        navigate('')
    }

    const goToSettings = (type) =>{
        if(type === 'themes'){
            backToList()
        }
    }

    return (
        <div className="layout_sidebar">
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ flexWrap: "nowrap", width: "100%" }}
            >
                <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 200 }}>
                    <Select
                        labelId="current-page"
                        onChange={handleChange}
                        value={current}
                        id="current-page-id"
                    >
                        {pages.map((page, index) => {
                            return (
                                <MenuItem key={index.toString()} sx={{ fontSize: "14px" }} value={page.value}>{page.name}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </Grid >
            <div className="layout_sidebar_container">
                {showAll ?
                    <Button onClick={()=>goToSettings('themes')}>
                        Theme settings
                    </Button>
                    :
                    <>
                        {!showBlock ?
                            <ThemeSettings
                                clickBlock={clickBlock}
                                backToHome={backToHome}
                            />
                            :
                            <ActiveBlock
                                backToList={backToList}
                            />
                        }
                    </>
                }
            </div>
        </div>
    )
}
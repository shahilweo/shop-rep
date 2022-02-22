import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { Button, FormControl, Grid, MenuItem, Select } from "@mui/material";
import ThemeSettings from "./ThemeSettings";
import ActiveBlock from "./ActiveBlock";
import { Box } from "@mui/system";
import CurrentBlock from "./CurrentBlock/CurrentBlock";

export default function LayoutSidebar() {
    const params = new URLSearchParams(window.location.search)

    const navigate = useNavigate()
    const [showAll, setshowAll] = useState(true)
    const [showBlock, setshowBlock] = useState(false)
    const [showSection, setshowSection] = useState(false)

    useEffect(() => {
        if (params.get('context') !== null && params.get('type') == null) {
            setshowBlock(false)
            setshowAll(false)
        } else if (params.get('context') !== null && params.get('type') !== null) {
            setshowAll(false)
            setshowBlock(true)
        } else {
            setshowAll(true)
            setshowSection(false)
        }
    }, [params])

    const clickBlock = (name) => {
        setshowBlock(false)
        navigate(`?context=theme&type=${name}`)
    }
    const backToHome = () => {
        navigate('')
    }

    const openSection = (name) => {
        setshowSection(true)
        navigate(`?context=page&type=${name}`)
    }

    const goToSettings = (type) => {
        if (type === 'themes') {
            navigate(`?context=theme`)
        }
    }

    return (
        <div className="layout_sidebar">
            {/* <Grid
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
            </Grid > */}
            <div className="layout_sidebar_container">
                {showAll ?
                    <>
                        <Box className="layout_sidebar_sections">
                            {!showSection ?
                                <CurrentBlock
                                    openSection={openSection}
                                />
                                :
                                <ActiveBlock />
                            }
                        </Box>
                        <Button onClick={() => goToSettings('themes')} className="themesetting_btn" variant="outlined">
                            Theme settings
                        </Button>
                    </>
                    :
                    <>
                        {!showBlock ?
                            <ThemeSettings
                                clickBlock={clickBlock}
                            />
                            :
                            <ActiveBlock />
                        }
                    </>
                }
            </div>
        </div>
    )
}
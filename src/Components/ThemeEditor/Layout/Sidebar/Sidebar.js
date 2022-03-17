import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { Button, Paper, Grid, Typography } from "@mui/material";
import ThemeSettings from "./ThemeSettings";
import ActiveBlock from "./ActiveBlock";
import { Box } from "@mui/system";
import CurrentBlock from "./CurrentBlock/CurrentBlock";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import schema from "../../../../Container/schema";
import SectionIcons from "./Components/SectionIcons";

export default function LayoutSidebar() {
    const params = new URLSearchParams(window.location.search)

    const navigate = useNavigate()
    const [showAllSections, setshowAllSections] = useState(false)
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
            <div className="layout_sidebar_container">
                {showAllSections ?
                    <Box>
                        <Button startIcon={<ArrowBackIcon />} sx={{ mb: 1, textTransform: "uppercase" }} onClick={() => setshowAllSections(false)}>
                            Back
                        </Button>
                        <Grid container spacing={2}>
                            {schema.blocks.list.length > 0 && schema.blocks.list.map((opt, index) => {
                                let activeName = schema.components[opt].name
                                return (
                                    <Grid item xs={6} key={index.toString()}>
                                        <Paper sx={{ minHeight: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }} elevation={3}>
                                            <Button sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }} fullWidth>
                                                <SectionIcons type={opt} />
                                                {activeName}
                                            </Button>
                                        </Paper>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Box>
                    :
                    <>
                        {showAll ?
                            <>
                                <Box className="layout_sidebar_sections">
                                    <Box sx={{ py: 1 }}>
                                        <Button fullWidth onClick={() => setshowAllSections(true)} variant="outlined">
                                            <AddCircleOutlineIcon fontSize="small" sx={{ mr: 1 }} /> Add new section
                                        </Button>
                                    </Box>
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
                    </>
                }
            </div>
        </div>
    )
}
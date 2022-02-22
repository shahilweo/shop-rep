import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import setting from "../../../../Container/setting-schema";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box } from "@mui/system";
import { renderFn } from "../../../../Container/Exports";
import _ from "underscore";

export default function ActiveBlock({ backToList }) {
    const navigate = useNavigate()
    const params = new URLSearchParams(window.location.search)
    const [activeBlock, setActiveBlock] = useState({})
    useEffect(()=>{
        let activeData = setting.filter((opt) => opt.type == params.get('type'))[0]
        if(!_.isEmpty(activeData)){
            setActiveBlock(activeData)
        }else{
            navigate('/customizer')
        }
    }, [])
    

    return (
        <Box className="activeBlock_outer">
            <Button startIcon={<ArrowBackIcon />} sx={{ mb: 1, textTransform: "uppercase" }} onClick={() => navigate(-1)}>
                {!_.isEmpty(activeBlock) && activeBlock.name}
            </Button>
            <Box>
                {!_.isEmpty(activeBlock) && activeBlock.settings.map((data, index) => {
                    return (
                        <Box key={index.toString()}>
                            {renderFn(data)}
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}
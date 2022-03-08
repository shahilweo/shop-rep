import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import setting from "../../../../Container/setting-schema";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box } from "@mui/system";
import RenderFn from "../../../../Container/Exports";
import _ from "underscore";

export default function ActiveBlock() {
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
    }, [activeBlock])
    // console.log("activeBlock: ", activeBlock)

    return (
        <Box className="activeBlock_outer">
            <Button startIcon={<ArrowBackIcon />} sx={{ mb: 1, textTransform: "uppercase" }} onClick={() => params.get('context') === "theme" ? navigate(-1) : navigate('')}>
                {!_.isEmpty(activeBlock) && activeBlock.name}
            </Button>
            <Box>
                {!_.isEmpty(activeBlock) && activeBlock.settings.map((data, index) => {
                    return (
                        <Box key={index.toString()}>
                            <RenderFn data={data} />
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}
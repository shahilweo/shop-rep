import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import setting from "../../../../Container/setting-schema";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box } from "@mui/system";
import { renderFn } from "../../../../Container/Exports";

export default function ActiveBlock({ backToList }) {
    console.log("setting: ", setting)
    const params = new URLSearchParams(window.location.search)
    const activeBlock = setting.filter((opt) => opt.type == params.get('type'))[0]
    console.log("activeBlock: ", activeBlock)


    return (
        <Box className="activeBlock_outer">
            <Button startIcon={<ArrowBackIcon />} sx={{ mb: 1, textTransform: "uppercase" }} onClick={backToList}>
                {activeBlock.name}
            </Button>
            <Box>
                {activeBlock.settings.map((data, index) => {
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
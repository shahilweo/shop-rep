import React from "react";
import { Box, Typography } from "@mui/material";
import MiniEditor from "../../../../common/CustomEditor/MiniEditor";

export default function TextEditor({ data, editorState, updateTextDescription }) {
    return (
        <Box sx={{ pb: 3 }}>
            <Typography variant="caption" component="div" sx={{ p: "0 0 0 10px", mb: 0, display: "block" }}>
                {data.label}
            </Typography>
            <MiniEditor
                editorState={editorState}
                updateTextDescription={(e)=>updateTextDescription(e, data.name)}
            />
        </Box>
    )
}
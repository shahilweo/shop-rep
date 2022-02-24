import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles'
import MUIRichTextEditor from 'mui-rte';
import { Box, Typography } from "@mui/material";

export default function TextEditor({ data }) {
    const myTheme = createTheme()
    Object.assign(myTheme, {
        overrides: {
            MUIRichTextEditor: {
                root: {
                    marginTop: 0,
                    width: "100%",
                    border: "1px solid rgba(0, 0, 0, 0.23)",
                    borderRadius: 3
                },
                container: {
                },
                editor: {
                    borderTop: "1px solid rgba(0, 0, 0, 0.23)",
                    minHeight: 120,
                    maxHeight: 200,
                    overflow: 'hidden',
                    overflowY: 'auto'
                },
                editorContainer: {
                    padding: "10px 15px 30px",
                }
            }
        }
    })
    return (
        <Box sx={{pb:3}}>
            <Typography variant="caption" component="div" sx={{ p: "0 0 0 10px", mb:0, display: "block" }}>
                {data.label}
            </Typography>
            <ThemeProvider theme={myTheme} >
                <MUIRichTextEditor
                    label="Type something here..."
                    controls={["bold", "italic", "underline", "strikethrough", "link"]}
                    inlineToolbar={true} />
            </ThemeProvider>
        </Box>
    )
}
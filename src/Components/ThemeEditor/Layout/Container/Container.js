import React, { useState } from "react";
import { Box, Paper } from "@mui/material";
import schema from "../../../../Container/schema";
import BlockRenderFn from "./Exports";

export default function LayoutContainer() {
    const [sectionSchema, setsectionSchema] = useState(schema)
    return (
        <div className="layout_container">
            <Paper className="layout_card">
                {sectionSchema.blocks.active.length > 0 && sectionSchema.blocks.active.map((opt, index) => {
                    let activeData = sectionSchema.components[opt]
                    console.log("activeData: ", activeData)
                    return (
                        <Box key={index.toString()}>
                            <BlockRenderFn
                                type={opt}
                                data={activeData}
                            />
                        </Box>
                    )
                })}
            </Paper>
        </div>
    )
}
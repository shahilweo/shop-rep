import React from "react";
import { TextField } from "@mui/material";

export default function TextFields({data}) {
    return (
        <TextField
            label={data.label}
            defaultValue={data.value}
            variant="outlined"
            fullWidth
            type={data.type}
            name={data.id}
            placeholder={data.placeholder}
            sx={{ mb: 2 }}
        />
    )
}
import React from "react";
import { TextField } from "@mui/material";

export default function TextFields({ data, handleInputChange }) {
    return (
        <TextField
            label={data.label}
            defaultValue={data.value}
            variant="outlined"
            fullWidth
            type={data.type}
            name={data.name}
            placeholder={data.placeholder}
            sx={{ mb: 2 }}
            onChange={handleInputChange}
        />
    )
}
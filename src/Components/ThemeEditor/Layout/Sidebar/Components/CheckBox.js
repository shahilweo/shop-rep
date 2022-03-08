import React from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

export default function CheckBox({ data, handleCheckboxChange }) {
    return (
        <FormGroup sx={{ mb: 1 }}>
            <FormControlLabel
                value={data.value}
                name={data.name}
                control={
                    <Checkbox
                        checked={data.value}
                        onChange={(e) => handleCheckboxChange(e, data.id)}
                    />
                }
                label={data.label}
            />
        </FormGroup>
    )
}
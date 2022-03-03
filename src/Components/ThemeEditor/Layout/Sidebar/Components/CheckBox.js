import React from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

export default function CheckBox({ data }) {
    return (
        <FormGroup sx={{mb:1}}>
            <FormControlLabel control={<Checkbox checked={data.value} />} label={data.label} />
        </FormGroup>
    )
}
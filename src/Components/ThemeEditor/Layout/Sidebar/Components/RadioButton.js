import React from "react";
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";

export default function RadioButton({ data }) {
    return (
        <FormControl>
            <RadioGroup
                aria-labelledby={data.id}
                name={data.name}
                value={data.value}
            >
                <FormControlLabel value={data.value} control={<Radio checked={data.value} />} label={data.label} />
            </RadioGroup>
        </FormControl>
    )
}
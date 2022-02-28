import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function SelectBox({ data }) {
    return (
        <FormControl fullWidth sx={{mb:2}}>
            {data.label !== "" &&
                <InputLabel>{data.label}</InputLabel>
            }
            <Select
                id={data.id}
                value={data.current}
                label={data.label}
            >
                {data.items.length > 0 && data.items.map((val, index) => {
                    return (
                        <MenuItem value={val.value} key={index.toString()}>{val.name}</MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    )
}
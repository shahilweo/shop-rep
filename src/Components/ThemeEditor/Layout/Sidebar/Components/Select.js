import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function SelectBox({ data, handleSelectChange }) {
    return (
        <FormControl fullWidth sx={{mb:2}}>
            {data.label !== "" &&
                <InputLabel>{data.label}</InputLabel>
            }
            <Select
                id={data.name}
                value={data.value}
                label={data.label}
                onChange={(e)=>handleSelectChange(e, data.name)}
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
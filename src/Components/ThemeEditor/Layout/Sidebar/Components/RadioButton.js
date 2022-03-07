import React from "react";
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";

export default function RadioButton({ data, handleRadioChange }) {
    return (
        <RadioGroup
            name={data.name}
        >
            {data.options.length > 0 && data.options.map((opt, index) => {
                return (
                    <FormControlLabel
                        key={index.toString()}
                        value={opt.value}
                        control={
                            <Radio
                                checked={opt.checked}
                                onChange={(e) => handleRadioChange(e, opt.id)}
                            />
                        }
                        label={opt.label}
                    />
                )
            })}
        </RadioGroup>
    )
}
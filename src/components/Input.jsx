import React from 'react'
import TextField from '@mui/material/TextField';

const Input = ({
    label,
    type = 'text',
    onChange,
    value,
    sx,
}) => {
    return (
        <>
            <TextField
                id="outlined-basic"
                variant="outlined"
                label={label}
                type={type}
                onChange={onChange}
                value={value}
                sx={sx} />
        </>
    )
}

export default Input;
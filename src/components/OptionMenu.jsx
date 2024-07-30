import React from 'react';
import { TextField, MenuItem } from '@mui/material';

const categories = [
    'No Filter', 'Add Balance', 'Food', 'Shopping', 'Entertainment',
    'Electronics', 'Bill', 'Fee', 'Travel', 'Other'
];

const OptionMenu = ({
    label,
    value,
    onChange,
    sx
}) => {
    return (
        <TextField
            select
            label={label}
            value={value}
            onChange={onChange}
            variant="outlined"
            sx={sx}
        >
            {categories.map((category) => (
                <MenuItem key={category} value={category}>
                    {category}
                </MenuItem>
            ))}
        </TextField>
    );
};

export default OptionMenu;

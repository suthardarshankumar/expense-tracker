import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({
    btnName,
    onClick,
    type = "button",
    variant,
    sx
}) => {
    return (
        <>
            <Button
                onClick={onClick}
                type={type}
                variant={variant}
                sx={sx}>
                {btnName}
            </Button>
        </>
    );
};

export default CustomButton;

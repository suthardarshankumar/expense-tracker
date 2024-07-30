import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'rgb(6 182 212)' }}>
            <Toolbar>
                <Typography variant="h6" sx={{ fontSize: '24px' }}>
                    Expense Tracker
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

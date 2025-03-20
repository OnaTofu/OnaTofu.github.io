import React from 'react';
import {Box, Button, Grid2, Typography} from '@mui/material';
import './Menu.scss';

/**
 * Component for navigation menu
 */
const Menu: React.FC = () => {
    return (
        <div className='navigation-section'>
            <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
            <Grid2 width='10%' className='button-section' container>
                <Grid2 size={{xs: 6}}>
                <Button><Typography className='button'>Home</Typography></Button>
                </Grid2>
                <Grid2 size={{xs: 6}}>
                <Button><Typography className='button'>My Work</Typography></Button>
                </Grid2>
            </Grid2>
            </Box>
        </div>
    )
}

export default Menu
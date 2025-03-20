import React from 'react';
import { Box, Typography } from '@mui/material';
import './Banner.scss';

/**
 * COmponent for logo banner
 */
const Banner: React.FC = () => {
    return (
        <div className="logo-banner-section">
            <Box sx={{ width: '100%' }}>
                <Typography className='logo' variant="h4" gutterBottom>
                    OnaTofu
                </Typography>
            </Box>
        </div>
    );
};

export default Banner;

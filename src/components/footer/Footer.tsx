import React from 'react';
import { Box, Typography } from '@mui/material';
import './Footer.scss';

const Footer: React.FC = () => {
    return(
        <div className="footer-section">
        <Box sx={{ width: '100%' }}>
            <Typography className='copywrite' variant="body1" gutterBottom>
            ©  {new Date().getFullYear()} OnaTofu
            </Typography>
        </Box>
    </div>
    )
}

export default Footer;
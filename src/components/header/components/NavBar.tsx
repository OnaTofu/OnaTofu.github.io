import React, { useState } from 'react';
import { Box, Button, Grid, Menu, MenuItem, MenuProps, Typography, styled } from '@mui/material';
import './NavBar.scss';

/**
 * Styling for menu
 */
const StyledMenu = styled((props: MenuProps) => <Menu {...props} />)(({}) => ({
    '& .MuiPaper-root': {
        borderRadius: 10,
        minWidth: 150,
        color: 'rgb(255, 255, 255)',
        backgroundColor: 'rgb(45,45,45)',
        '& .MuiMenuItem-root': {
            fontFamily: 'HugolersStylish, Helvetica, Arial, sans-serif',
            '&:hover': {
                backgroundColor: 'rgb(225, 182, 121)',
            },
        },
    },
}));

/**
 * Component for navigation menu
 */
const NavBar: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="navigation-section">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Grid width="10%" className="button-section" container>
                    <Grid size={{ xs: 6 }}>
                        <Button>
                            <Typography className="button">Home</Typography>
                        </Button>
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            className="button"
                        >
                            <Typography className="button">My Art</Typography>
                        </Button>
                        <StyledMenu
                            className="dropdown"
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Pixel Art</MenuItem>
                            <MenuItem onClick={handleClose}>3D Art</MenuItem>
                            <MenuItem onClick={handleClose}>2D Art</MenuItem>
                        </StyledMenu>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default NavBar;

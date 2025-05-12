import React, { useState } from 'react';
import { Box, Button, Grid, IconButton, Menu, MenuItem, MenuProps, Typography, SvgIcon, styled } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
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
                <Grid width="20%" className="button-section" container>
                    <Grid size={{ xs: 4 }}>
                        <Button>
                            <Typography className="button">Home</Typography>
                        </Button>
                    </Grid>
                    <Grid size={{ xs: 4 }}>
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
                    <Grid size={{ xs: 2 }}>
                        <IconButton
                            aria-label="instagram"
                            size="medium"
                            href="https://www.instagram.com/leoatard?igsh=cmtxZ254aWptNmM4"
                            target="_blank"
                        >
                            <InstagramIcon fontSize="medium" sx={{ color: 'white' }} />
                        </IconButton>
                    </Grid>
                    <Grid size={{ xs: 2 }}>
                        <IconButton
                            aria-label="art-station"
                            size="medium"
                            href="https://www.artstation.com/leea_t"
                            target="_blank"
                        >
                            <SvgIcon>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="100"
                                    height="100"
                                    viewBox="0,0,256,256"
                                >
                                    <g
                                        fill="#ffffff"
                                        fillRule="nonzero"
                                        stroke="none"
                                        strokeWidth="1"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        strokeMiterlimit="10"
                                        strokeDasharray=""
                                        strokeDashoffset="0"
                                        fontFamily="none"
                                        fontWeight="none"
                                        fontSize="none"
                                        textAnchor="none"
                                    >
                                        <g transform="scale(5.33333,5.33333)">
                                            <path d="M2.141,34l3.771,6.519l0.001,0.001c0.743,1.471 2.267,2.48 4.027,2.48h0.003v0h25.03l-5.194,-9zM45.859,34.341c0,-0.872 -0.257,-1.683 -0.697,-2.364l-14.185,-24.658c-0.732,-1.379 -2.183,-2.319 -3.853,-2.319h-7.496l21.91,37.962l3.454,-5.982c0.681,-1.145 0.867,-1.652 0.867,-2.639zM25.838,28l-9.793,-16.962l-9.793,16.962z"></path>
                                        </g>
                                    </g>
                                </svg>
                            </SvgIcon>
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default NavBar;

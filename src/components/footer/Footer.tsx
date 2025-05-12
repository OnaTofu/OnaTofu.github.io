import React from 'react';
import { Box, Grid, IconButton, SvgIcon, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.scss';

const Footer: React.FC = () => {
    return (
        <div className="footer-section">
            <Box sx={{ width: '100%' }}>
                <div className="socials">
                    <Grid width="5%" container>
                        <Grid size={{ xs: 6 }}>
                            <IconButton
                                aria-label="instagram"
                                size="medium"
                                href="https://www.instagram.com/leoatard?igsh=cmtxZ254aWptNmM4"
                                target="_blank"
                            >
                                <InstagramIcon fontSize="medium" sx={{ color: 'white' }} />
                            </IconButton>
                        </Grid>
                        <Grid size={{ xs: 6 }}>
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
                </div>
                <Typography className="copywrite" variant="body1" gutterBottom>
                    © {new Date().getFullYear()} OnaTofu
                </Typography>
            </Box>
        </div>
    );
};

export default Footer;

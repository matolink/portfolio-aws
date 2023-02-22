import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import useStyles from '../styles/styles';

const Footer = () => {
  const date = new Date().getFullYear();
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.footerContainer}>
      <Typography className={classes.footerText}>
        Contáctanos en:{' '} 
        <Link href="https://www.instagram.com/goarte.estampados" target="_blank" underline="none">
            Goarte Instagram
        </Link>
      </Typography>
      <Typography className={classes.footerDate}>Open-Source - Buit with MUI</Typography>
    </Box>
  );
};

export default Footer;
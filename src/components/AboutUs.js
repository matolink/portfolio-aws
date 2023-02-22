import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import bestTeams from '../images/bestTeams.jpg';
import useStyles from '../styles/styles';

const AboutUs = () => {
  const classes = useStyles();

  return (
    <Box className={classes.aboutUsContainer}>
      <Grid container spacing={6} className={classes.gridContainer}>
        <Grid item xs={12} md={5}>
          <img src={bestTeams} alt="My Team" className={classes.largeImage} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight={700} className={classes.title}>
            Goarte Estampados!
          </Typography>
          <Typography className={classes.aboutUsSubtitle}>
            Empresa con enfoque en los ilustradores
            esperamos que junto a nuestro equipo de diseñadores puedas
            encontrar el color y tonalidad que desees
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
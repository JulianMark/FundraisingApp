import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { DonationDetail, ResultMessage } from './components';
import { getResponse, selectError } from '../../redux/reducers/donationreducer'; 
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}));

const Donation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        justify="center"
        alignContent ="center"
        alignItems = "center" 
      >
        <Grid
          item
          lg={8}
          md={6}
          xl={12}
          xs={12}
        >
          <DonationDetail />
        </Grid>
        <Grid
          item
          lg={8}
          md={6}
          xl={12}
          xs={12}
        >
          <ResultMessage/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Donation;
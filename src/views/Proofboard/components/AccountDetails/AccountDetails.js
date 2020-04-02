import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField
} from '@material-ui/core';

import { obtainLocationList, obtainIdLocation } from '../../../../redux/reducers/campaignreducer';
import { obtainLocations, changeLocation } from '../../../../redux/actions/campaignActions';

const useStyles = makeStyles(() => ({
  root: {}
}));

const AccountDetails = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const locations = useSelector(obtainLocationList);
  const locationId = useSelector(obtainIdLocation);

  const dispatch = useDispatch();
  
  React.useEffect(() => {
    if (!locations.length) {
      dispatch(obtainLocations());
    }
  }, [locations, dispatch]);

  React.useEffect(() => {
    if (locations.length && locationId === "") {
        dispatch(changeLocation(locations[0].id));
    }
  }, [dispatch, locationId, locations]);

  const handleLocationChange = event => {
    dispatch(changeLocation(event.target.value));
  } 

  const [values, setValues] = useState({
    location: 'Cordoba',
    osc: 'Soles',
    campaignType: 'f2f',
    campaignModality: 'via publica',
    campaignName: 'TT',
    goal: '100',
    coach: 'Dani',
    teamLeader: 'vo'
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form
        autoComplete="off"
        noValidate
      >
        <CardHeader
          subheader="Información de la campaña"
          title="Campaña"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={4}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Seleccione la plaza"
                label="Plaza"
                margin="dense"
                name="location"
                onChange={handleLocationChange}
                required
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                value={locationId}
                variant="outlined"
              >
                {locations.map(option => (
                  <option
                    key={option.id}
                    value={option.description}
                  >
                    {option.description}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Seleccione la OSC"
                label="OSC"
                margin="dense"
                name="osc"
                onChange={handleChange}
                required
                value={values.osc}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <TextField
                fullWidth
                helperText= "Seleccione tipo de campaña"
                label="Tipo de campaña"
                margin="dense"
                name="campaignType"
                onChange={handleChange}
                required
                value={values.campaignType}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText= "Seleccione modalidad de campaña"
                label="Modalidad de campaña"
                margin="dense"
                name="campaignModality"
                onChange={handleChange}
                value={values.campaignModality}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText= "Ingrese la meta de campaña"
                label="Meta de campaña"
                margin="dense"
                name="goal"
                onChange={handleChange}
                value={values.goal}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                helperText= "Ingrese nombre de campaña"
                label="Nombre de campaña"
                margin="dense"
                name="campaignName"
                onChange={handleChange}
                value={values.campaignName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText= "Ingrese al coordinador de campaña"
                label="Coordinador de campaña"
                margin="dense"
                name="coach"
                onChange={handleChange}
                value={values.coach}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText= "Ingrese Team Leader de campaña"
                label="Team leader de campaña"
                margin="dense"
                name="teamLeader"
                onChange={handleChange}
                value={values.teamLeader}
                variant="outlined"
              />
            </Grid>
            {/* <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Select State"
                margin="dense"
                name="state"
                onChange={handleGenderChange}
                required
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                value={genderId}
                variant="outlined"
              >
                {genderList.map(option => (
                  <option
                    key={option.id}
                    value={option.description}
                  >
                    {option.description}
                  </option>
                ))}
              </TextField>
            </Grid> */}
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="contained"
          >
            Save details
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

AccountDetails.propTypes = {
  className: PropTypes.string
};

export default AccountDetails;

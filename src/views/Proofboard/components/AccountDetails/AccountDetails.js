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

import { obtainLocationList, obtainIdLocation,
   obtainOscList, obtainIdOsc, 
   obtainCampaignTypesList, obtainIdCampaignType, 
   obtainCampaignModalitiesList, obtainIdCampaignModalityId } from '../../../../redux/reducers/campaignreducer';
import { obtainLocations, changeLocation,
   obtainOscs, changeOsc, 
   obtainCampaignTypes, changeCampaignType, 
   obtainCampaignModalities, changeCampaignModality } from '../../../../redux/actions/campaignActions';

const useStyles = makeStyles(() => ({
  root: {}
}));

const AccountDetails = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const locations = useSelector(obtainLocationList);
  const locationId = useSelector(obtainIdLocation);
  const oscs = useSelector(obtainOscList);
  const oscId = useSelector(obtainIdOsc);
  const campaignTypes = useSelector(obtainCampaignTypesList);
  const campaingTypeId = useSelector(obtainIdCampaignType);
  const campaignModalities = useSelector(obtainCampaignModalitiesList);
  const campaignModalityId = useSelector(obtainIdCampaignModalityId);

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

  React.useEffect(() => {
    if (!oscs.length) {
      dispatch(obtainOscs());
    }
    console.log(oscs)
  }, [oscs, dispatch]);

  React.useEffect(() => {
    if (oscs.length && oscId  === "") {
        dispatch(obtainOscs(oscs[0].id));
    }
  }, [dispatch, oscId , oscs]);

  React.useEffect(() => {
    if (!campaignTypes.length) {
      dispatch(obtainCampaignTypes());
    }
  }, [campaignTypes, dispatch]);

  React.useEffect(() => {
    if (campaignTypes.length && campaingTypeId === "") {
        dispatch(obtainCampaignTypes(campaignTypes[0].id));
    }
  }, [dispatch, campaingTypeId, campaignTypes]);

  React.useEffect(() => {
    if (!campaignModalities.length) {
      dispatch(obtainCampaignModalities());
    }
  }, [campaignModalities, dispatch]);

  React.useEffect(() => {
    if (campaignModalities.length && campaignModalityId === "") {
        dispatch(obtainCampaignModalities(campaignModalities[0].id));
    }
  }, [dispatch, campaignModalityId, campaignModalities]);

  const handleLocationChange = event => {
    dispatch(changeLocation(event.target.value));
  } 

  const handleOscChange = event => {
    dispatch(changeOsc(event.target.value));
  } 

  const handleCampaignTypeChange = event => {
    dispatch(changeCampaignType(event.target.value));
  }

  const handleCampaignModalityChange = event => {
    dispatch(changeCampaignModality(event.target.value));
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
                helperText="Seleccione OSC"
                label="OSC"
                margin="dense"
                name="OSC"
                onChange={handleOscChange}
                required
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                value={oscId}
                variant="outlined"
              >
                {oscs.map(option => (
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
                helperText="Seleccione tipo de campaña"
                label="Tipo de campaña"
                margin="dense"
                name="campaignType"
                onChange={handleCampaignTypeChange}
                required
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                value={campaingTypeId}
                variant="outlined"
              >
                {campaignTypes.map(option => (
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
                helperText="Seleccione modalidad de campaña"
                label="Modalidad de campaña"
                margin="dense"
                name="campaignModality"
                onChange={handleCampaignModalityChange}
                required
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                value={campaignModalityId}
                variant="outlined"
              >
                {campaignModalities.map(option => (
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

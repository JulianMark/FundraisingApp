import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/styles';
import {
  Card,
  //CardActions,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Divider,
  Button,
  InputAdornment,
} from '@material-ui/core';

import { GenderListTextField, DniTextField } from '../../../CommonComponents';

import { changeName, changeLastname, changeAge } from '../../../../redux/actions/donationActions';
import { obtainIdGender } from '../../../../redux/reducers/commonreducers/gendersreducer';
import { getDni } from '../../../../redux/reducers/commonreducers/dnireducer';
import {
    getAmount,
    getName,
    getLastname,
    getAge,
} from '../../../../redux/reducers/donationreducer';
import { obtainPayType, obtainPayTypesList } from '../../../../redux/reducers/paytypesreducer';
import {changePayType, obtainPayTypes } from '../../../../redux/actions/payTypesActions';
import { changeAmount, donationRequest } from '../../../../redux/actions/donationActions';
import { getEmployeeId, getCampaignId } from '../../../../redux/reducers/sessionreducer';



const useStyles = makeStyles(theme => ({
  root: {},
  details: {
    display: 'flex'
  },
  avatar: {
    marginLeft: 'auto',
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0
  },
  progress: {
    marginTop: theme.spacing(2)
  },
  uploadButton: {
    marginRight: theme.spacing(2)
  }
}));

const DonationDetail = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const amount = useSelector(getAmount);
  const genderId = useSelector(obtainIdGender);
  const name = useSelector(getName);
  const lastname = useSelector(getLastname);
  const age = useSelector(getAge);
  const dni = useSelector(getDni);
  const payTypeList = useSelector(obtainPayTypesList);
  const payType = useSelector(obtainPayType);
  const idEmployee = useSelector(getEmployeeId);
  const idCampaign = useSelector(getCampaignId);


  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!payTypeList.length) {
      dispatch(obtainPayTypes());
    }
  }, [payTypeList, dispatch]);

  const handlePayTypesChange = event => {
    dispatch(changePayType(event.target.value));
  }

  const handleAmountChange = event => {
    dispatch(changeAmount(event.target.value));
  }
  
  const handleAgeChange = event => {
    dispatch(changeAge(event.target.value));
  }

  const handleNameChange = event => {
    dispatch(changeName(event.target.value));
  }

  const handleLastnameChange = event => {
    dispatch(changeLastname(event.target.value));
  }

  const actionButton = () => {
    if(dni === "" || age ==="" || name === "" || lastname ==="" || amount ===""){
      return true;
    }
    return false;
  }

  const validateAge = () => {
    if (age !=="" && (age < 18 || age > 100)){
      return false;
    }
    return true;
  }

  const handleAddClick = () => {
    let request = {
      "age": age,
      "amount": amount,
      "dni": dni,
      "gender": genderId,
      "idCampaign": idCampaign,
      "idEmployee": idEmployee,
      "lastName": lastname,
      "name": name,
      "payType": payType,
    }
    console.log(request);
    dispatch(donationRequest(request));
  }

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
        title="Datos del donante"
      />
      <Divider />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item md={4} xs={12}>
            <DniTextField/>
          </Grid>
          <Grid item md={4} xs={12}>
            <GenderListTextField/>
          </Grid>
          <Grid 
            item
            md={4}
            xs={12}
          >
            <TextField 
              error = {!validateAge()}
              variant="outlined"
              required
              fullWidth
              helperText={ validateAge() ? "Ingrese edad" : "Ingresa una edad entre 18 y 100"}
              label={ validateAge() ? "Edad" : "Error" }
              type="number"
              name="age"
              size="small"
              margin="dense"
              onChange= {handleAgeChange}
              value= {age}
            />
          </Grid>
          <Grid 
            item
            md={6}
            xs={12}
          >
            <TextField 
              helperText="Ingrese nombre del donante"
              variant="outlined"
              required
              fullWidth
              label="Nombre"
              type="text"
              size="small"
              margin="dense"
              onChange= {handleNameChange}
              value= {name}
            />
          </Grid>
          <Grid 
            item
            md={6}
            xs={12}
          >
            <TextField 
              helperText="Ingrese apellido del donante"
              variant="outlined"
              required
              fullWidth
              label="Apellido"
              type="text"
              size="small"
              margin="dense"
              onChange= {handleLastnameChange}
              value= {lastname}
            />
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <CardHeader
          title="Datos de la donación"
      />
      <Divider />
      <CardContent>
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextField
              fullWidth
              helperText="Seleccione medio de pago"
              label="Medio de pago"
              margin="dense"
              name="state"
              onChange={handlePayTypesChange}
              required
              select
              // eslint-disable-next-line react/jsx-sort-props
              SelectProps={{ native: true }}
              value={payType}
              variant="outlined"
            >
              {payTypeList.map(option => (
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
              helperText="Ingrese monto de donación"
              margin="dense"
              label="Monto"
              variant="outlined"
              type="number"
              onChange={handleAmountChange}
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
              SelectProps={{ native: true }}
              value={amount}
            />
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <CardContent>
        <Grid
          container
          spacing={1}
          justify="center"
          alignItems="center"
        >
          <Grid>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddClick}
              disabled={false}//{actionButton()}
            >
              Aceptar
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </form>
  </Card>
  );
};

DonationDetail.propTypes = {
  className: PropTypes.string
};

export default DonationDetail;

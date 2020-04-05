import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import { 
    Grid, TextField, Button, Container, CssBaseline
}from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TelegramIcon from '@material-ui/icons/Telegram';

import * as addDonationActions from '../../redux/actions/donationActions';
import * as gendersActions from '../../redux/actions/gendersActions';
import * as payTypesActions from '../../redux/actions/payTypesActions';

const {
    changeGender: changeGenderText,
    obtainGenders: changeGendersText
} = gendersActions;

const classes = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));

class Form extends Component {

    componentDidMount() {
        this.props.changeGendersText();
        this.props.obtainPayTypes();
    }

    onNameChange = (e) => {
        this.props.changeName(e.target.value);
    } 

    onLastnameChange = (e) => {
        this.props.changeLastname(e.target.value);
    }

    onAgeChange = (e) => {
        this.props.changeAge(e.target.value);
    }

    onGenderChange = (e) => {
        this.props.changeGenderText(e.target.value);
    }

    onDniChange = (e) => {
        this.props.changeDni(e.target.value);
    }

    onAmountChange = (e) => {
        this.props.changeAmount(e.target.value);
    }

    onPayTypeChange = (e) => {
        this.props.changePayType(e.target.value);
    }

    onSubmit= (e) => {
        e.preventDefault();
        let request = {
            "age": this.props.addDonationReducer.age,
            "amount": this.props.addDonationReducer.amount,
            "dni": this.props.addDonationReducer.dni,
            "gender": this.props.gendersReducer.gender,
            "idCampaign": this.props.addDonationReducer.idCampaign,
            "idEmployee": this.props.addDonationReducer.idEmployee,
            "lastName": this.props.addDonationReducer.lastname,
            "name": this.props.addDonationReducer.name,
            "payType": this.props.payTypesReducer.payType,
        }
        console.log(request);
        this.props.addDonation(request);
        this.props.reloadForm();
    }

    render(){
        console.log(this.props)
        return <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
        <form className={classes.form} noValidate onSubmit={this.onSubmit}>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField 
                    autoFocus
                    variant="outlined"
                    required
                    fullWidth
                    label="Nombre"
                    type="text"
                    name="name"
                    size="small"
                    onChange= {this.onNameChange}
                    value= {this.props.addDonationReducer.name}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField 
                    variant="outlined"
                    required
                    fullWidth
                    label="Apellido"
                    type="text"
                    name="name"
                    size="small"
                    onChange= {this.onLastnameChange}
                    value= {this.props.addDonationReducer.lastname}
                />
            </Grid> 
            <Grid item xs={12} sm={3}>
                <TextField 
                    variant="outlined"
                    required
                    fullWidth
                    label="Edad"
                    type="number"
                    name="age"
                    size="small"
                    onChange= {this.onAgeChange}
                    value= {this.props.addDonationReducer.age}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField 
                    variant= "outlined" 
                    required
                    fullWidth
                    label="D.N.I"
                    type="number"
                    name="dni"
                    size="small"
                    onChange= {this.onDniChange}
                    value= {this.props.addDonationReducer.dni}
                />
            </Grid>
            <Grid item xs={12} sm={5}>
                <TextField
                    variant="outlined"
                    id="outlined-select-currency-native"
                    fullWidth
                    select
                    label="Genero"
                    size="small"
                    value={this.props.gendersReducer.gender}
                    onChange={this.onGenderChange}
                    SelectProps={{
                        native: true,
                    }}
                >
                    {this.props.gendersReducer.genders.map(option => (
                        <option key={option.id} value={option.id}>
                            {option.description}
                        </option>
                    ))}
                >
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField 
                    variant="outlined"
                    required
                    fullWidth
                    label="Monto de donacion"
                    type="number"
                    name="amount"
                    size="small"
                    onChange= {this.onAmountChange}
                    value= {this.props.addDonationReducer.amount}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    variant="outlined"
                    id="outlined-select-currency-native"
                    fullWidth
                    select
                    label="Tipo de pago"
                    size="small"
                    value={this.props.payTypesReducer.payType}
                    onChange={this.onPayTypeChange}
                    SelectProps={{
                        native: true,
                    }}
                >
                    {this.props.payTypesReducer.payTypes.map(option => (
                        <option key={option.id} value={option.id}>
                            {option.description}
                        </option>
                    ))}
                >
                </TextField>
            </Grid>
            <Grid item xs={12}>
                <Button 
                    type = "submit"
                    className={ classes.submit}
                    fullWidth
                    variant="contained"
                    color="primary"
                    endIcon={<TelegramIcon/>}
                >
                Enviar
                </Button>
            </Grid>  
        </Grid>
        </form>
        </div>
    </Container>; 
    }
    
}

const mapStateToProps = ({ addDonationReducer, gendersReducer, payTypesReducer }) => {
    return {
        addDonationReducer,
        gendersReducer,
        payTypesReducer
    };
}
const mapDispatchToProps = {
    changeGenderText,
    changeGendersText,
    ...addDonationActions,
    ...payTypesActions
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);

import React, { Component} from 'react';
import {connect} from 'react-redux';
import * as gendersActions from '../../redux/actions/gendersActions';
import * as payTypesActions from '../../redux/actions/payTypesActions';
import * as addDonationActions from '../../redux/actions/addDonationActions'

import { 
    Grid, TextField, Button, Container, CssBaseline
}from '@material-ui/core';

import { makeStyles, withStyles } from '@material-ui/core/styles';

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


class SelectProof extends Component{
    
    componentDidMount() {
        this.props.obtainGenders();
        this.props.obtainPayTypes();
    }

    onGenderChange = (e) =>{
        this.props.changeGender(e.target.value);
    }

    onPayTypeChange = (e) =>{
        this.props.changePayType(e.target.value);
    }

    onNameChange = (e) => {
        this.props.changeName(e.target.value);
    }

    render (){
        console.log(this.props.addDonationReducer.name);
        return <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <form className={classes.form} noValidate>
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
                        <Grid item xs={12} sm={5}>
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
                    </Grid>
                </form>
            </div>
        </Container>
    }
}

const mapStateToProps = ({ gendersReducer, payTypesReducer, addDonationReducer }) => {
    return {
        gendersReducer,
        payTypesReducer,
        addDonationReducer
    };
}

const mapDispatchToProps = {
    ...gendersActions,
    ...payTypesActions,
    ...addDonationActions
};
export default connect(mapStateToProps, mapDispatchToProps)(SelectProof);
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { TextField } from '@material-ui/core';

import { changeDni } from '../../../redux/actions/commonactions/dniActions';
import { getDni } from '../../../redux/reducers/commonreducers/dnireducer';


const DniTextField = () =>{
    
    const [errorValue, setErrorValue] = useState(false);

    const dni = useSelector(getDni);

    const dispatch = useDispatch();

    const handleDniChange = event => {
        console.log(event.target.value);
        dispatch(changeDni(event.target.value));
        validateDni(event.target.value);
    }

    const validateDni = (value) => {
        console.log(value);
        if (value <= 0){
           return setErrorValue(true);
        }
        return setErrorValue(false);
    }

    return (
        <TextField 
            error = {errorValue}
            helperText= {!errorValue ? "Ingrese dni" : "El dni ingresado no es correcto"}
            autoFocus
            variant= "outlined" 
            required
            fullWidth
            label={!errorValue ? "D.N.I" : "Error"}
            type="number"
            name="dni"
            margin="dense"
            onChange= {handleDniChange}
            value= {dni}
        />
    );
};

export default DniTextField;
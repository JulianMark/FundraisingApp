import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { TextField } from '@material-ui/core';

import { changeGender, obtainGenders } from '../../../redux/actions/commonactions/gendersActions';
import { obtainGenderList, obtainIdGender } from '../../../redux/reducers/commonreducers/gendersreducer';


const GenderListTextField = () =>{
    
    const genderList = useSelector(obtainGenderList);
    const genderId = useSelector(obtainIdGender);
  
    const dispatch = useDispatch();
  
    React.useEffect(() => {
        if (!genderList.length) {
            dispatch(obtainGenders());
        }
    }, [genderList, dispatch]);

    React.useEffect(() => {
        if (genderList.length && genderId === "") {
            dispatch(changeGender(genderList[0].id));
        }
    }, [dispatch, genderId, genderList]);

    const handleGenderChange = event => {
        dispatch(changeGender(event.target.value));
    }

    return (
        <TextField
            fullWidth
            helperText="Seleccione género"
            label="Género"
            margin="dense"
            name="state"
            onChange={handleGenderChange}
            required
            select
            SelectProps={{ native: true }}
            value={genderId}
            variant="outlined"
        >
            {genderList.map(option => (
            <option
                key={option.id}
                value={option.id}
            >
                {option.description}
            </option>
            ))}
        </TextField>
    );
};

export default GenderListTextField;
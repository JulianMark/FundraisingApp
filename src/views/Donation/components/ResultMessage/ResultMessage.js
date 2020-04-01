import React from 'react';
import { useDispatch } from 'react-redux';
import MuiAlert from '@material-ui/lab/Alert';

import { getResponse, selectError } from '../../../../redux/reducers/donationreducer'; 
import { reloadForm } from '../../../../redux/actions/donationActions';
import { useSelector } from 'react-redux';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
} 

export default function Snackbars() {

  const response = useSelector(getResponse);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  
  const putContent = () => {
    if (error){
      return <Alert onClose={handleClose} severity="error">"Ocurrio un error al intentar ingresar la donación"</Alert>
    }
    if (response.status === 200){
      return <Alert onClose={handleClose} severity="success">"La donación se ingreso de manera satisfactoria"</Alert>
    }
   
  } 
  
  const handleClose = () => {    
    dispatch(reloadForm());
  };

  return (
    <div>
      {putContent()}
    </div>
  );
}
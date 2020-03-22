import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as AddDonationActions from '../../redux/actions/addDonationActions';
import ResultMessage from '../General/ResultMessage';
import Spinner from '../General/SpinnerPanel';
//import Fatal from '../General/Fatal';
//import Table1 from './Table1';
import Form from './Form';

class AddDonation extends Component{

  componentDidMount() {
    //this.props.allUsers();
  }

  putContent = () => {
    if (this.props.loading) {
      return <Spinner/>; 
    }
    /*
    if (this.props.error) {
      return <Fatal message= {this.props.error }/>;
    } */
    return <Form/>; 
  } 

  putResult = () => {
    if (this.props.error) {
      return <ResultMessage severity= "error" message= "No se pudo agregar la donación"/>;
    } 
    if(this.props.response.status === 200){
      return <ResultMessage severity= "success" message= "Se agrego la donación con éxito"/>
    }
  }
  
  render () {
    return (
      <div>
        { this.putContent() }
        { this.putResult() } 
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.addDonationReducer;
}

export default connect(mapStateToProps, AddDonationActions)(AddDonation);
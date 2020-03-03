import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as usersActions from '../../redux/actions/usersActions';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import Table1 from './Table1';

class Users extends Component{

  componentDidMount() {
    this.props.allUsers();
  }

  putContent = () => {
    if (this.props.loading) {
      return <Spinner/>; 
    }

    if (this.props.error) {
      return <Fatal message= {this.props.error }/>;
    }
    return <Table1/>; 
  } 
  
  render () {
    return (
      <div>
        { this.putContent() } 
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
}

export default connect(mapStateToProps, usersActions)(Users);

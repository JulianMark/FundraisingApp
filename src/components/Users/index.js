import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as usersActions from '../../redux/actions/usersActions';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import Table from './Table';

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
      return <Table/>;
      
  } 
  render () {
    return (
      <div>
        <h2>Usuarios</h2>
        { this.putContent() } 
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
    return reducers.usersReducer;
}

export default connect(mapStateToProps, usersActions)(Users);

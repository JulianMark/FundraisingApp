import React, { Component} from 'react';
import Table from './Table';
import SpanningTable from './Simpletable'
import {connect} from 'react-redux';
import * as campaingsActions from '../../redux/actions/campaignsActions';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';

class Campaign extends Component{

    componentDidMount() {
      this.props.obtainCampaign();
    } 
  
    putContent = () => {
      if (this.props.loading) {
        return <Spinner/>; 
      }
  
      if (this.props.error) {
        return <Fatal message= {this.props.error }/>;
      }
      return <SpanningTable/>; 
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
    return reducers.campaignsReducer;
}
  
export default connect(mapStateToProps, campaingsActions)(Campaign);
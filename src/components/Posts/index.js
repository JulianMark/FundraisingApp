import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../../redux/actions/usersActions';
import * as postsActions from '../../redux/actions/postsActions';

class Posts extends Component {
    componentDidMount(){
        if(this.props.usersReducer.users.lenght){
            this.props.usersReducer.allUsers();
        }
    }
    render() {
        return (
            <div>
                { this.props.match.params.key }
            </div>
        )
    }
}

const mapStateToProps = ({usersReducer, postsReducer}) => {
    return {
        usersReducer,
        postsReducer
    };
};

const mapDispatchToProps = {
    ...usersActions,
    ...postsActions
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

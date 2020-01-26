import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

const Table = (props) => {
    const fillRows = () => props.users.map((user, key) => (
      <tr key={ user.id }>
        <td>{ user.name }</td>
        <td>{ user.email }</td>
        <td>{ user.website }</td>
        <td>
          <Link to={`/posts/${key}`}>
            <div className="search-solid icon"></div>
          </Link>
        </td>
      </tr>     
    ));
    return (
        <table className='table'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Enlace</th>
            </tr>
          </thead>
          <tbody>
            { fillRows() }
          </tbody>
        </table>
    );
};

const mapStateToProps = (reducers) => {
    return reducers.usersReducer;
}

export default connect(mapStateToProps)(Table);
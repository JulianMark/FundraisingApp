import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import Users from './Users'
import Posts from './Posts';
import Campaigns from './Campaigns'

const Work = () => <div>Tareas</div>

const App = () => (
  <BrowserRouter>
    <Menu/>
    <div className='margin'>
      <Route exact path='/' component= {Users}/>
      <Route exact path='/work' component= {Work}/>
      <Route exact path='/campaigns' component={Campaigns}/>
      <Route exact path='/posts/:key' component= {Posts}/>
    </div>
  </BrowserRouter>
);

export default App;
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import Users from './Users';
import Posts from './Posts';
import Campaigns from './Campaigns';
import SelectProof from './SelectProof';
import AddDonation from './AddDonation';
import ResultMessage from '../components/General/ResultMessage';

const Work = () => <div>Tareas</div>

const App = () => (
  <BrowserRouter>
    <Menu/>
    <div className='margin'>
      <Route exact path='/' component= {Users}/>
      <Route exact path='/work' component= {Work}/>
      <Route exact path='/campaigns' component={Campaigns}/>
      <Route exact path='/select' component={SelectProof}/>
      <Route exact path='/posts/:key' component= {Posts}/>
      <Route exact path='/addDonation' component= {AddDonation}/>
      <Route exact path='/resultMessage' component= {ResultMessage}/>
    </div>
  </BrowserRouter>
);

export default App;
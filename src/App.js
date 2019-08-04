import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
// import Dynamic from './Dynamic';
import NavBar from './Components/NavBar';
import SignIn from './Components/SignIn';
import Register from './Components/Register';
import Profile from './Components/Profile';
import Gallery from './Components/Gallery';


const App = () => (
  <div>
  <NavBar/>
  <Switch>
  <Route exact path='/' component={Gallery}/>
    {/* <Route exact path='/home/:id' component={Dynamic}/> */}
    <Route exact path='/signin' component={SignIn}/>
    <Route exact path='/signup' component={Register}/>
    <ProtectedRoute exact path ='/profile' component={Profile}/>
    {/* <Route path='*' component={()=> "404 not Found"}/> */}
  </Switch>
  </div>
)

export default App;

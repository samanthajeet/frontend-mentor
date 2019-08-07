import React from 'react';
import './App.css';
import routes from './routes'
import Navigation from './components/Navigation/Navigation'
import {withRouter} from 'react-router-dom'

function App(props) {
  return (
    <div className="App">
      {routes}
      <Navigation history={props.history} match={props.match}/>
    </div>
  );
}

export default withRouter(App);

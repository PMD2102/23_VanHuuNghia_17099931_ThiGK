import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './components/index.component';

class App extends Component{

  render(){
    return(
      <Router> 
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand"></Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">San Pham</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <Switch>
              <Route path='/index' component={ Index } />
          </Switch>
        </div>
      </Router>
    ); 
  }

}

export default App;

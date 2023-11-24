import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Visitors from './component/visitors.jsx';
import Alldata from './component/alldata.jsx';
import Navbar from './component/navbar.jsx';
import Home from './component/home.jsx';
import About from './component/about.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ backgroundColor: 'orange' }}>
        <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/Visitors" exact component={Visitors} />
          <Route path="/Alldata" exact component={Alldata} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Data from './components/data'
import Search from './components/search'
import Footer from './components/Footer'
import {Provider} from './Context'

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment >
          <Search/>
          <Switch>
            <Data />
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;

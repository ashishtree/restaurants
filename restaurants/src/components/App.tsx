import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

class App extends React.Component {
  render() {
    return (
      <Router>
          <Home/>
      </Router>
    );
  }
}

export default App;

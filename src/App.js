import React, { Component } from 'react';
import './App.css';
import Sample from './Components/Sample';
import { MuiThemeProvider } from 'material-ui/styles';

class App extends Component {

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Sample></Sample>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;

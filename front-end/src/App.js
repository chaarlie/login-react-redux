import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppContainer from './components/app-container/AppContainer';

const App = () => (
  <div> 
    <MuiThemeProvider>
      <AppContainer />
    </MuiThemeProvider>
  </div>
);

export default App;

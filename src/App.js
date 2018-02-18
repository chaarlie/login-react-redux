import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppContainerComponent from './components/app-container/AppContainerComponent';

const App = () => (
  <div> 
    <MuiThemeProvider>
      <AppContainerComponent />
    </MuiThemeProvider>
  </div>
);

export default App;

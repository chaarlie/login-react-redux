import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import CompanyBanner from './components/CompanyBanner/CompanyBanner';
import CompanyLoginForm from './components/CompanyLoginForm/CompanyLoginForm';
 
const containerStyles = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
} 

const AppContainer = () => {
  return(
    <div style={containerStyles}>
      <CompanyBanner />
      <CompanyLoginForm />
    </div>
  )
}
const App = () => (
  <div  > 
    <MuiThemeProvider>
      <AppContainer />
    </MuiThemeProvider>
  </div>
);


export default App;

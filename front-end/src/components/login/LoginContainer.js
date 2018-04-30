import React from 'react';
import Radium, { Style, StyleRoot } from 'radium';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import LoginForm from './LoginForm';
import AppBanner from './AppBanner';

class LoginContainer extends React.Component {
    constructor() {
      super();
      this.state = {
        toggleNav: false
      }
    }

    handleToggle = () => this.setState({toggleNav: !this.state.toggleNav});

    render() {
      return(
        <StyleRoot>
           <Style
            rules={{
                display: 'flex',
                maxWidth: '70%',
                margin:'64px auto',
                mediaQueries: {
                  '(max-width: 560px)': {
                      flexDirection: 'column'
                  }
                }
            }}
            scopeSelector=".login-container"
          />
        <div className='login-container'>
          <AppBanner />
          <LoginForm />
        </div>
        </StyleRoot>
      )
  }
}

export default Radium(LoginContainer);

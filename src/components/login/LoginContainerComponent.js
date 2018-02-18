import React from 'react';
import LoginComponent from './LoginComponent';
import BannerComponent from './BannerComponent';

import styles from './styles/loginContainerStyles';

const LoginContainerComponent = () => {
    return(
      <div style={styles.containerStyles}>
        <BannerComponent />
        <LoginComponent />
      </div>
    )
}

export default LoginContainerComponent;
  
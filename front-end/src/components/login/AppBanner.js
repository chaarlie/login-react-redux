import React from 'react';
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';

import styles from './styles/bannerComponentStyles';

const AppBanner = () => {
  return (
    <div className='app-banner' style={styles.indexBannerStyles}>
        <div>
          <h2>Login to your Account </h2> 
        </div>
        <div style={{paddingTop:'40%'}}>
        <Divider style={{width:'40%', marginLeft:'30%' }}/>
        <h3>Talent Discovery <br /> and Delivery</h3>
        <Divider style={{width:'40%', marginLeft:'30%' }} />
        <br/>
        <p style={{fontSize:'75%'}}>LEARN MORE </p>
        </div>
       
        <div style={styles.companyInfoStyles}>
          <div> All rights Reserved</div>
          <div > 
            <ul style={{marginTop: '0.8%', marginLeft:'-11%'}}>
              <li   style={styles.companyInfoContactStyles}><Link to={'/#'} > Contact us </Link></li>
              <li   style={styles.companyInfoContactStyles}><Link to={'/#'} > Abut us </Link></li>
              <li   style={styles.companyInfoContactStyles}><Link to={'/#'} > Help and Faq </Link></li>
            </ul>
          </div>
        </div>
      </div>	
  );
}

export default AppBanner;
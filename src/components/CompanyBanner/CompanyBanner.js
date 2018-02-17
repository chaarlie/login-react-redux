import React from 'react';

import Divider from 'material-ui/Divider';

import styles from './styles';

const CompanyBanner = () => {
  return (
    <div  style={styles.indexBannerStyles}>
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
            <ul style={{marginTop: '0.8%'}}>
              <li   style={styles.companyInfoContactStyles}>Contact us</li>
              <li   style={styles.companyInfoContactStyles}>Abut us</li>
              <li   style={styles.companyInfoContactStyles}>Help and Faq</li>
            </ul>
          </div>
        </div>
        
      </div>	
  );
}

export default CompanyBanner;
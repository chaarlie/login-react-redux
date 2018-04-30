import React from 'react';

import styles from './styles/loginFormStyles';

const CustomDivider = ({text}) => {
    return (
        <div style={{listStyleType:'none', textTransform:'uppercase', marginTop:'-5%' }}> 
            <div style={styles.sectionTitleContainerStyles}>
                <p style={styles.sectionTitleStyles}>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default CustomDivider;
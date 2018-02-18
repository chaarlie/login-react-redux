import React from 'react';

import styles from './styles/loginFormStyles';

const CustomDividerComponent = ({text}) => {
    return (
        <div style={{listStyleType:'none', textTransform:'uppercase' }}> 
            <div style={styles.sectionTitleContainerStyles}>
                <p style={styles.sectionTitleStyles}>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default CustomDividerComponent;
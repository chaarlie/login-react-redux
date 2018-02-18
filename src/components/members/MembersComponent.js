import React from 'react';

import { connect } from 'react-redux';

class Dashboard extends React.Component {
    render() {
        const {name} = this.props.authReq.payload;
        return (
            <div style={{marginLeft:'40%'}}><h1>Welcome {name}</h1></div>
        )
    }
}

const mapStateToProps = (state) => ({ authReq: state.loginActions });
const MembersDashboard = connect(mapStateToProps)(Dashboard);
 
export default MembersDashboard;
import React from 'react'

import { withRouter } from 'react-router-dom';

import { logoutAction } from '../../state/actions';
import { connect } from 'react-redux';

class MembersLogoutComponent extends React.Component {
    componentDidMount() {
        this.props.logoutAction();
        this.props.history.push('/home');
    }
    render(){
        return(
            <div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ authReq: state.loginActions });
const mapDispatchToProps = { logoutAction };
const MembersLogout = connect(mapStateToProps, mapDispatchToProps)(MembersLogoutComponent);

export default withRouter(MembersLogout);
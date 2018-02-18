import React from 'react'

import {withRouter} from 'react-router-dom';

import { logoutAction } from '../../state/actions';
import { connect } from 'react-redux';

class Logout extends React.Component {
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
const mapDispatchToProps = {logoutAction};
const LogoutComponent = connect(mapStateToProps, mapDispatchToProps)(Logout);

export default withRouter(LogoutComponent);
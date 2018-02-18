import React from 'react';

import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";

import { connect } from 'react-redux';

import { signInAction } from '../../state/actions';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import LoginContainerComponent from '../login/LoginContainerComponent';
import MembersComponent from '..//members/MembersComponent';
import LogoutComponent from '..//logout/LogoutComponent';
import HomeComponent from '../home/HomeComponent';
import NoMatchComponent from '../no-match/NoMatchComponent';

class  Container extends React.Component {
    constructor(){
      super();
      this.state = {
        toggleNav: false,
        isAuthenticated: false
      }
      this.handleToggle.bind(this);
    }
    handleToggle = () => {
      this.setState({toggleNav: !this.state.toggleNav})
    }
    componentWillReceiveProps(props) {  
      this.setState({isAuthenticated: !!props.authReq.payload.access_token});
    }
    render() {
      return (
        <div>
          <AppBar
            iconElementLeft={this.state.toggleNav? <IconButton><NavigationClose /></IconButton> : null}
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonClick={this.handleToggle}
            style={{backgroundColor:'#EC407A'}}
          />
          
          <Router >
            <div>
              <Drawer open={this.state.toggleNav} containerStyle={{height: '90%', top:'10%'}}>
                <Link to={`/home`}>   <MenuItem >Home</MenuItem></Link>
                { !this.state.isAuthenticated && <Link to={`/login`}>   <MenuItem>Login</MenuItem></Link>}
                { this.state.isAuthenticated && 
                  <span>
                    <Link to={`/dashboard`}>   <MenuItem>Members Dashboard</MenuItem></Link>
                    <Link to={`/logout`}>   <MenuItem>Logout</MenuItem></Link>
                  </span> 
                }
              </Drawer>  
              <Switch>
              <Route exact path="/login" component={LoginContainerComponent} />
              <Route
               path="/dashboard"
               render={() =>
                this.state.isAuthenticated? (
                  <MembersComponent />
                ) : (
                  <Redirect
                    to={{
                      pathname: "/home"
                    }}
                  />
                )}
              />
              <Route path="/home" component={HomeComponent}/>
              <Route path="/logout" component={LogoutComponent}/>
              <Route   component={NoMatchComponent} />
            </Switch>
            </div>
          </Router > 
        </div>
      )
    }
  }
  
  const mapStateToProps = (state) => ({ authReq: state.loginActions });
  const mapDispatchToProps = {signInAction};
  const AppContainerComponent = connect(mapStateToProps, mapDispatchToProps)(Container);

  export default AppContainerComponent;
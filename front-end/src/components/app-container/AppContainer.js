import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { Drawer, MenuItem, AppBar, IconButton } from 'material-ui/';

import LoginContainer from '../login/LoginContainer';
import MembersLanding from '../members/MembersLanding';
import MembersLogout from '../logout/MembersLogout';
import Home from '../home/Home';
import NoMatchPage from '../no-match/NoMatchPage';
import SignUp from '../register/SignUp';
import { signInAction } from '../../state/actions';

class  AppContainerComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      toggleNav: false,
      isAuthenticated: false
    }
    this.handleToggle.bind(this);
  }
    
  handleToggle = () => this.setState({toggleNav: !this.state.toggleNav});

  componentWillReceiveProps(props) {  
    this.setState({isAuthenticated: !!props.authReq.payload.token});
  }
  render() {
    return (
      <div>
        <AppBar
          iconElementLeft={this.state.toggleNav? <IconButton><NavigationClose /></IconButton> : null}
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={this.handleToggle}
          style={{backgroundColor:'#EC407A', top:'0px', left:'0px', position:'fixed'}}
        />
        
        <Router >
          <div>
            <Drawer open={this.state.toggleNav} containerStyle={{height: '90%', top:'10%'}}>
              <Link to={`/home`}>   <MenuItem >Home</MenuItem></Link>
              { !this.state.isAuthenticated && 
                <span>
                  <Link to={`/login`}>   <MenuItem>Login</MenuItem></Link>
                  <Link to={`/register`}>   <MenuItem>Register</MenuItem></Link>
                </span>
              }
              { this.state.isAuthenticated && 
                <span>
                  <Link to={`/dashboard`}>   <MenuItem>Members Dashboard</MenuItem></Link>
                  <Link to={`/logout`}>   <MenuItem>Logout</MenuItem></Link>
                </span> 
              }
            </Drawer>  
          
            <Switch>
            <Route exact path="/login" component={LoginContainer} />
            <Route
              path="/dashboard"
              render={() =>
              this.state.isAuthenticated? (
                <MembersLanding />
              ) : (
                <Redirect
                  to={{
                    pathname: "/home"
                  }}
                />
              )}
            />
              
            <Route path="/home" component={Home}/>
            <Route path="/logout" component={MembersLogout}/>
            <Route path="/register" component={SignUp}/>
            <Route  component={NoMatchPage} /> 

          </Switch>
          </div>  
        </Router > 
      </div>
    )
  }
}
  
const mapStateToProps = (state) => ({ authReq: state.loginActions });
const mapDispatchToProps = {signInAction};
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainerComponent);

export default AppContainer;
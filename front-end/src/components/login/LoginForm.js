import React from 'react';
import { withRouter } from 'react-router-dom';
import { TextField, Checkbox, RaisedButton } from 'material-ui'
import FontIcon from 'material-ui/FontIcon';
import { connect } from 'react-redux';

import { signInAction } from '../../state/actions';
import styles from './styles/loginFormStyles';
import CustomDivider from './CustomDivider';

class LoginFormComponent extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            email: '',
            password: '',
            isFetching: false,
            loginHasError: false,
            errMsg: '',
            emptyFIelds: false
        };
        this.signIn.bind(this);
    }

    componentWillReceiveProps(props) {  
        if(props.authReq) {
            if(props.authReq.errMsg) {
                this.setState({errMsg: props.authReq.errMsg});
                this.setState({email:'', password:''});
            }
            this.setState({isFetching: props.authReq.isFetching});
            this.setState({loginHasError: !!props.authReq.errMsg});
        }
        if(props.authReq.payload.token) {
            this.props.history.push('/dashboard');
        }
    }
    
    signIn = (e) => {
        if(this.state.email && this.state.password) {
            this.setState({
                emptyFIelds: false, 
                loginHasError: false
            });
            const credentials = {
                credentials: {
                    username: this.state.email, 
                    password: this.state.password
                }
            };

            this.props.signInAction(credentials);

            this.setState({
                email: '',
                password: ''
            });
        }
        else {
            this.setState({emptyFIelds: true})
        }
    }
    render() {
        return(
            <div style={styles.loginFormStyles}>
           
            <RaisedButton           
                label="LOGIN WITH FACEBOOK"
                labelColor="#F5F5F5"
                style={styles.buttonSpacingStyles.button}
                icon={<FontIcon className="fa fa-facebook-f" />}
                backgroundColor='#3F51B5'
                buttonStyle = {styles.buttonStyles}
                />
                <RaisedButton
                label="LOGIN WITH TWITTER"
                labelColor="#F5F5F5"
                style={styles.buttonSpacingStyles.button}
                icon={<FontIcon className="fa fa-twitter" />}
                backgroundColor='#82B1FF'
                buttonStyle = {styles.buttonStyles}
                />
                <RaisedButton
                label="LOGIN WITH GOOGLE"
                labelColor="#F5F5F5"
                style={styles.buttonSpacingStyles.button}
                icon={<FontIcon className="fa fa-google" />}
                backgroundColor='#F44336'
                buttonStyle = {styles.buttonStyles}
                /> 
                
                <CustomDivider text='or' />

                <div style={{marginTop:'-12%'}}>
 
                <TextField
                hintText="Email"
                floatingLabelText="Email"
                onChange={(e) =>{this.setState({email: e.target.value})}}
                errorText= {this.state.emptyFIelds? "Both fields are required" : ''}
                value={this.state.email}
                />
                <TextField
                hintText="Password Field"
                floatingLabelText="Password"
                type="password"
                onChange={(e) =>{this.setState({password: e.target.value})}}
                errorText= {this.state.emptyFIelds? "Both fields are required" : ''}
                value={this.state.password}
                />
                </div>
                
                <br/>
                    {this.state.loginHasError  ?   
                        <div> 
                            
                            <span style={{color:'red', textTransform:'uppercase', fontSize:'70%'}}> 
                                {this.state.errMsg} 
                            </span>
                        </div> : 
                        <div></div> 
                    }
                <br/>
                  
              
                  <div style={{fontSize: '75%', display:'flex', flexFlow:'column wrap'}}>
                    <Checkbox name="keep-signed-in" label="KEEP ME SIGNED IN" labelStyle={{marginLeft:'-30%'}} style={{margin:'0% 30%', padding: '5% 0% 2% 0%'}}  iconStyle={{  fill: '#E91E63',}}/>
                    <label style={{color:'#E91E63', paddingTop:'2%'}} htmlFor="keep-signed-in">FORGOT PASSWORD?</label>
                </div>  
                <br/>
                <br/>
                <RaisedButton
                label="LOGIN NOW"
                labelColor="#F5F5F5"
                style={styles.buttonSpacingStyles.button}
                icon={<FontIcon className="fa fa-lock" />}
                backgroundColor='#424242'
                buttonStyle = {styles.buttonStyles}
                onClick={this.signIn}
                disabled={this.state.isFetching}
                />
                <br/>
                <br/>
                <div style={styles.companyInfoStyles}>
                    <span  style={{marginLeft:'-5%', paddingRight:'5%'}} > DON'T HAVE AN ACCOUNT?</span>
                    <span style={{color:'#E91E63'}}   >REGISTER NOW</span>
                </div>
            </div>
          
        )
    }
}

const mapStateToProps = (state) => ({ authReq: state.loginActions });
const mapDispatchToProps = {signInAction};
const LoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginFormComponent);

export default withRouter(LoginForm);
import React, {Component} from 'react';
import {Alert,FormGroup, ControlLabel,FormControl,HelpBlock, Button} from 'react-bootstrap';

class UserForm extends React.Component {
  errorUserName;
  errorPassword;

  roles = ['Read', 'Write', 'Administrator'];
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.errorPassword = '';
    this.errorUserName = '';

    this.state = {
      userName: '',
      password: '',
      userNameTouched: false,
      passwordTouched: false,
      errorLogin: false
    };
  }

  getUserNameValidationState() {
    const length = this.state.userName.length;
    if(this.state.userNameTouched){
      if(length === 0)
      {
        this.errorUserName = 'Username is required';
        return 'error';
      }
    else if (length < 3){
      this.errorUserName = 'Username should be at least 3 characters';
      return 'error';
    }
    else if(this.state.userName.indexOf(' ') > 0)
    {
      this.errorUserName = 'Username cannot contain spaces';
      return 'error';
    }
    else{
      this.errorUserName = '';
      return 'success';}
    }

  }

  getPasswordValidationState() {
    const length = this.state.password.length;
    if(this.state.passwordTouched){
    if (length < 3) return 'error';
    else return 'success';
    }
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: e.target.value });
  }

  handleBlur(e)
  {
    const target = e.target;
    const name = target.name;
    this.setState({
      [name+'Touched']:true
    });
    console.log("passwordTouched " + this.state.passwordTouched);
  }

  handleSubmit(event)
  {
    this.errorLogin = false;
    if(!this.canBeSubmitted()){
      event.preventDefault();
      return;
    }
    else{
      if(!this.login(this.state.userName,this.state.password))
      {
        this.setState({
          errorLogin: true
        });
        event.preventDefault();
        return;
      }

    }
    this.setState({errorLogin: false})
    alert('User Name: ' + this.state.userName
    + '\nPassword:' + this.state.password);

  }

  canBeSubmitted(){
    return(
this.state.userNameTouched && this.state.passwordTouched &&
this.errorUserName.length === 0 && this.errorPassword.length === 0
    );
  }

  login(userName,password)
  {
    if(userName === 'mike' && password === '123')
    {
      return true;
    }
    return false;
  }
  render() {
    const listRoles = this.roles.map((role)=>
    <option value="select">{role}</option>
    );
    const isEnabled = this.canBeSubmitted();
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getUserNameValidationState()}
        >
          <ControlLabel>Name</ControlLabel>
          <FormControl
            name="userName"
            type="text"
            value={this.state.userName}
            placeholder="Enter UserName"
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
          <FormControl.Feedback />
          {this.errorUserName.length > 0 && this.state.userNameTouched &&
          <HelpBlock>{this.errorUserName}</HelpBlock>
          }
        </FormGroup>

        <FormGroup
          controlId="formBasicText"
          validationState={this.getPasswordValidationState()}
        >
          <ControlLabel>Password</ControlLabel>
          <FormControl
            name="password"
            type="password"
            value={this.state.password}
            placeholder="Enter Password"
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
        <FormGroup
          controlId="formControlsSelect">
          <ControlLabel>Select Role</ControlLabel>
          <FormControl
           componentClass = "select"
            placeholder="select"
            name = "role"
          >
          <option value="select">select</option>
          {listRoles}
          <option value="other">...</option>
          </FormControl>
        </FormGroup>
        <Button type="submit" disabled = {!isEnabled}>
        Submit</Button>
        {this.state.errorLogin &&
        <Alert bsStyle="danger">
        <strong>Error</strong>UserName or Password is invalid.
        </Alert>
        }
      </form>
    );
  }
}

export default UserForm;
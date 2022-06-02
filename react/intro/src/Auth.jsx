import React, { Component } from 'react';
import Logout from './Logout';
import Login from './Login';
import Spinner from './Spinner';

//state
//isLoggedIn: boolean
//isProcessing: boolean

//Algo
//1.show login by default++
//2.after login click - show spinner for 2 seconds++
//3.hide spinner, show logout++
//4.after logout click - show login
class Auth extends Component {
  state = {
    isLoggedIn: false,
    isProcessing: false,
  };

  loginHandler = () => {
    //input:obj
    //output: undefined
    this.setState({
      isProcessing: true,
    });

    setTimeout(() => {
      this.setState({
        isProcessing: false,
        isLoggedIn: true,
      });
    }, 2000);
  };

  logoutHandler = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const { isProcessing, isLoggedIn } = this.state;
    if (isProcessing) {
      return <Spinner></Spinner>;
    }

    if (isLoggedIn) {
      return <Logout onLogout={this.logoutHandler}></Logout>;
    }

    return <Login onLogin={this.loginHandler}></Login>;
  }
}

export default Auth;

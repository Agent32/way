import React from "react";

import AutorizationDrawer from "./autorizationDrawer";
import { connect } from "react-redux";
import * as axios from "axios";
import { Redirect, NavLink, withRouter } from "react-router-dom";
import { tryLogin,  tryLogout, loginFormSubmit} from "../../../redux/autorizationReduser";


import { compose } from "redux";


class AutorizationContainerConnect extends React.Component {


  getAutorization = () =>
  { 
     
     const returnDataEmu = {
         avatar: 'https://cdn.discordapp.com/emojis/621056505373786112.png?v=1',
         userName: 'NAGIBATOR2000',
         token: 'IIIIIAAAAUUUU'
         
     }
   this.props.tryLogin(returnDataEmu)

  }
 

  //<NavLink to={`/register`}> Registration</NavLink>
  regButtonPress = () => {
    
return <Redirect to = { "/register"} />

  }

  // https://reqres.in/api/login

  render() {





    return (
      <> 
        <AutorizationDrawer 
        userData={this.props.userData} 
        editLoginArea={this.props.editLoginArea}
        editPasswordArea={this.props.editPasswordArea}
        getAutorization= {this.getAutorization}
        tryLogout= {this.props.tryLogout}
        regButtonPress= {this.regButtonPress}
        loginFormSubmit={this.props.loginFormSubmit}
        />
      </>
    );
  }
}

// ========================================

// ========================================
const mapStateToProps = (state) => {
  return { userData: state.autorizationPart.userData };
};

//const AutorizationContainer = (withRouter(AutorizationContainerConnect));

export default compose(
  connect(  mapStateToProps,  {tryLogin, tryLogout,loginFormSubmit}) ,
  withRouter,
  ) (AutorizationContainerConnect);

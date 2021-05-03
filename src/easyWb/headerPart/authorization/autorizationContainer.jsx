import React from "react";

import AutorizationDrawer from "./autorizationDrawer";
import { connect } from "react-redux";
import * as axios from "axios";
import { withRouter } from "react-router-dom";
import { tryLogin, editLoginArea, editPasswordArea, tryLogout} from "../../../redux/autorizationReduser";

class AutorizationContainerConnect extends React.Component {
  componentDidMount() {
  }

  getAutorization = () =>
  { 
     
     const returnDataEmu = {
         avatar: 'https://cdn.discordapp.com/emojis/621056505373786112.png?v=1',
         userName: 'NAGIBATOR2000',
         token: 'IIIIIAAAAUUUU'
         
     }
   this.props.tryLogin(returnDataEmu)

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

const AutorizationContainer = connect(
  mapStateToProps,
  {tryLogin, editLoginArea, editPasswordArea, tryLogout}
)(withRouter(AutorizationContainerConnect));

export default AutorizationContainer;

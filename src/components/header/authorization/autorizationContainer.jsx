import React from 'react'

import AutorizationDrawer from './autorizationDrawer'
import { connect } from 'react-redux'
import * as axios from 'axios'
import { Redirect, NavLink, withRouter } from 'react-router-dom'

import {
  tryLogin,
  tryLogout,
  loginFormSubmit
} from '../../../store/actions/autorizationActions'

import { compose } from 'redux'

class AutorizationContainerConnect extends React.Component {
  regButtonPress = () => {
    return <Redirect to={'/register'} />
  }

  render() {
    return (
      <>
        <AutorizationDrawer
          userData={this.props.userData}
          editLoginArea={this.props.editLoginArea}
          editPasswordArea={this.props.editPasswordArea}
          tryLogout={this.props.tryLogout}
          regButtonPress={this.regButtonPress}
          loginFormSubmit={this.props.loginFormSubmit}
        />
      </>
    )
  }
}

// ========================================

// ========================================
const mapStateToProps = (state) => {
  return { userData: state.autorizationPart.userData }
}

export default compose(
  connect(mapStateToProps, { tryLogin, tryLogout, loginFormSubmit }),
  withRouter
)(AutorizationContainerConnect)

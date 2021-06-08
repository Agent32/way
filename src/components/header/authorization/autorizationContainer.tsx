import React from 'react'

import AutorizationDrawer from './autorizationDrawer'
import { connect, ConnectedProps } from 'react-redux'
import * as axios from 'axios'
import { Redirect,  withRouter } from 'react-router-dom'

import {
  tryLogin,
  tryLogout,
  loginFormSubmit
} from '../../../store/actions/autorizationActions'

import { compose } from 'redux'
import { mainStateType } from '../../../store/rStore'

const mapStateToProps = (state : mainStateType) => {
  return { userData: state.autorizationPart.userData }
}

const connector = connect(mapStateToProps, { tryLogin, tryLogout, loginFormSubmit })
export type PropsFromConnect = ConnectedProps<typeof connector>

const AutorizationContainerConnect = (props:PropsFromConnect) => {
  const regButtonPress = () => {
    return <Redirect to={'/register'} />
  }

 
    return (
      <>
        <AutorizationDrawer {...props}
          regButtonPress={regButtonPress}
        />
      </>
    )
  
}

// ========================================

// ========================================

export default compose(
  connect(mapStateToProps, { tryLogin, tryLogout, loginFormSubmit }),
  withRouter
)(AutorizationContainerConnect)

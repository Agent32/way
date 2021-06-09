import React from 'react'

import { connect } from 'react-redux'
import { compose } from 'redux'
import { serverAL } from '../../../api/api'
import RegDrawer from './regDrawer'
import { withAutoredirectNotLogOut, withLoading } from '../../modules/HOC'

const RegFormConnectContainer = (props) => {
  const subitRegToServer = (subData) => {
    props.changeLoadStatus(true)
    serverAL.newUser(subData).then((ans) => {
      console.log(ans)
      props.changeLoadStatus(false)
    })
  }


    return (
      <>
        {props.isSomethingLoading ? <props.LoadingModule /> : null}

        <RegDrawer subitRegToServer={subitRegToServer} />
      </>
    )
  
}

// ========================================

// ========================================
const mapStateToProps = (state) => {
  return {}
}

export default compose(
  connect(mapStateToProps, {}),
  withLoading,
  withAutoredirectNotLogOut
)(RegFormConnectContainer)

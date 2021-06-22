import React, { useEffect } from 'react'
import {
  getUser,
  editProfilePart,
  enableEditElement
} from '../../../store/actions/profileActions'
import {
  updateQuteServerTC,
  getUserByIdTC,
  likeChangeTC,
  newWallPostTC
} from '../../../store/profileReducer'

import Profile from './profileDrawer'
import { connect, ConnectedProps } from 'react-redux'

import { RouteComponentProps, withRouter } from 'react-router-dom'
import LoadingModule from '../../modules/loader/loader'

import { compose } from 'redux'
import { mainStateType } from '../../../store/rStore'
import { userType } from '../../../store/types/redusersTypes'


const mapStateToProps = (state: mainStateType) => {
  return {
    profileSettings: state.bodyPart.profileSettings,
    userData: state.bodyPart.userData,
    postsWall: state.bodyPart.postsWall
  }
}
// ========================================

const connector = connect(mapStateToProps, {
  getUser,
  getUserByIdTC,
  updateQuteServerTC,
  enableEditElement,
  editProfilePart,
  likeChangeTC,
  newWallPostTC
})
type PropsFromConnect = ConnectedProps<typeof connector>
type TParams = { userId: string };

export type resultProfileTypeProps = PropsFromConnect & RouteComponentProps<TParams>

const ProfileConnectContainer = (props: resultProfileTypeProps) => {
  const usrID = props.match.params.userId
  const usrFunc = props.getUserByIdTC

  useEffect(() => {
    usrFunc(usrID)
  }, [usrID, usrFunc])

  const updateQuoteOnServer = () => {
    props.updateQuteServerTC(
      +props.userData.id,
      props.profileSettings.whatEdit,
      props.userData[props.profileSettings.whatEdit as keyof userType]
    )
  }

  const wallSend = (data: any) => {
    props.newWallPostTC(+props.userData.id, data)
  }

  return (
    <>
      {props.profileSettings.isLoadinFinished ? null : <LoadingModule />}

      <Profile
        {...props}
        wallSend={wallSend}
        updateQuoteOnServer={updateQuoteOnServer}
      />
    </>
  )
}




export default compose< React.ComponentType>(
  connector,
  withRouter
)(ProfileConnectContainer)
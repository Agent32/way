
import { connect } from 'react-redux'

import { changeUsrFollowAction, getMoreUsrAction } from '../../../redux/userReducer'
import UsersPage from './usersSearch'

// ========================================
const mapStateToProps = (state) => {
  return { usersList: state.usersPart.usersList }
}
// -----------------------------------------
const mapDispatchToProps = (dispatch) => {
  return {
    updateUserChange: (id) => dispatch(getMoreUsrAction(id)),
    userFollowChange: (id) => dispatch(changeUsrFollowAction(id))

  }
}
// ========================================
const UserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPage)

export default UserContainer

import React from "react";
import { connect } from "react-redux";

import { changeUsrFollowAction } from "../../../redux/userReducer";
import UsersPage from "./usersSearch";


// ========================================
const mapStateToProps = (state) => {
  return { usersList: state.usersPart.usersList
   };
};
//-----------------------------------------
const mapDispatchToProps = (dispatch) => {
  return {
    userFollowChange: (id) => dispatch(changeUsrFollowAction(id)),
    
  };
};
// ========================================
const UserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPage);


export default UserContainer;
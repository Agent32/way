import { connect } from "react-redux";
import * as axios from "axios";
import {
  getUsersPageThunkCreator,
  changeSubscribeThunkCreator,
} from "../../../redux/usersReducer";
import UsersPage from "./usersDrawer";
import React, { useEffect } from "react";
import LoadingModule from "../../commonComponent/loader/loader";
import { compose } from "redux";

const UserConnectConreiner = (props) =>  {

  useEffect(() => {
    props.getUsersPageThunkCreator(1, props.pageSettings.maxUsersAtPage );
  }, [props.pageSettings.maxUsersAtPage, props.getUsersPageThunkCreator]);

  
// -----------------------------------------
  const changePage = (Page) => {
    if (Page !== props.pageSettings.currentPage) {
      props.getUsersPageThunkCreator(
        Page,
        props.pageSettings.maxUsersAtPage
      );
    }
  };
  // ========================================

 
    return (
      <>
        {" "}
        {props.pageSettings.isLoadinFinished ? null : <LoadingModule />}
        <UsersPage
          pageSettings={props.pageSettings}
          usersList={props.usersList}
          changePage={changePage}
          userFollowChange={props.changeSubscribeThunkCreator}
        />{" "}
      </>
    );
 
}

//-----------------------------------------//-----------------------------------------
const mapStateToProps = (state) => {
  return {
    usersList: state.usersPart.usersList,
    pageSettings: state.usersPart.pageSettings,
  };
};
// -----------------------------------------





export default compose(
  connect(mapStateToProps, {
    getUsersPageThunkCreator,
    changeSubscribeThunkCreator,
  })

) (UserConnectConreiner) 

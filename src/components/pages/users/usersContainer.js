import { connect } from "react-redux";
import * as axios from "axios";
import {
  getUsersPageThunkCreator,
  changeSubscribeThunkCreator,
} from "../../../store/usersReducer";
import UsersPage from "./usersDrawer";
import React, { useEffect } from "react";
import LoadingModule from "../../modules/loader/loader";
import { compose } from "redux";

const UserConnectConreiner = (props) =>  {
  const getUPtc = props.getUsersPageThunkCreator
  const maxUsersAtPage = props.pageSettings.maxUsersAtPage

  useEffect(() => {
    getUPtc(1, maxUsersAtPage);
  }, [maxUsersAtPage, getUPtc]);

  
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

import { connect, ConnectedProps } from "react-redux";
import {
  getUsersPageThunkCreator,
  changeSubscribeThunkCreator,
} from "../../../store/usersReducer";
import UsersPage from "./usersDrawer";
import React, { useEffect } from "react";
import LoadingModule from "../../modules/loader/loader";
import { compose } from "redux";
import { mainStateType } from "../../../store/rStore";

const mapStateToProps = (state:mainStateType) => {
  return {
    usersList: state.usersPart.usersList,
    pageSettings: state.usersPart.pageSettings,
  };
};
// -----------------------------------------

const connector = connect(mapStateToProps, {
    getUsersPageThunkCreator,
    changeSubscribeThunkCreator,
  })

export type userConectedType = ConnectedProps<typeof connector>

const UserConnectConreiner = (props:userConectedType) =>  {
  const getUPtc = props.getUsersPageThunkCreator
  const maxUsersAtPage = props.pageSettings.maxUsersAtPage

  useEffect(() => {
    getUPtc(1, maxUsersAtPage);
  }, [maxUsersAtPage, getUPtc]);

  
// -----------------------------------------
  const changePage = (Page:number) => {
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
          {...props}
          changePage={changePage}
         
        />{" "}
      </>
    );
 
}

//-----------------------------------------//-----------------------------------------






export default compose(
  connect(mapStateToProps, {
    getUsersPageThunkCreator,
    changeSubscribeThunkCreator,
  })

) (UserConnectConreiner) 

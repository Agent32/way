import { connect } from "react-redux";
import * as axios from "axios";
import {
  getUsersPageThunkCreator,
  changeSubscribeThunkCreator,
} from "../redux/usersReducer";
import UsersPage from "../easyWb/bodComp/users/usersDrawer";
import React from "react";
import LoadingModule from "../easyWb/commonComponent/loader/loader";

class UserConnectConreiner extends React.Component {
  componentDidMount() {
    this.props.getUsersPageThunkCreator(
      0,
      this.props.pageSettings.maxUsersAtPage
    );
  }

  changePage = (Page) => {
    if (Page !== this.props.pageSettings.currentPage) {
      this.props.getUsersPageThunkCreator(
        Page,
        this.props.pageSettings.maxUsersAtPage
      );
    }
  };

  /*   changePage = (Page) => {
    if (Page !== this.props.pageSettings.currentPage) {  
   
    this.props.changeIsFinished(false)

    serverAL.getUsersList(Page, this.props.pageSettings.maxUsersAtPage) 
      .then((data) => {
        this.props.updateUserChange(data);
        this.props.changeCurPage(Page);
        this.props.changeIsFinished(true)
      });
    }
  }; */

  changeSubscribe = (userID, e) => {
    this.props.changeSubscribeThunkCreator(userID, e);
  };

  //множит юзеров из упдетай на два, дублирует
  //прочитать по класам в лерне Жс
  //почему-то конструктор 2 раза запускается, думаю нельзя в нем обхявлять запросы.
  // ========================================

  render() {
    return (
      <>
        {" "}
        {this.props.pageSettings.isLoadinFinished ? null : <LoadingModule />}
        <UsersPage
          pageSettings={this.props.pageSettings}
          usersList={this.props.usersList}
          changePage={this.changePage}
          userFollowChange={this.changeSubscribe}
        />{" "}
      </>
    );
  }
}

//-----------------------------------------//-----------------------------------------
const mapStateToProps = (state) => {
  return {
    usersList: state.usersPart.usersList,
    pageSettings: state.usersPart.pageSettings,
  };
};
// -----------------------------------------
/* const mapDispatchToProps = (dispatch) => {
  return {
    updateUserChange: (id) => dispatch(getMoreUsrAction(id)),
    userFollowChange: (id) => dispatch(changeUsrFollowAction(id)),
    changeCurPage: (id) => dispatch(changeCurrPageAction(id)),
    changeIsFinished: (isFinished) => dispatch(changeLoaderWaiterAction(isFinished)),
  };
}; */

//
// ========================================
const UserContainer = connect(mapStateToProps, {
  getUsersPageThunkCreator,
  changeSubscribeThunkCreator,
})(UserConnectConreiner);

export default UserContainer;

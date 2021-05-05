import { connect } from "react-redux";
import * as axios from "axios";
import {
  getUsersPageThunkCreator,
  changeSubscribeThunkCreator,
} from "../../../redux/usersReducer";
import UsersPage from "./usersDrawer";
import React from "react";
import LoadingModule from "../../commonComponent/loader/loader";
import { compose } from "redux";

class UserConnectConreiner extends React.Component {
  componentDidMount() {
    this.props.getUsersPageThunkCreator(
      0,
      this.props.pageSettings.maxUsersAtPage
    );
  }
// -----------------------------------------
  changePage = (Page) => {
    if (Page !== this.props.pageSettings.currentPage) {
      this.props.getUsersPageThunkCreator(
        Page,
        this.props.pageSettings.maxUsersAtPage
      );
    }
  };
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
          userFollowChange={this.props.changeSubscribeThunkCreator}
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





export default compose(
  connect(mapStateToProps, {
    getUsersPageThunkCreator,
    changeSubscribeThunkCreator,
  })

) (UserConnectConreiner) 

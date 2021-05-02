import { connect } from "react-redux";
import * as axios from "axios";
import {
  updateUserChange,
  userFollowChange,
  changeCurPage,
  changeIsFinished,
} from "../../../redux/userReducer";
import UsersPage from "./usersSearch";
import React from "react";
import LoadingModule from "../../commonComponent/loader/loader";

class UserConnectConreiner extends React.Component {
  componentDidMount() {
  this.props.changeIsFinished(false)
    axios
      .get(`https://60885809a6f4a300174263e9.mockapi.io/UserStack?page=1&limit=4`)
      .then((res) => {
        this.props.updateUserChange(res.data);
        this.props.changeIsFinished(true)
      });
  }

  changePage = (Page) => {
    if (Page !== this.props.pageSettings.currentPage) {  
   
    this.props.changeIsFinished(false)
    axios
      .get(
        `https://60885809a6f4a300174263e9.mockapi.io/UserStack?page=${Page}&limit=${this.props.pageSettings.maxUsersAtPage}`
      )
      .then((res) => {
        this.props.updateUserChange(res.data);
        this.props.changeCurPage(Page);
        this.props.changeIsFinished(true)
      });
    }
  };

  //множит юзеров из упдетай на два, дублирует
  //прочитать по класам в лерне Жс
  //почему-то конструктор 2 раза запускается, думаю нельзя в нем обхявлять запросы.
  // ========================================

  render() {
    return (
      <> {this.props.pageSettings.isLoadinFinished ? null : <LoadingModule/> }
     
      <UsersPage
        pageSettings={this.props.pageSettings}
        usersList={this.props.usersList}
        changePage={this.changePage}
        userFollowChange={this.props.userFollowChange}
      />  </>
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
const UserContainer = connect(
  mapStateToProps,
  {updateUserChange, userFollowChange, changeCurPage, changeIsFinished}
)(UserConnectConreiner);

export default UserContainer;

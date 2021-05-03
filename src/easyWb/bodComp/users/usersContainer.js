import { connect } from "react-redux";
import * as axios from "axios";
import {
  updateUserChange,
  userFollowChange,
  changeCurPage,
  changeIsFinished,
  getMaxUsers,
} from "../../../redux/usersReducer";
import UsersPage from "./usersDrawer";
import React from "react";
import LoadingModule from "../../commonComponent/loader/loader";

class UserConnectConreiner extends React.Component {
  componentDidMount() {
    
  this.props.changeIsFinished(false)
    axios
      .get(`https://dummyapi.io/data/api/user/?page=?page=${0}&limit=${this.props.pageSettings.maxUsersAtPage}`, {
        headers:  {
        'app-id':`608ec88017752b6496d65b8f`,
        }, })
     
      .then((res) => {
      
        this.props.getMaxUsers(res.data.total)
        this.props.updateUserChange(res.data);
        this.props.changeIsFinished(true)
      });
  }

  changePage = (Page) => {
    if (Page !== this.props.pageSettings.currentPage) {  
   
    this.props.changeIsFinished(false)//ck?page=${Page}&limit=${this.props.pageSettings.maxUsersAtPage}`
    axios
    .get(`https://dummyapi.io/data/api/user/?page=${Page}&limit=${this.props.pageSettings.maxUsersAtPage}`, {
      headers:  {
      'app-id':`608ec88017752b6496d65b8f`,
      }, })
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
  {updateUserChange, userFollowChange, changeCurPage, changeIsFinished, getMaxUsers}
)(UserConnectConreiner);

export default UserContainer;

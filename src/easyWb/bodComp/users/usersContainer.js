import { connect } from "react-redux";
import * as axios from "axios";
import {
  changeUsrFollowAction,
  getMoreUsrAction,
  changeCurrPageAction,
} from "../../../redux/userReducer";
import UsersPage from "./usersSearch";
import React from "react";

class UserConnectConreiner extends React.Component {
  componentDidMount() {
    axios
      .get(`https://60885809a6f4a300174263e9.mockapi.io/Test?page=1&limit=4`)
      .then((res) => {
        this.props.updateUserChange(res.data);
      });
  }

  changePage = (Page) => {
    axios
      .get(
        `https://60885809a6f4a300174263e9.mockapi.io/Test?page=${Page}&limit=${this.props.pageSettings.maxUsersAtPage}`
      )
      .then((res) => {
        this.props.updateUserChange(res.data);
        this.props.changeCurPage(Page);
      });
  };

  //множит юзеров из упдетай на два, дублирует
  //прочитать по класам в лерне Жс
  //почему-то конструктор 2 раза запускается, думаю нельзя в нем обхявлять запросы.
  // ========================================

  render() {
    return (
      <UsersPage
        pageSettings={this.props.pageSettings}
        usersList={this.props.usersList}
        changePage={this.changePage}
        userFollowChange={this.props.userFollowChange}
      />
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
const mapDispatchToProps = (dispatch) => {
  return {
    updateUserChange: (id) => dispatch(getMoreUsrAction(id)),
    userFollowChange: (id) => dispatch(changeUsrFollowAction(id)),
    changeCurPage: (id) => dispatch(changeCurrPageAction(id)),
  };
};
// ========================================
const UserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserConnectConreiner);

export default UserContainer;

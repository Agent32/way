import React from "react";
import {
  wallPostSend,
  wallPostEdit,
  getUser,
  changeIsFinished,
  getUserByIdTC,
  editQuote,
  updateQuteServer,
  editProfilePart,
  enableEditElement,
} from "../../../redux/profileReducer";
import Profile from "./profileDrawer";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";
import LoadingModule from "../../commonComponent/loader/loader";

import { compose } from "redux";

class ProfileConnectContainer extends React.Component {
  componentDidMount() {
    this.props.getUserByIdTC(this.props.match.params.userId);

    //props.match.params - navlink income
  }

  updateQuoteOnServer = () => {
    this.props.updateQuteServer(
      this.props.userData.id,
      this.props.changedText.whatEdit,
      this.props.userData[this.props.changedText.whatEdit]
    );
  };
  render() {
    return (
      <>
        {this.props.changedText.isLoadinFinished ? null : <LoadingModule />}

        <Profile
          changedText={this.props.changedText}
          userData={this.props.userData}
          postsWall={this.props.postsWall}
          wallPostSend={this.props.wallPostSend}
          wallPostEdit={this.props.wallPostEdit}
          getUser={this.props.getUser}
          editQuote={this.props.editQuote}
          updateQuoteOnServer={this.updateQuoteOnServer}
          enableEditElement={this.props.enableEditElement}
          editProfilePart={this.props.editProfilePart}
        />
      </>
    );
  }
}

// ========================================

// ========================================
const mapStateToProps = (state) => {
  return {
    changedText: state.bodyPart.changedText,
    userData: state.bodyPart.userData,
    postsWall: state.bodyPart.postsWall,
  };
};

export default compose(
  connect(mapStateToProps, {
    wallPostSend,
    wallPostEdit,
    getUser,
    changeIsFinished,
    getUserByIdTC,
    editQuote,
    updateQuteServer,
    enableEditElement,
    editProfilePart,
  }),
  withRouter
)(ProfileConnectContainer);

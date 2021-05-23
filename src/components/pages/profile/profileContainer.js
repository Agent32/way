import React, { useEffect } from "react";
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
  likeChangeTC,
  newWallPostTC,
} from "../../../store/profileReducer";
import Profile from "./profileDrawer";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";
import LoadingModule from "../../modules/loader/loader";

import { compose } from "redux";

function ProfileConnectContainer(props) {
  const usrID = props.match.params.userId;
  const usrFunc = props.getUserByIdTC;
 
  useEffect(() => {
    usrFunc(usrID);
  }, [usrID, usrFunc]);

  const updateQuoteOnServer = () => {
    props.updateQuteServer(
      props.userData.id,
      props.changedText.whatEdit,
      props.userData[props.changedText.whatEdit]
    );
  };

  const wallSend = (data) => {
    props.newWallPostTC(props.userData.id, data);
  };

  return (
    <>
      {props.changedText.isLoadinFinished ? null : <LoadingModule />}

      <Profile
        changedText={props.changedText}
        userData={props.userData}
        postsWall={props.postsWall}
        wallSend={wallSend}
        wallPostEdit={props.wallPostEdit}
        getUser={props.getUser}
        editQuote={props.editQuote}
        updateQuoteOnServer={updateQuoteOnServer}
        enableEditElement={props.enableEditElement}
        editProfilePart={props.editProfilePart}
        likeChangeTC={props.likeChangeTC}
        newWallPostTC={props.newWallPostTC}
      />
    </>
  );
}

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
    likeChangeTC,
    newWallPostTC,
  }),
  withRouter
)(ProfileConnectContainer);

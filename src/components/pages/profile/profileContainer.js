import React, { useEffect } from "react";
import {
  getUser,
  getUserByIdTC,
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
      props.profileSettings.whatEdit,
      props.userData[props.profileSettings.whatEdit]
    );
  };

  const wallSend = (data) => {
    props.newWallPostTC(props.userData.id, data);
  };

  return (
    <>
      {props.profileSettings.isLoadinFinished ? null : <LoadingModule />}

      <Profile
        profileSettings={props.profileSettings}
        userData={props.userData}
        postsWall={props.postsWall}
        wallSend={wallSend}
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
    profileSettings: state.bodyPart.profileSettings,
    userData: state.bodyPart.userData,
    postsWall: state.bodyPart.postsWall,
  };
};

export default compose(
  connect(mapStateToProps, {
    getUser,
    getUserByIdTC,
    updateQuteServer,
    enableEditElement,
    editProfilePart,
    likeChangeTC,
    newWallPostTC,
  }),
  withRouter
)(ProfileConnectContainer);

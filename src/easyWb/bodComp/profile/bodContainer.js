import React from "react";
import {
  wallPostActionCreator,
  textEditWallActionCreator,
} from "../../../redux/bodyReducer";
import Profile from "./Bod";
import { connect } from "react-redux";



/* function ProfileContainer(props) {
  const wallPostSend = () => {
    props.store.dispatch(wallPostActionCreator());
  };
  const wallPostEdit = (text) => {
    props.store.dispatch(textEditWallActionCreator(text));
  };

  return (
    <Profile
      changedText={props.store.getState().bodyPart.changedText}
      dataMass={props.store.getState().bodyPart.dataMass}
      postsWall={props.store.getState().bodyPart.postsWall}
      wallPostSend={wallPostSend}
      wallPostEdit={wallPostEdit}
    />
  );
} */
// ========================================
const mapStateToProps = (state) => {
  return { changedText: state.bodyPart.changedText,
    dataMass: state.bodyPart.dataMass,
    postsWall: state.bodyPart.postsWall
   };
};
const mapDispatchToProps = (dispatch) => {
  return {
    wallPostSend: () => dispatch(wallPostActionCreator()),
    wallPostEdit: (text) => dispatch(textEditWallActionCreator(text)),
  };
};
const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);


export default ProfileContainer;

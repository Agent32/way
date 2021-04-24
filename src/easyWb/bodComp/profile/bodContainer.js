import userStyle from "./user.module.css";
import newPost from "./newpost.module.css";
import PostHistory from "./history/massageWall";
import React from "react";
import {
  wallPostActionCreator,
  textEditWallActionCreator,
} from "../../../redux/bodyReducer";
import Profile from "./Bod";

function ProfileContainer(props) {
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
}
// ========================================

export default ProfileContainer;

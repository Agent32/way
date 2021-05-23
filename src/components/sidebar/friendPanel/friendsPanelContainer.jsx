import { connect } from "react-redux";
import React from "react";
import CompactFriendPanel from "./friendsPanelDrawer";
import { updateFriendsTC } from "../../../store/leftColonyReducer";

function FriendsPannelConnect(props) {
  React.useEffect(() => {
    if (props.isLoggedIn) {
      props.updateFriendsTC();
    }
  }, [props.isLoggedIn]);

  return <CompactFriendPanel {...props} />;
}

const mapStateToProps = (state) => {
  return {
    friendPanel: state.leftColonePart.friendPanel,
    isLoggedIn: state.autorizationPart.userData.isLoggedIn,
  };
};

const FriendColoneContainer = connect(mapStateToProps, { updateFriendsTC })(
  FriendsPannelConnect
);

export default FriendColoneContainer;

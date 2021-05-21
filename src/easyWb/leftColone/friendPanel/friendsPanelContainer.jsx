import { connect } from "react-redux";
import React from "react";
import CompactFriendPanel from "./friendsPanelDrawer";
import { updateFriendsTC } from "../../../redux/leftColonyReducer";

function FriendsPannelConnect(props) {
    React.useEffect(() => {
     if (props.isLoggedIn) {props.updateFriendsTC()}
    }, [props.isLoggedIn]); 

  return <CompactFriendPanel {...props} />;
}

/* function FriendsPannelConnect(...props) {
    React.useEffect(() => {
     props.updateFriendsTC();
    }, [props.isLoggedIn]); */

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
// isLoginned={props.state.autorizationPart.userData.isLoggedIn}

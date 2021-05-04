import React from "react";
import { connect } from "react-redux";
import CompactFriendPanel from "./friendsPanel";







const mapStateToProps = (state) => {
  
    return { friendPanel: state.leftColonePart.friendPanel, isLoggedIn: state.autorizationPart.userData.isLoggedIn };
};

const FriendColoneContainer = connect(
    mapStateToProps,
    {}
)(CompactFriendPanel);

export default FriendColoneContainer;
//isLoginned={props.state.autorizationPart.userData.isLoggedIn}
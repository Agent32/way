import React from "react";
import { connect } from "react-redux";

import {
  pmSendActionCreator,
  editPmTempActionCreator,
} from "../../../redux/massageReducer";

import MassagePage from "./massage";

/* function MassagePageContainer(props) {
  // ========================================

  //-----------------------------------
  const editPM = (text) => {
    props.store.dispatch(editPmTempActionCreator(text));
  };
  //-----------------------------------
  const sendPM = (id) => {
    props.store.dispatch(pmSendActionCreator(id));
  };

  //-----------------------------------
  return <MassagePage massagePart={props.store.getState().massagePart} editPM={editPM} sendPM={sendPM} />;
} */

const mapStateToProps = (state) => {
  return { massagePart: state.massagePart };
};
const mapDispatchToProps = (dispatch) => {
  return {
    editPM: (text) => dispatch(editPmTempActionCreator(text)),
    sendPM: (id) => dispatch(pmSendActionCreator(id)),
  };
};
const MassagePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MassagePage);

export default MassagePageContainer;

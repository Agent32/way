import React from "react";
import { connect } from "react-redux";

import {
  pmSendActionCreator,
  editPmTempActionCreator,
} from "../../../store/massageReducer";

import MassagePage from "./messageDrawer";

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

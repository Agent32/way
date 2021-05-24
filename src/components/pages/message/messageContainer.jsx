import { connect } from "react-redux";
import React, { useEffect } from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

import {
  getUsersPMlistTC,
  getCurrentDialogPM,
  setIsUserSelected,
  addSendPm,
} from "../../../store/messageReducer";

import MassagePage from "./messageDrawer";
import LoadingModule from "../../modules/loader/loader";
import { serverAL } from "../../../api/api";

function MessageContainerConnect(props) {
  const pmID = props.match.params.userPMId;

  useEffect(() => {
    props.getUsersPMlistTC();
  }, []);

  useEffect(() => {
    if (!isNaN(pmID)) {
      props.getCurrentDialogPM(pmID);
    } else {
      props.getCurrentDialogPM(2);
    }
  }, [pmID]);

  async function sendMassageToServer(data) {
    try {
      const getPM = await serverAL.sendPM(pmID, data);
      props.addSendPm(getPM);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {props.isSomethingLoading ? <LoadingModule /> : null}
      <MassagePage {...props} sendMassageToServer={sendMassageToServer} />{" "}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    usersPMlist: state.massagePart.usersPMlist,
    selectedDiadlog: state.massagePart.selectedDiadlog,
    pmSettings: state.massagePart.pmSettings,
    isSomethingLoading: state.commonPart.loadingModules.isSomethingLoading,
  };
};

const MassagePageContainer = compose(
  connect(mapStateToProps, {
    getUsersPMlistTC,
    getCurrentDialogPM,
    setIsUserSelected,
    addSendPm,
  }),
  withRouter,
  React.memo
)(MessageContainerConnect);

export default MassagePageContainer;

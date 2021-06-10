import { connect, ConnectedProps } from "react-redux";
import React, { useEffect } from "react";
import { compose } from "redux";
import { withRouter, RouteComponentProps } from "react-router-dom";

import {
  getUsersPMlistTC,
  getCurrentDialogPrivatTC,
} from "../../../store/messageReducer";

import {
  addSendPm,
} from "../../../store/actions/privateMassageActions";

import MassagePage from "./messageDrawer";
import LoadingModule from "../../modules/loader/loader";
import { serverAL } from "../../../api/api";
import { mainStateType } from "../../../store/rStore";


const mapStateToProps = (state: mainStateType) => {
  return {
    usersPMlist: state.massagePart.usersPMlist,
    selectedDiadlog: state.massagePart.selectedDiadlog,
    pmSettings: state.massagePart.pmSettings,
    isSomethingLoading: state.commonPart.loadingModules.isSomethingLoading,
  };
};


const connector = connect(mapStateToProps, { getUsersPMlistTC, getCurrentDialogPM: getCurrentDialogPrivatTC, addSendPm })
type PropsFromConnect = ConnectedProps<typeof connector>

type TParams = { userPMId: string };
function MessageContainerConnect(props: PropsFromConnect & RouteComponentProps<TParams>) {

  const pmID = props.match.params.userPMId || '2'

  useEffect(() => {
    props.getUsersPMlistTC();
  }, []);

  useEffect(() => {

    props.getCurrentDialogPM(pmID);

  }, [pmID]);

  async function sendMassageToServer(data: any) {
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



const MassagePageContainer = compose(
  connect(mapStateToProps, {
    getUsersPMlistTC,
    getCurrentDialogPM: getCurrentDialogPrivatTC,
    addSendPm,
  }),
  withRouter,
  React.memo
)(MessageContainerConnect);



export default MassagePageContainer;

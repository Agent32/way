import React from "react";
import {
  pmSendActionCreator,
  editPmTempActionCreator,
} from "../../../redux/massageReducer";

import MassagePage from "./massage";


function MassagePageContainer(props) {
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
}

export default MassagePageContainer;

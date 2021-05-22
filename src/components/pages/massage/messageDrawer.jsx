import massage from "./massage.module.css";
import React, { useState } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";


function MassagePage(props) {
  const dialogsMain = props.massagePart.dialogsMain;
  const [selecId, setTempID] = useState(0);
  
  // ========================================
  function DrawAutors(props) {
   
    return (
      <div className={massage.nameAut}>
        <NavLink
          to={props.href}
          activeClassName={massage.active}
          onClick={() => setTempID(props.selectedId)}
        >
          {props.autor}{" "}
        </NavLink>
      </div>
    );
  }
  // ========================================

  const formDialog = dialogsMain.map((dialog, count) => (
    <DrawAutors
      key={dialog.id}
      autor={dialog.name}
      href={dialog.path}
      selectedId={dialog.id}
    />
  ));
  // ========================================
  const formMassage = dialogsMain.map((dialog, count) => (
    <Route
      className={massage.autorUser}
      key={dialog.id}
      path={dialog.path}
      component={() => (
        <DrawDialog autor={dialog.name} chat={dialog.userDialogs} />
      )}
    ></Route>
  ));
  // ========================================

  // ========================================
  
  return (
    <BrowserRouter>
      <div className={massage.main}>
        <div className={massage.autor}>{formDialog}</div>
        {formMassage}
      </div> <NewPost
        id={selecId}
        editPM={props.editPM}
        sendPM={props.sendPM}
        changedText={props.massagePart.changedText}
      /> 
     
     
    </BrowserRouter>
  );
}

function DrawDialog(props) {
  return (
    <span className={massage.dialogMassage}>
      <DrawMassageText autor={props.autor} dialog={props.chat} />
    </span>
  );
}

function DrawMassageText(props) {
  const baba = props.dialog.map((current, count) => (
    <div
      key={count}
      className={
        current.slice(0, props.autor.length).includes(props.autor)
          ? massage.autorUser
          : massage.autorNotUser
      }
    >
      {current}
    </div>
  ));
  return baba;
}

function NewPost(props) {
  let areaPMtemp = React.createRef();


  return (
    <div className={massage.newpost}>
      <h2> My posts</h2>
      <textarea
        ref={areaPMtemp}
        onChange={() => props.editPM(areaPMtemp.current.value)}
        value={props.changedText.PMtext}
        placeholder="your news..."
      />
      <div />
      <button onClick={() => props.sendPM(props.id)}> Send</button>
    </div>
  );
}

export default React.memo(MassagePage);

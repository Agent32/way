import massage from "./massage.module.css";
import React, { useState } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";


/*  <Route path='/massage/test' component={()=><DrawDialog  chat={dialog.userDialogs} /> }/>
      <Route path='/massage/test2' component={()=><DrawDialog  chat={dialog2.userDialogs} /> }/>
       <DrawAutors autor={dialog.name} href='/massage/test'/>
    <DrawAutors autor={dialog2.name} href='/massage/test2'/>

     ((dialog.userDialogs.slice(0, dialog.userDialogs.length).includes(dialog.name)) ? 
         massage.autorUser : massage.autorNotUser ) 
      */

function MassagePage(props) {
debugger
  const dialogsMain = props.massagePart.dialogsMain;
  const [selecId, setCount] = useState(0);
  // ========================================
  function DrawAutors(props) {
    return (
      <div className={massage.nameAut}>
        <NavLink
          to={props.href}
          activeClassName={massage.active}
          onClick={() => setCount(props.selectedId)}
        >
          {props.autor}{" "}
        </NavLink>
      </div>
    );
  }
  // ========================================

  const formDialog = dialogsMain.map((dialog, count) => (
    <DrawAutors
      key={count}
      autor={dialog.name}
      href={dialog.path}
      selectedId={dialog.id}
    />
  ));
  // ========================================
  const formMassage = dialogsMain.map((dialog, count) => (
    <Route
      className={massage.autorUser}
      key={count}
      path={dialog.path}
      component={() => (
        <DrawDialog autor={dialog.name} chat={dialog.userDialogs} />
      )}
    />
  ));
  // ========================================
  return (
    <BrowserRouter>
      <div className={massage.main}>
        <div className={massage.autor}>{formDialog}</div>
        {formMassage}
      </div>{" "}
      <NewPost
        id={selecId}
        editPM={props.editPM} sendPM={props.sendPM}
        changedText= {props.massagePart.changedText}
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
  // let butValue = areaNewPost.current.value
  // props.postMassage(areaNewPost.current.value, props.id)

  return (
    <div className={massage.newpost}>
      <h2> My posts</h2>
      <textarea
        ref={areaPMtemp}
        onChange={ () =>
          props.editPM(areaPMtemp.current.value)
        }
        value={props.changedText.PMtext}
        placeholder="your news..."
      />
      <div />
      <button
        onClick={() =>
          
            props.sendPM(props.id)
         
        }
      >
        {" "}
        Send
      </button>
    </div>
  );
}

export default MassagePage;

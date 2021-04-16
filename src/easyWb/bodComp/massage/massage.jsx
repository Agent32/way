import massage from "./massage.module.css";
import React, { useState } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import {postMassage} from '../../../redux/state';

/*  <Route path='/massage/test' component={()=><DrawDialog  chat={dialog.userDialogs} /> }/>
      <Route path='/massage/test2' component={()=><DrawDialog  chat={dialog2.userDialogs} /> }/>
       <DrawAutors autor={dialog.name} href='/massage/test'/>
    <DrawAutors autor={dialog2.name} href='/massage/test2'/>

     ((dialog.userDialogs.slice(0, dialog.userDialogs.length).includes(dialog.name)) ? 
         massage.autorUser : massage.autorNotUser ) 
      */

function MassagePage(props) {
  const dialogsMain = props.dialogsMain;
  let selectedId =0;

  const formDialog = dialogsMain.map((dialog, count) => (
    <DrawAutors key={count} autor={dialog.name} href={dialog.path} selectedId={selectedId}/>
  ));
  
  const formMassage = dialogsMain.map((dialog, count) => (
    <Route
      className={massage.autorUser }
      key={count}
      path={dialog.path}
      component={() => <DrawDialog autor= {dialog.name} chat={dialog.userDialogs} />}
    /> 
  ));

  // <Route path='/massage/test' component={DrawDialog} />
  return (
    <BrowserRouter>
      <div className={massage.main}>
        <div className={massage.autor}>{formDialog}</div>
        {formMassage} 
      </div> <NewPost id={selectedId} />
     
    </BrowserRouter>
  );
}

function DrawAutors(props) {
  return (
    <div className={massage.nameAut}>
      <NavLink to={props.href} activeClassName={massage.active} >
        {props.autor}{" "}
      </NavLink>
    </div>
  );
}

function DrawDialog(props) {
  return (
    <span className={massage.dialogMassage}><DrawMassageText autor={props.autor} dialog={props.chat} /></span>
  );
}

function DrawMassageText(props) {
  const baba = props.dialog.map((current, count) => (
    <div key={count}
    className={
      ((current.slice(0, props.autor.length).includes(props.autor)) ? 
         massage.autorUser : massage.autorNotUser ) 
    }
    >{current}
    </div>
  ));
  return baba
}


function NewPost (props) {

  let areaNewPost=React.createRef()
 // let butValue = areaNewPost.current.value

  return (
    <div className={massage.newpost}>
      <h2> My posts</h2>
      <textarea ref={areaNewPost} placeholder='your news...' />
      <div />
      <button onClick={()=> postMassage(areaNewPost.current.value, props.id)}> Send</button>
    </div>
  )
}


export default MassagePage;

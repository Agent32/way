import message from "./message.module.css";
import React, { useState } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { bigField, inputCondition } from "../../modules/inputErorPanel/input";
function MessagePage(props) {
  const userListForPM = props.usersPMlist.map((current, count) => {
    return (
      <NavLink
        to={`/message/${current.id}`}
        activeClassName={message.active}
        key={current.id}
      >
        <div>{current.firstName}</div>
      </NavLink>
    );
  });

  //--------------------------------------------------------
  const choosenPM = props.selectedDiadlog.map((current, count) => {
    return (
      <div className={message.oneMess} >
        <img src={current.avatar} className={message.ava} />
        <span
          key={current.pmId}
          className={message.text}
        >{`${current.firstName}: ${current.text}`}</span>
      </div>
    );
  });
  //--------------------------------------------------------

  const sendPanel = (props) => {
    const { pristine, submitting } = props;
    return (
      <form onSubmit={props.handleSubmit}>
        <Field
          component="textarea"
          label={`What on mind?`}
          component={bigField}
          validate={[inputCondition.required]}
          name="text"
        />
        <br />
        <button type="submit" disabled={pristine || submitting}>
          Send
        </button>
      </form>
    );
  };
  //----------------
  const SendPostForm = reduxForm({
    form: "wallPostForm",
  })(sendPanel);
  //--------------------------------------------------------
  return (
    <div className={message.main}>
      {" "}
      <div className={message.autor}>{userListForPM}</div>
      <div className={message.dialogMassage}>
        {choosenPM}
        <div className={message.inputArea}>
          {" "}
          <SendPostForm onSubmit={props.sendMassageToServer} />{" "}
        </div>
      </div>
    </div>
  );
}

export default React.memo(MessagePage);

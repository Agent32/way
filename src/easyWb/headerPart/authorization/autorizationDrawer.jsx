import autiruzationStyle from "./autorization.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import {renderField, inputCondition } from "../../commonComponent/inputErorPanel/input";

const maxLength10 = inputCondition.maxLength(10)
const minLength2 = inputCondition.minLength(2)

function AutorizationDrawer(props) {
    //---------------------------------------------------------
  function logined() {
    return (
      <div className={autiruzationStyle.login}>
        <div>
          <img
            className={autiruzationStyle.userAvatarLogin}
            src={props.userData.loginData.avatar}
          />{" "}
          Hello {props.userData.loginData.userName}
        </div>
        <div className={autiruzationStyle.loginButt}>
          {" "}
          <button onClick={props.tryLogout}> Logout</button>{" "}
        </div>
      </div>
    );
  }

  function notLogined() {
    //---------------------------------------------------------
    const LogFormWithRed = reduxForm({
      form: "loginForm",
    })(LoginForm);
  //---------------------------------------------------------
    function LoginForm(props) {
      const {  pristine, submitting } = props
      return (
        <form onSubmit={props.handleSubmit}>
          {" "}
          <div>
            <Field 
            
            component="input" name="login" placeholder={`Login`}
            validate={[inputCondition.required, maxLength10, minLength2]}
            
              />{" "}
          </div>{" "}
          <div>
            <Field
              component="input"
              name="password"
              placeholder={`Password`}
              type="password"
              validate={[inputCondition.required, maxLength10, minLength2]}
            />{" "}
          </div>
          <button type="submit"  disabled={pristine || submitting}> Login </button>{" "}
          <NavLink to={`/register`}>
            <button>Registration</button>{" "}
          </NavLink>
        </form>
      );
    }
  //---------------------------------------------------------

    return (
      <div className={autiruzationStyle.logout}>
        <LogFormWithRed onSubmit={props.loginFormSubmit} />
      </div>
    );
  }
  //---------------------------------------------------------
  return <> {props.userData.isLoggedIn ? logined() : notLogined()}</>;
}

export default AutorizationDrawer;

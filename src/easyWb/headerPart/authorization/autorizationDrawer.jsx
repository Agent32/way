import autiruzationStyle from "./autorization.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
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
      return (
        <form onSubmit={props.handleSubmit}>
          {" "}
          <div>
            <Field component="input" name="login" placeholder={`Login`} />{" "}
          </div>{" "}
          <div>
            <Field
              component="input"
              name="password"
              placeholder={`Password`}
              s
            />{" "}
          </div>
          <button> Login </button>{" "}
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

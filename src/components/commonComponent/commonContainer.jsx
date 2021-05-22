import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";
import { compose } from "redux";
import LoadingModule from "./loader/loader";
import { changeLoadStatus } from "../store/commonReduser";
import { renderField, inputCondition } from "./inputErorPanel/input";
//---------------------------------------------------------
export const withAutoredirectNotLogIn = (Component) => {
  const mapStateToProps = (state) => {
    return {
      isLoggedIn: state.autorizationPart.userData.isLoggedIn,
    };
  };
  class regRedirect extends React.Component {
    render() {
      if (!this.props.isLoggedIn) {
        return <Redirect to={"/register"} />;
      }
      return <Component {...this.props} />;
    }
  }

  return connect(mapStateToProps, {})(regRedirect);
};
//---------------------------------------------------------
export const withAutoredirectNotLogOut = (Component) => {
  const mapStateToProps = (state) => {
    return {
      isLoggedIn: state.autorizationPart.userData.isLoggedIn,
    };
  };
  class regRedirect extends React.Component {
    render() {
      if (this.props.isLoggedIn) {
        return <Redirect to={"/profile"} />;
      }
      return <Component {...this.props} />;
    }
  }

  return connect(mapStateToProps, {})(regRedirect);
};

//---------------------------------------------------------
export const withLoading = (Component) => {
  class ConnectLoadin extends React.Component {
    render() {
      const Wat = connect(mapStateToProps, { changeLoadStatus })(Component);
      return <Wat {...this.props} LoadingModule={LoadingModule} />;
    }
  }

  const mapStateToProps = (state) => {
    return {
      isSomethingLoading: state.commonPart.loadingModules.isSomethingLoading,
    };
  };

  return ConnectLoadin;
};
//---------------------------------------------------------

export const changeObjInMass = (arrayOfProps, needChangePropNameStr, needChangePropNameValue, newValueStr) =>
{
 return arrayOfProps.map ((current, count) => {
 if (current[needChangePropNameStr] === needChangePropNameValue) { current[newValueStr]= !current[newValueStr]}
 return current
 })

}
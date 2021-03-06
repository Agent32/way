import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";
import { compose } from "redux";
import LoadingModule from "./loader/loader";
import { renderField, inputCondition } from "./inputErorPanel/input";
import { changeLoadStatus } from "../../store/actions/actionCommonReduser";
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

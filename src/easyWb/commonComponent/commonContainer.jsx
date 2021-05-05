import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";
import { compose } from "redux";

export const withAutoredirect = (Component) => {
  class ConnectRedirect extends React.Component {
    render() {
      if (!this.props.isLoggedIn) {
        return <Redirect to={"/register"} />;
      }
      return <Component {...this.props} />;
    }
  }

  const mapStateToProps = (state) => {
    return {
      isLoggedIn: state.autorizationPart.userData.isLoggedIn,
    };
  };

  compose(connect(mapStateToProps, {}))(Component);
  return ConnectRedirect;
};


/* export const withLoading = (Component) => {
    class ConnectLoadinf extends React.Component {
      render() {
        if (!this.props.isLoggedIn) {
          return <Redirect to={"/register"} />;
        }
        return <Component {...this.props} />;
      }
    }
  
    const mapStateToProps = (state) => {
      return {
        isLoggedIn: state.autorizationPart.userData.isLoggedIn,
      };
    };
  
    compose(connect(mapStateToProps, {}))(Component);
    return ConnectRedirect;
  }; */
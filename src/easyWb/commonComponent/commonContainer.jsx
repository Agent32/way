import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";
import { compose } from "redux";
import LoadingModule from "./loader/loader";
import { changeLoadStatus } from "../../redux/commonReduser";

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


 export const withLoading = (Component) => {

    class ConnectLoadin extends React.Component {
      
      render() {
      const Wat= connect(mapStateToProps,  {changeLoadStatus,})(Component)
        return <Wat {...this.props} LoadingModule={LoadingModule} 
        
        />;
      }
    }
  
    const mapStateToProps = (state) => {
      return {
        isSomethingLoading: state.commonPart.loadingModules.isSomethingLoading,

      };
    };
    
    
    return ConnectLoadin
  }; 
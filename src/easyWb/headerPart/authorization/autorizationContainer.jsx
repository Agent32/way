import React from "react";

import AutorizationDrawer from "./autorizationDrawer";
import { connect } from "react-redux";
import * as axios from "axios";
import {withRouter} from 'react-router-dom'




class AutorizationContainerConnect extends React.Component {
  componentDidMount() {}

  

  


  render() {
    return (
      <>
     
     
     <AutorizationDrawer 
  
     />
      </>
    )
  }

}

// ========================================


// ========================================
const mapStateToProps = (state) => {
  
  return { 
   };
};


const AutorizationContainer = connect(
  mapStateToProps,
  {}
)(withRouter(AutorizationContainerConnect));


export default AutorizationContainer;

import React from "react";

import { connect } from "react-redux";
import { compose } from "redux";
import { serverAL } from "../../../api/api";
import RegDrawer from "./regDrawer";
import { withAutoredirectNotLogOut, withLoading } from "../../commonComponent/commonContainer";


class RegFormConnectContainer extends React.Component {
 

 subitRegToServer = (subData) =>
 {
   
  this.props.changeLoadStatus(true)
   serverAL.newUser(subData). then (ans => {console.log(ans) 
    this.props.changeLoadStatus(false)
  })
  
 }
  
  render() {
    
   
    
    return (
      <> 
       { this.props.isSomethingLoading ? <this.props.LoadingModule />: null }
       
        <RegDrawer
         subitRegToServer = {this.subitRegToServer} 
         
        />
      </>
    );
  }
}

// ========================================

// ========================================
const mapStateToProps = (state) => {
  return {
  
  };
};


export default compose ( connect(mapStateToProps, {}),
withLoading, 
withAutoredirectNotLogOut,
)
(RegFormConnectContainer)

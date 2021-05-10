import React from "react";

import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { serverAL } from "../../../redux/dal/api";
import LoadingModule from "../../commonComponent/loader/loader";
import RegDrawer from "./regDrawer";
import { withLoading } from "../../commonComponent/commonContainer";


class RegFormConnectContainer extends React.Component {
  componentDidMount() {
   

    //props.match.params - navlink income   {this.props.changedText.isLoadinFinished ? null : <LoadingModule />}

  }

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
)
(RegFormConnectContainer)

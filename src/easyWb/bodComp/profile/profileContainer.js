import React from "react";
import {
  wallPostSend,
  wallPostEdit,
  getUser,
  changeIsFinished,
} from "../../../redux/profileReducer";
import Profile from "./profileDrawer";
import { connect } from "react-redux";
import * as axios from "axios";
import {withRouter} from 'react-router-dom'
import LoadingModule from "../../commonComponent/loader/loader";


/* function ProfileContainer(props) {
  const wallPostSend = () => {
    props.store.dispatch(wallPostActionCreator());
  };
  const wallPostEdit = (text) => {
    props.store.dispatch(textEditWallActionCreator(text));
  };

  return (
    <Profile
      changedText={props.store.getState().bodyPart.changedText}
      dataMass={props.store.getState().bodyPart.dataMass}
      postsWall={props.store.getState().bodyPart.postsWall}
      wallPostSend={wallPostSend}
      wallPostEdit={wallPostEdit}
    />
  );
} */

class ProfileConnectContainer extends React.Component {
  componentDidMount() {
    debugger
    const loadUser = this.props.match.params.userId || `0F8JIqi4zwvb77FGz6Wt`
  this.props.changeIsFinished(false)
  axios
  .get(`https://dummyapi.io/data/api/user/${loadUser}`, {
    headers:  {
    'app-id':`608ec88017752b6496d65b8f`,
    },
    
  })
  .then((res) => {
        this.props.getUser(res.data);
        this.props.changeIsFinished(true)
      });
  }

  

/*   changeUser = (id) => {
    if (id !== this.props.pageSettings.currentPage) {  
   
    this.props.changeIsFinished(false)
    axios
      .get(
        `https://60885809a6f4a300174263e9.mockapi.io/UserStack/?id=${1}`
      )
      .then((res) => {
        this.props.updateUserChange(res.data);
        this.props.changeCurPage(id);
        this.props.changeIsFinished(true)
      });
    }
  };  */

  render() {
    return (
      <>
      {this.props.changedText.isLoadinFinished ? null : <LoadingModule/> }
     
     <Profile 
     changedText={this.props.changedText}
     userData={this.props.userData}
     postsWall={this.props.postsWall}
     wallPostSend={this.props.wallPostSend}
     wallPostEdit={this.props.wallPostEdit}
     getUser={this.props.getUser}
     />
      </>
    )
  }

}

// ========================================


// ========================================
const mapStateToProps = (state) => {
  
  return { changedText: state.bodyPart.changedText,
    userData: state.bodyPart.userData,
    postsWall: state.bodyPart.postsWall
   };
};
const ProfileContainer = connect(
  mapStateToProps,
  {wallPostSend, wallPostEdit, getUser,changeIsFinished}
)(withRouter(ProfileConnectContainer));





export default ProfileContainer;

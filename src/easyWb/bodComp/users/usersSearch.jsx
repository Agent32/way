import users from "./users.module.css";
import * as axios from "axios";
import React from "react";
//-----------------------------------------
class UsersPage extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get("https://60885809a6f4a300174263e9.mockapi.io/Test")
      .then((res) => {
        this.props.updateUserChange(res.data);
      });
  }


  //-----------------------------------------//-----------------------------------------
  render() {
    const formUsers = this.props.usersList.map((currUsers, count) => {
      return (
        <div className={users.post} key={currUsers.id}>
          <img src={currUsers.avatarImg} />
  
          <div className={users.name}>
            {` ${currUsers.name} ${currUsers.secondName}`}{" "}
          </div>
  
          <div className={users.adress}>
            {" "}
            {` ${currUsers.adressCountry} ${currUsers.adressCity}`}
            <button onClick={() => this.props.userFollowChange(currUsers.id)}>
              {" "}
              {currUsers.isFollow ? "UnSubscribe" : "Subscribe"}
            </button>
          </div>
  
          <div className={users.quote}> {` ${currUsers.userQuote} `} </div>
        </div>
      );
    });

    
    return (
      <div className={users.main}>
        {formUsers}
        <div>
          {" "}
          <button onClick={() => alert(1)} />{" "}
        </div>
      </div>
    );
  }
}

export default UsersPage;

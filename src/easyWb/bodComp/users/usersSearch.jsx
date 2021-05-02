import users from "./users.module.css";
import React from "react";
import { NavLink } from "react-router-dom";


// -----------------------------------------
function UsersPage(props) {
  const maxPagesNumber = props.pageSettings.allUsersCount;
  const maxItemsInPage = props.pageSettings.maxUsersAtPage;

  const pagesToDraw = Math.ceil(maxPagesNumber / maxItemsInPage);

  //------------------------------
  const buttOns = [];
  for (let i = 1; i <= pagesToDraw; i++) {
    buttOns.push(
      <span key={i}>
        <button
          className={
            props.pageSettings.currentPage === i
              ? users.activeB
              : users.regularB
          }
          onClick={() => props.changePage(i)}
        >
          {i}
        </button>{" "}
      </span>
    );
  }
  // ------------------------------
  const formUsers = props.usersList.map((currUsers, count) => {
    return (
      <div className={users.post} key={currUsers.id}>
        <NavLink to={`/profile/${currUsers.id}`} >
        <img
          src={currUsers.avatarImg}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://discord.com/assets/dd77cf000a729a9bf0fc03b97e1e4a5d.svg";
          }}
        /></NavLink>

        <div className={users.name}>
          {` ${currUsers.name} ${currUsers.secondName}`}{" "}
        </div>

        <div className={users.adress}>
          {" "}
          {` ${currUsers.adressCountry} ${currUsers.adressCity}`}
          <button onClick={() => props.userFollowChange(currUsers.id)}>
            {" "}
            {currUsers.isFollow ? "UnSubscribe" : "Subscribe"}
          </button>
        </div>

        <div className={users.quote}> {` ${currUsers.userQuote} `} </div>
      </div>
    );
  });

  //-----------------------------------------//-----------------------------------------

  return (
    <div className={users.main}>
      <div>{buttOns}</div>
      {formUsers}
      <div>{buttOns}</div>
    </div>
  );
}

export default UsersPage;

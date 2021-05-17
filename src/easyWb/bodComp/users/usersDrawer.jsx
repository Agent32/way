import users from "./users.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

// -----------------------------------------
function UsersPage(props) {

  const maxPagesNumber = props.pageSettings.allUsersCount;
  const maxItemsInPage = props.pageSettings.maxUsersAtPage;

  const pagesToDraw = Math.ceil(maxPagesNumber / maxItemsInPage);

  //------------------------------
  const pageButtOns = []; //зфпу
  for (let i = 1; i <= pagesToDraw; i++) {
    pageButtOns.push(
      <span key={i}>
        <button
          className={
            props.pageSettings.currentPage === i //css
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
        <NavLink to={`/profile/${currUsers.id}`}>
          <img
            alt={"UsersPicture"}
            src={currUsers.picture}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://discord.com/assets/dd77cf000a729a9bf0fc03b97e1e4a5d.svg";
            }}
          />
        </NavLink>

        <div className={users.name}>
          {`${currUsers.title} ${currUsers.firstName} ${currUsers.lastName}`}
        </div>

        <div className={users.adress}>
          {` ${currUsers.adressCountry} ${currUsers.adressCity}`}

          <button
            id={currUsers.id}
            onClick={(e) => {
              props.userFollowChange(currUsers.id, e, currUsers.isFollow);
            }}
          >
            {currUsers.isFollow ? "UnSubscribe" : "Subscribe"}
          </button>
        </div>
        <div className={users.quote}> {` ${currUsers.quote} `} </div>
      </div>
    );
  });

  //-----------------------------------------//-----------------------------------------

  return (
    <div className={users.main}>
      <div>{pageButtOns}</div>
      {formUsers}
      <div>{pageButtOns}</div>
    </div>
  );
}

export default React.memo( UsersPage);

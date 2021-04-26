import users from "./users.module.css";
//-----------------------------------------
function UsersPage(props) {
  const formUsers = props.usersList.map((currUsers, count) => {
    return (
      <div className={users.post} key={currUsers.id}>
        <img src={currUsers.avatarImg} />

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
  return <div className={users.main}>{formUsers}</div>;
}

export default UsersPage;

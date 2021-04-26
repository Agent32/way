import users from "./users.module.css";

function UsersPage(props) {
  debugger
  const formUsers = props.usersPart.usersList.map((currUsers, count) => {
    return (
    <div className={users.post}>
      <img src={currUsers.avatarImg} />
      
      <div className={users.name} ><span>{` ${currUsers.name} ${currUsers.secondName}`} </span> </div>
     
      <div className={users.adress}> <span>{` ${currUsers.adressCountry} ${currUsers.adressCity}`} </span> </div>
      <div className={users.quote}> <span>{` ${currUsers.userQuote} `} </span> </div>
    </div>) 
  });
  return <div className={users.main}>{formUsers}</div>;
}

export default UsersPage;

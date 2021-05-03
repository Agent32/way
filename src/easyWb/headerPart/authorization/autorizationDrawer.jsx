import autiruzationStyle from "./autorization.module.css";
import React from "react";
function AutorizationDrawer(props) {


function logined ()
{
  return ( 
    <div className={autiruzationStyle.login}>
    <div>
   <img className={autiruzationStyle.userAvatarLogin} src = {props.userData.loginData.avatar} />   Hello {props.userData.loginData.userName}
      </div>
      <div className={autiruzationStyle.loginButt}>  <button onClick={ props.tryLogout}> Logout</button>  </div>

  </div>
    
    )

 
}

function notLogined ()
{ 
  const areaLogin = React.createRef();
  const areaPassword = React.createRef();
  
  return (
    <div className={autiruzationStyle.logout}>
    <div>
      Login:       
      <input
        ref={areaLogin}
        onChange={() => props.editLoginArea(areaLogin.current.value)}
        value={props.userData.inputLogin}
      />{" "}
    </div>{" "}
    <div>
      Password: 
      <input
        ref={areaPassword}
        onChange={() => props.editPasswordArea(areaPassword.current.value)}
        value={props.userData.inputPassword}
      />{" "}
    </div >
    <div className={autiruzationStyle.loginButt}>  <button onClick={ props.getAutorization}> Login </button> <button> Register</button>  </div>
  </div>
   )

 
}

  
  return (
    < > {props.userData.isLoggedIn ? logined() : notLogined() }

    </>
  );
}

export default AutorizationDrawer;

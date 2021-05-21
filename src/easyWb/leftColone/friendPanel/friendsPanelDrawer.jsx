import friendPanelStyle from './friendPanel.module.css'
import { NavLink } from 'react-router-dom'

function CompactFriendPanel (props) {
  function logined () {
    return (
      <div className={friendPanelStyle.main}>
        {' '}
        {props.friendPanel.map((friend, count) => (
          
  

  <NavLink to={`/profile/${friend.id}`}>    <img key={count} src={friend.picture} alt={'friendPic'} /> </NavLink> 



        ))}{' '}
      </div>
    )
  }

/*   onError={(e) => {
    e.target.onerror = null;
    e.target.src =
      "https://discord.com/assets/dd77cf000a729a9bf0fc03b97e1e4a5d.svg";
  }} */
  
  
  function userNotLogined () {}
  // {props.isLoginned?  userNotLogined(): logined ()

  return <> {props.isLoggedIn ? logined() : userNotLogined()} </>
}

export default CompactFriendPanel

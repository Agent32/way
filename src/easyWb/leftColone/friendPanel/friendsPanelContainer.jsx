import friendPanelStyle from './friendPanel.module.css'

function CompactFriendPanel (props) {



 function  logined ()
 {
return  <div className={friendPanelStyle.main} > {props.friendPanel.map ( (friend, count) => (<img key={count} src={friend.avatar}></img> ) )} </div>
 }

 function userNotLogined ()
 {

 }


    return (
  
  <> {props.isLoginned?  logined(): userNotLogined() }  </>
  
    )
  }

export default CompactFriendPanel
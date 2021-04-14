import friendPanelStyle from './friendPanel.module.css'

function CompactFriendPanel (props) {

  const friendsAvatars = props.friendPanel.map ( (friend, count) => (<img key={count} src={friend.avatar}></img> ) )  

    return (
  
    <div className={friendPanelStyle.main} >{friendsAvatars}</div>
  
    )
  }

export default CompactFriendPanel
import friendPanelStyle from "./friendPanel.module.css";
import { NavLink } from "react-router-dom";

function CompactFriendPanel(props) {
  function logined() {
    return (
      <div className={friendPanelStyle.main}>
        {" "}
        {props.friendPanel.map((friend, count) => (
          <NavLink to={`/profile/${friend.id}`}>
            {" "}
            <img key={count} src={friend.picture} alt={"friendPic"} />{" "}
          </NavLink>
        ))}{" "}
      </div>
    );
  }

  function userNotLogined() {}

  return <> {props.isLoggedIn ? logined() : userNotLogined()} </>;
}

export default CompactFriendPanel;

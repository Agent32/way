import userStyle from "./user.module.css";
import newPost from "./newpost.module.css";
import PostHistory from "./history/massageWall";
import React from "react";
import ProfileStatus from "./status/profileStatus";

function Profile(props) {
  

  const userData = props.userData;
  const postsWall = props.postsWall;


  const formWall = postsWall.map((post, count) => (
    <PostHistory
      key={count}
      avatarImg={post.avatarImg}
      text={post.text}
      date={post.date}
      likes={post.likes}
    />
  ));
// ---------------------------------------
  const currenUserData = (
    <div className={userStyle.userdataBlock}>
      <img src={userData.picture} />
      <div>
        <div>id: {userData.id}</div>
        <div>
        
          Name: {`${userData.title}. ${userData.firstName} ${userData.lastName}`}
        </div>
        <div> Gender: {userData.gender} </div>
        <div> Mail: {userData.email}</div>
        <div> Birth: {userData.dateOfBirth}</div>
        <div> Register: {userData.registerDate}</div>
        <div> Phone: {userData.phone}</div>
        <div>Country {userData.location.country} City: {userData.location.city}</div>
      </div>
    </div>
  );
// ---------------------------------------

  return (
    <div>
      <ProfilePic src="https://static3.depositphotos.com/1000454/256/i/600/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg" />
      <ProfileStatus quote={props.changedText.quote}/>
      {currenUserData}
      <NewPost
        changedText={props.changedText}
        wallPostSend={props.wallPostSend}
        wallPostEdit={props.wallPostEdit}
      />
      {formWall}
    </div>
  );
}
// ========================================
function ProfilePic(props) {
  return (
    <div>
      <img src={props.src} />
    </div>
  );
}

function NewPost(props) {
  const areaNewPost = React.createRef(); // указатель, не значение
  // let butValue = areaNewPost.current.value

  return (
    <div className={newPost.newpost}>
      <h2> My posts</h2>
      <textarea
        ref={areaNewPost}
        onChange={() => props.wallPostEdit(areaNewPost.current.value)}
        value={props.changedText.wallText}
      />
      <div />
      <button onClick={() => props.wallPostSend()}> Send</button>
    </div>
  );
}

// ========================================

export default Profile;

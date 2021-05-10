import userStyle from "./user.module.css";
import newPost from "./newpost.module.css";
import PostHistory from "./history/massageWall";
import React from "react";
import { Field, reduxForm } from "redux-form";

function Profile(props) {
  const userData = props.userData;
  const postsWall = props.postsWall;
  // ---------------------------------------
  // ========================================

  //elem - stringТ
  const doubleClickHolder = (stringName) => {
    console.log(userData.picture);

    if (!props.changedText.isEditorOneNeed) {
      props.enableEditElement(stringName);
    }
  };
  // ---------------------------------------
  const DrawEditor = () => {
    const areaNewPost = React.createRef();
    const nothing = () => {
      return <></>;
    };
    const textForm = () => {
      return (
        <div>
          {" "}
          <input
            ref={areaNewPost}
            onChange={() => props.editProfilePart(areaNewPost.current.value)}
            autoFocus={true}
            value={props.userData[props.changedText.whatEdit]}
            onBlur={() => {
              props.updateQuoteOnServer();
            }}
          />
        </div>
      );
    };
    // state whatEdit IsEditorNeed isAnotherRedacted
    //double click - isAnotherRedacted? IsEditorNeed=true, whatEdit

    //
    return (
      <>
        {props.changedText.isLoadinFinished && props.changedText.isEditorOneNeed
          ? textForm()
          : nothing()}
      </>
    );
  };
  // ========================================

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
      <img
        onDoubleClick={() => doubleClickHolder(`picture`)}
        src={userData.picture}
      />
      <div>
        <div>id: {userData.id}</div>
        <div>
          Name:
          <span onDoubleClick={() => doubleClickHolder(`title`)}>
            {` ${userData.title}`}{" "}
          </span>
          <span onDoubleClick={() => doubleClickHolder(`firstName`)}>
            {" "}
            {`${userData.firstName}`}{" "}
          </span>
          <span onDoubleClick={() => doubleClickHolder(`lastName`)}>
            {" "}
            {`${userData.lastName}`}{" "}
          </span>
        </div>
        <div onDoubleClick={() => doubleClickHolder(`email`)}>
          {" "}
          Mail: {userData.email}
        </div>
        <div onDoubleClick={() => doubleClickHolder(`registerDate`)}>
          {" "}
          Register: {userData.registerDate}
        </div>
        <div onDoubleClick={() => doubleClickHolder(`phone`)}>
          {" "}
          Phone: {userData.phone}
        </div>
        <div>
          Country:
          <span onDoubleClick={() => doubleClickHolder(`adressCountry`)}>
            {" "}
            {userData.adressCountry}{" "}
          </span>
          City:
          <span onDoubleClick={() => doubleClickHolder(`adressCity`)}>
            {" "}
            {userData.adressCity}{" "}
          </span>
        </div>
      </div>
    </div>
  );
  // ---------------------------------------
      //---------------------------------------------------------
      const SendPostForm = reduxForm({
        form: "wallPostForm",
      })(SendPost);
    //---------------------------------------------------------
  //wallPostSend
function SendPost(props) {

  return (
    <form className={newPost.newpost} onSubmit={props.handleSubmit}>
    
      <h2> My posts</h2>
      <Field className={newPost.inputt} component="textarea" name="postArea"  />
      <br />
      <button > Send</button>
    </form>
  );
}


// ========================================

  // ========================================
  return (
    <div>
      <img src="https://static3.depositphotos.com/1000454/256/i/600/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg" />

      <div>
        {" "}
        <div onDoubleClick={() => doubleClickHolder(`quote`)}>
          {userData.quote}
        </div>{" "}
      </div>
      {currenUserData}
      <DrawEditor />
      <SendPostForm onSubmit={props.wallPostSend}
      />
      {formWall}
    </div>
  );
}
// ========================================

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

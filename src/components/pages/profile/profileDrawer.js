import userStyle from "./user.module.css";
import newPost from "./newpost.module.css";
import PostHistory from "./history/massageWall";
import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  bigField,
  inputCondition,
} from "../../modules/inputErorPanel/input";

const maxLength50 = inputCondition.maxLength(50);
const minLength10 = inputCondition.minLength(10);

const Profile = (props) => {
  const userData = props.userData;
  const postsWall = props.postsWall;
  // ---------------------------------------
  // ========================================

  //elem - stringТ
  const doubleClickHolder = (stringName) => {
    console.log(userData.picture);

    if (!props.profileSettings.isEditorOneNeed) {
      props.enableEditElement(stringName);
    }
  };
  // --------------------изменить примитив при двойном нажатии-------------------------
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
            value={props.userData[props.profileSettings.whatEdit]}
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
        {props.profileSettings.isLoadinFinished && props.profileSettings.isEditorOneNeed
          ? textForm()
          : nothing()}
      </>
    );
  };
  // ========================================

  const formWall = postsWall.map((post, count) => (
    <PostHistory
      key={count}
      picture={post.picture}
      text={post.text}
      createdAt={post.createdAt}
      likes={post.likes}
      postId={post.id}
      userId={post.userId}
      likeChangeTC={props.likeChangeTC}
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

  function SendPost(props) {
    const { pristine, submitting } = props;
    return (
      <form className={newPost.newpost} onSubmit={props.handleSubmit}>
        <div className={userStyle.editText}>
          Двойной клик по полю для редактирования
        </div>
        <h2> My posts</h2>
        <Field
          className={newPost.inputt}
          component="textarea"
          label={`What on mind?`}
          component={bigField}
          validate={[inputCondition.required, minLength10, maxLength50]}
          name="text"
        />
        <br />
        <button type="submit" disabled={pristine || submitting}>
          {" "}
          Send
        </button>
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
      <SendPostForm onSubmit={props.wallSend} />
      {formWall}
    </div>
  );
};
// ==================Profile end======================

// ========================================

export default React.memo(Profile);

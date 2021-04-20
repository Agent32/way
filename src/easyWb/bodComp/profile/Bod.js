import userStyle from './user.module.css';
import newPost from './newpost.module.css';
import PostHistory from './history/massageWall';
import React, { useState } from 'react';


function Profile (props) {
 
  const dataMass = props.dataMass
  const postsWall = props.postsWall
  // alert (props.postsWall)

  const profileInfo = [
    'Name:',
    'Date Birth:',
    'City:',
    'Education:',
    'Web Site:'
  ]

  const formWall = postsWall.map((post, count) => (
    <PostHistory
      key={count}
      avatarImg={post.avatarImg}
      text={post.text}
      date={post.date}
      likes={post.likes}
    />
  ))

  return (
    <div>
      <ProfilePic src='https://static3.depositphotos.com/1000454/256/i/600/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg' />
      <UserData usDa={getUserData(dataMass, profileInfo)} />
      <NewPost addPostWall={props.addPostWall} 
      changedText={props.changedText} 
      changeTextSubmit={props.changeTextSubmit}/>
      {formWall}
    </div>
  )
}
// ========================================
function ProfilePic (props) {
  return (
    <div>
      <img src={props.src} />
    </div>
  )
}

function UserData (props) {
  return <div>{props.usDa}</div>
}

function getUserData (dataMass, profileInfo) {
  const fullData = []

  for (let i = 0; i < profileInfo.length; i++) {
    fullData.push(profileInfo[i] + ' ' + dataMass[i + 1] + ' ')
  }

  return (
    <div className={userStyle.userdata}>
      {' '}
      <img src={dataMass[0]} />{' '}
      <div className={userStyle.userdata.text}>
        {' '}
        {fullData.map((move) => {
          return <div>{move}</div>
        })}{' '}
      </div>
    </div>
  )
}
// ========================================
function textAreaChange (strValue, changeTextSubmit) { changeTextSubmit(strValue)}
// ========================================


function NewPost (props) {
debugger
  let areaNewPost=React.createRef() //указатель, не значение
 // let butValue = areaNewPost.current.value

  return (
    <div className={newPost.newpost}>
      <h2> My posts</h2>
      <textarea ref={areaNewPost} onChange={() => textAreaChange(areaNewPost.current.value, props.changeTextSubmit)} value={props.changedText.wallText} />
      <div />
      <button onClick={ props.addPostWall }> Send</button>
    </div>
  )
}

// ========================================

export default Profile

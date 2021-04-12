import userStyle from './user.module.css';
import newPost from './newpost.module.css';
import PostHistory from './history/massageWall';
import React, { useState } from 'react';
import { getProfile, getWall } from '../../../index.js'

//dataMass={props.dataMass} postWall={props.postsWall}
function Profile (props) {
  const dataMass = props.dataMass
  const postsWall = getWall()
  // alert (props.postsWall)

  const profileInfo = [
    'Name:',
    'Date Birth:',
    'City:',
    'Education:',
    'Web Site:'
  ]

  const [likes, setCount] = useState(0)
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
      <NewPost />
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

function NewPost (props) {
  return (
    <div className={newPost.newpost}>
      <h2> My posts</h2>
      <textarea placeholder='your news...' />
      <div />
      <button> Send</button>
    </div>
  )
}

// ========================================

export default Profile

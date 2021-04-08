import userStyle from './css/user.module.css'
import newPost from './css/newpost.module.css'
function Bod () {
  const dataMass = [
    'https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg',
    'Anon',
    '2 jan',
    'Minsk',
    'HNAGH-11',
    'https://learn.javascript'
  ]
  const profileInfo = [
    'Name:',
    'Date Birth:',
    'City:',
    'Education:',
    'Web Site:'
  ]

  return (
    <div className='mainCont'>
      <ProfilePic src='https://static3.depositphotos.com/1000454/256/i/600/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg' />
      <UserData usDa={getUserData(dataMass, profileInfo)} />
      <NewPost />
      <PostHistory />
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
      <textarea>your news...</textarea>
      <div />
      <button> Send</button>
    </div>
  )
}
// ========================================
function PostHistory (props) {
  return (
    <div className={newPost.posthist}>

    </div>
  )
}

// ========================================
export default Bod

import massWall from './massWall.module.css'

function PostHistory (props) {
    let s = 0
  return (
    <div className={massWall.history}>
      <img src={props.avatarImg} />
      <div className={massWall.history.clock}>{props.date}</div>
      <div>
        {props.text}
        <button onClick={likeWork(s)}>Like {s}</button>
      </div>
    </div>
  )
}

function likeWork (like) {
    like++
 alert (like)
}

export default PostHistory

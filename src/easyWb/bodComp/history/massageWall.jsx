import massWall from './massWall.module.css'

function PostHistory (props) {
    
  return (
    <div className={massWall.history}>
      <img src={props.avatarImg} />
      <div className={massWall.history.clock}>{props.date}</div>
      <div>
        {props.text}
        <button onClick={props.oncl}>Like {props.like}</button>
      </div>
    </div>
  )
}



export default PostHistory

import massWall from './massWall.module.css'

function PostHistory (props) {
    
  return (
    <div className={massWall.history}>
      <img src={props.avatarImg} />
      <div>
      <div>  <div className={massWall.clock}>{props.date}</div>
     
       
        <button onClick={props.oncl}>Like {props.likes}</button></div>
        <h3> {props.text}</h3>
      </div>
      
    </div>
  )
}



export default PostHistory

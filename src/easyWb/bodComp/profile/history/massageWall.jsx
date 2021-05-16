import massWall from './massWall.module.css'

function PostHistory (props) {
  
  return (
    <div className={massWall.history}>
      <img src={props.picture} />
      <div>
      <div>  <div className={massWall.clock}>{props.createdAt}</div>
     
       
        <button className= {props.likes ? massWall.buttActive : massWall.buttPass } onClick={props.oncl}
            
            onClick={(e) => {
              props.likeChangeTC(props.userId, props.postId, e, props.likes);
            }}
>Like { props.likes ? `🖒`: `` }</button></div>
        <h3> {props.text}</h3>
      </div>
      
    </div>
  )
}



export default PostHistory

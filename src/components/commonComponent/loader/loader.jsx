import loader from './loader.module.css'

function LoadingModule (props) {
    return (
  
    <span className={loader.lds_circle} ><span></span></span>
  
    )
  }

export default LoadingModule
import '../../App.css'
import AutorizationContainer from './authorization/autorizationContainer'

function Header (props) {
  return (
    
    <header className='headS'>
      <img className='mainIMG' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/DC_Comics_logo.png/600px-DC_Comics_logo.png' />
      <div className='pap'>  </div>
      <div className='login'><AutorizationContainer /> </div> 
    </header>

  )
}

export default Header

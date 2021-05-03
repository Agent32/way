import '../App.css'
import AutorizationContainer from './headerPart/authorization/autorizationContainer'

function Header (props) {
  return (
    
    <header className='headS'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/DC_Comics_logo.png/600px-DC_Comics_logo.png' />
      <div className='pap'> Bakaaaa </div>
      <AutorizationContainer />
    </header>

  )
}

export default Header

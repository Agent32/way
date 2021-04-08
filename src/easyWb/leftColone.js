import '../App.css'
import LeftColone from './css/leftColone.module.css'

function LeftColon () {
  return (
    <div className='columLeft'>
        <LeftButton scr='' name='Profile' />
        <LeftButton scr='' name='Massage' />
        <LeftButton scr='' name='News' />
        <LeftButton scr='' name='Music' />
        <LeftButton scr='' name='Settings' />
      </div>
  )
}

function LeftButton (props) {
  return (
    <div
        onMouseOver={(event) => event.target.style.color = 'gray'}
        onMouseOut={(event) => event.target.style.color = 'black'}
      ><a scr={props.scr}>{props.name} </a>
      </div>
  )
}

export default LeftColon

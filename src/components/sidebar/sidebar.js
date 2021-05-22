import '../../App.css'

import FriendColoneContainer from './friendPanel/friendsPanelContainer'
import leftColone from './leftColone.module.css'
import { NavLink } from 'react-router-dom'

function LeftColon (props) {
  // <LeftButton href='/settings' name='Settings' />
  //<LeftButton href='/music' name='Music' />

  return (
    <div className='columLeft'>
        <LeftButton href='/users' name='Users' />
      <LeftButton href='/profile' name='Profile' />
      <LeftButton href='/massage' name='Massage' />
      <LeftButton href='/news' name='News' />
      
    

      <FriendColoneContainer store={props.store} />
    </div>
  )
}

function LeftButton (props) {
  return (
    <div className={leftColone.button}>
      <NavLink to={props.href} activeClassName={leftColone.active}>
        {props.name}{' '}
      </NavLink>
    </div>
  )
}

export default LeftColon

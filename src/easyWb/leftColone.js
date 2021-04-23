import '../App.css';

import CompactFriendPanel from './leftColone/friendPanel/friendsPanel'
import leftColone from './leftColone.module.css'
import { NavLink } from 'react-router-dom';

function LeftColon (props) {
  debugger

  
  return (
    <div className='columLeft'>
      <LeftButton href='/profile' name='Profile' />
      <LeftButton href='/massage' name='Massage' />
      <LeftButton href='/news' name='News' />
      <LeftButton href='/music' name='Music' />
      <LeftButton href='/settings' name='Settings' />
      <CompactFriendPanel friendPanel={props.leftColonePart.friendPanel} />
      
    </div>
  )
}

function LeftButton (props) {
  return (
    <div className={leftColone.button}>
      <NavLink to={props.href} activeClassName={leftColone.active}>{props.name} </NavLink>
    </div>
  )
}

export default LeftColon

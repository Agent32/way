import massage from './massage.module.css'
import React, { useState } from 'react'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'

/*  <Route path='/massage/test' component={()=><DrawDialog  chat={dialog.userDialogs} /> }/>
      <Route path='/massage/test2' component={()=><DrawDialog  chat={dialog2.userDialogs} /> }/>
       <DrawAutors autor={dialog.name} href='/massage/test'/>
    <DrawAutors autor={dialog2.name} href='/massage/test2'/>

      */

function MassagePage (props) {
  const dialogsMain = [{ id: 1, name: 'Борян', path: '/massage/test', userDialogs: ['Еп, никитин баланс', 'Калаш с отдачей ХК?', 'мы абузим'] },
    { id: 2, name: 'Саня', path: '/massage/test2', userDialogs: ['Объявляю крестовый поход на Харьков', 'Ну отслужил и иди на пограмиста', 'Это и есть прогрессивный налог'] }
  ]

  const formDialog = dialogsMain.map((dialog, count) => <DrawAutors key={count} autor={dialog.name} href={dialog.path} />)
  const formMassage = dialogsMain.map((dialog, count) => <Route key={count} path={dialog.path} component={() => <DrawDialog chat={dialog.userDialogs} />} />)

  // <Route path='/massage/test' component={DrawDialog} />
  return (
    <BrowserRouter>
      <div className={massage.main}>
        <div className={massage.autor}>
          {formDialog}
        </div>
        {formMassage}
      </div>
    </BrowserRouter>
  )
}

function DrawAutors (props) {
  return (
    <div className={massage.nameAut}>
      <NavLink to={props.href} activeClassName={massage.active}>{props.autor} </NavLink>
    </div>
  )
}

function DrawDialog (props) {
  return (
    <div className={massage.dialogMassage}>{drawMassageText(props.chat)}</div>
  )
}

function drawMassageText (massage) {
  const baba = massage.map((current, count) => (<div key={count}>{current}</div>))
  return (
    <div>{baba}</div>

  )
}

export default MassagePage

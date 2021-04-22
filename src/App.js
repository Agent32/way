import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'

import Profile from './easyWb/bodComp/profile/Bod'
import Header from './easyWb/header'
import LeftColone from './easyWb/leftColone'
import MassagePage from './easyWb/bodComp/massage/massage'
import NewsPage from './easyWb/bodComp/news/news'
import MusicPage from './easyWb/bodComp/music/music'
import SettingsPage from './easyWb/bodComp/settings/settings'

function App (props) {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <LeftColone leftColonePart={props.state.leftColonePart} />

        <div className='mainCont'>
          <Route
            path='/profile' render={() => <Profile
              changedText={props.state.bodyPart.changedText}
              dataMass={props.state.bodyPart.dataMass}
              postsWall={props.state.bodyPart.postsWall}
              dispatch={props.dispatch}
                                          />}
          />
          <Route
            path='/massage' render={() => <MassagePage
              dialogsMain={props.state.massagePart.dialogsMain}
              dispatch={props.dispatch}
                                          />}
          />
          <Route path='/news' component={NewsPage} />
          <Route path='/music' component={MusicPage} />
          <Route path='/settings' component={SettingsPage} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

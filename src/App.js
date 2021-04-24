import './App.css';

import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import MassagePage from './easyWb/bodComp/massage/massage';
import MusicPage from './easyWb/bodComp/music/music';
import NewsPage from './easyWb/bodComp/news/news';
import Profile from './easyWb/bodComp/profile/Bod';
import SettingsPage from './easyWb/bodComp/settings/settings';
import Header from './easyWb/header';
import LeftColone from './easyWb/leftColone';
import MassagePageContainer from './easyWb/bodComp/massage/massageContainer';
import ProfileContainer from './easyWb/bodComp/profile/bodContainer';

/*
 <Route 
            path='/massage' render={() => <MassagePage
              massagePart={props.state.massagePart}
              dispatch={props.dispatch}
                                          />}
*/

function App (props) {
  
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <LeftColone leftColonePart={props.state.leftColonePart} />

        <div className='mainCont'>
          <Route
            path='/profile' render={() => < ProfileContainer store={props.store}  />}
          />
          <Route 
            path='/massage' render={() => <MassagePageContainer
              store= {props.store} />}
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

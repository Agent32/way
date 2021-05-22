import './App.css'

import { Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import MusicPage from './components/pages/music/music'
import NewsPage from './components/pages/news/newsContainer'
import React from 'react'
import SettingsPage from './components/pages/settings/settings'
import Header from './components/header/header'
import LeftColone from './components/sidebar/sidebar'
import MassagePageContainer from './components/pages/massage/massageContainer'
import ProfileContainer from './components/pages/profile/profileContainer'
import UserContainer from './components/pages/users/usersContainer'

// import RegiserContainer from "./components/pages/register/regContainer";
const RegiserContainer = React.lazy(() => import('./components/pages/register/regContainer'))
/*
 <Route
            path='/massage' render={() => <MassagePage
              massagePart={props.state.massagePart}
              dispatch={props.dispatch}
               <Route path="/register" component={regiserContainer}
            <Route path="/register" render={() => <React.Suspense fallback={`Loadingu`}> <RegiserContainer/> </React.Suspense> } />
            https://agent32.github.io/way/                         />}
*/
// is init done?
function App ({ store, ...props }) {
  return (
    <div className='App'>
      <Header />

      <LeftColone store={store} />

      <div className='mainCont'>
        <Switch>
        <Redirect exact from="/" to="/users" />
        
        <Route
          path='/profile/:userId?'
          render={() => <ProfileContainer store={store} />}
        />

        <Route
          path='/massage'
          render={() => <MassagePageContainer store={store} />}
        />
        <Route path='/news' component={NewsPage} />

        <Route path='/music' component={MusicPage} />

        <Route path='/users' render={() => <UserContainer store={store} />} />

        <Route path='/settings' component={SettingsPage} />

        <Route path='/register' render={() => (<React.Suspense fallback='Loadingu'> <RegiserContainer /> </React.Suspense>)} />

        <Route path='*'  render={() => <div>404</div>} />
        </Switch>
      </div>
    </div>
  )
}
 
export default App

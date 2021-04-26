import "./App.css";

import { Route } from "react-router-dom";

import MusicPage from "./easyWb/bodComp/music/music";
import NewsPage from "./easyWb/bodComp/news/news";

import SettingsPage from "./easyWb/bodComp/settings/settings";
import Header from "./easyWb/header";
import LeftColone from "./easyWb/leftColone";
import MassagePageContainer from "./easyWb/bodComp/massage/massageContainer";
import ProfileContainer from "./easyWb/bodComp/profile/bodContainer";
import UsersPage from "./easyWb/bodComp/users/usersSearch";

/*
 <Route 
            path='/massage' render={() => <MassagePage
              massagePart={props.state.massagePart}
              dispatch={props.dispatch}
                                          />}
*/

function App(props) {
  return (
    <div className="App">
      <Header />
      <LeftColone leftColonePart={props.state.leftColonePart} />

      <div className="mainCont">
        <Route
          path="/profile"
          render={() => <ProfileContainer store={props.store} />}
        />
        <Route
          path="/massage"
          render={() => <MassagePageContainer store={props.store} />}
        />
        <Route path="/news" component={NewsPage} />
        <Route path="/music" component={MusicPage} />

        <Route path="/users" render={() => <UsersPage usersPart={props.state.usersPart} /> } />

        <Route path="/settings" component={SettingsPage} />
       
      </div>
    </div>
  );
}

export default App;

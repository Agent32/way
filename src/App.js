import "./App.css";

import { Route } from "react-router-dom";

import MusicPage from "./easyWb/bodComp/music/music";
import NewsPage from "./easyWb/bodComp/news/news";

import SettingsPage from "./easyWb/bodComp/settings/settings";
import Header from "./easyWb/headerPart/header";
import LeftColone from "./easyWb/leftColone/leftColone";
import MassagePageContainer from "./easyWb/bodComp/massage/massageContainer";
import ProfileContainer from "./easyWb/bodComp/profile/profileContainer";
import UserContainer from "./easyWb/bodComp/users/usersContainer";
import RegDrawer from "./easyWb/bodComp/register/regDrawer";
import regiserContainer from "./easyWb/bodComp/register/regContainer";

/*
 <Route 
            path='/massage' render={() => <MassagePage
              massagePart={props.state.massagePart}
              dispatch={props.dispatch}
                                          />}
*/
//is init done?
function App({ store, ...props }) {
  return (
    <div className="App">
      <Header />

      <LeftColone store={store} />

      <div className="mainCont">
        <Route
          path="/profile/:userId?"
          render={() => <ProfileContainer store={store} />}
        />

        <Route
          path="/massage"
          render={() => <MassagePageContainer store={store} />}
        />
        <Route path="/news" component={NewsPage} />

        <Route path="/music" component={MusicPage} />

        <Route path="/users" render={() => <UserContainer store={store} />} />

        <Route path="/settings" component={SettingsPage} />

        <Route path="/register" component={regiserContainer} />
      </div>
    </div>
  );
}

export default App;

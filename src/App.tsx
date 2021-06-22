import "./App.css";

import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import MusicPage from "./components/pages/music/music";
import NewsPage from "./components/pages/news/newsContainer";
import React from "react";
import SettingsPage from "./components/pages/settings/settings";
import Header from "./components/header/header";
import LeftColone from "./components/sidebar/sidebar";
import MassagePageContainer from "./components/pages/message/messageContainer";
import ProfileContainer from "./components/pages/profile/profileContainer";
import UserContainer from "./components/pages/users/usersContainer";

// import RegiserContainer from "./components/pages/register/regContainer";
const RegiserContainer = React.lazy(() =>
  import("./components/pages/register/regContainer")
);
function App() {
  return (
    <div className="App">
      <Header />

      <LeftColone />

      <div className="mainCont">
        <Switch>
          <Redirect exact from="/" to="/users" />

          <Route
            path="/profile/:userId?"
            render={() => <ProfileContainer />}
          />

          <Route
            path="/message/:userPMId?"
            render={() => <MassagePageContainer />}
          />
          <Route path="/news" component={NewsPage} />

          <Route path="/music" component={MusicPage} />

          <Route path="/users" render={() => <UserContainer />} />

          <Route path="/settings" component={SettingsPage} />

          <Route
            path="/register"
            render={() => (
              <React.Suspense fallback="Loadingu">
                {" "}
                <RegiserContainer />{" "}
              </React.Suspense>
            )}
          />

          <Route path="*" render={() => <div>404</div>} />
        </Switch>
      </div>
    </div>
  );
}

export default App;

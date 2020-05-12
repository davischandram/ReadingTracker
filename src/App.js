import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import Home from "./containers/Home";
import BooksComponent from "./components/BookTracking/BooksComponent";
import AuthorsComponent from "./components/BookTracking/AuthorsComponent";
import PublishersComponent from "./components/BookTracking/PublishersComponent";
import TrackingComponent from "./components/BookTracking/TrackingComponent";
import SearchComponent from "./components/Search/SearchComponent";
import SearchDetailsComponent from "./components/Search/SearchDetailsComponent";
import ProfileComponent from "./components/ProfileComponent";
import SeriesComponent from "./components/SeriesComponent";
import StatsComponent from "./components/StatsComponent";
import NavBarComponent from "./components/NavBarComponent";
import BooksHauledComponent from "./components/BooksHauledComponent";
import ArcComponent from "./components/ArcComponent";

const state = {};
const reducers = combineReducers({
  reducer: state
});

const store = createStore(reducers);

function App() {
  return (
      <Provider store={store}>
        <Router>
          <div>
            <NavBarComponent/>

            <Switch>
              <Route exact path={"/booksRead"}>
                <BooksComponent/>
              </Route>
              <Route exact path={"/booksByAuthor"}>
                <AuthorsComponent/>
              </Route>
              <Route exact path={"/booksByPublisher"}>
                <PublishersComponent/>
              </Route>
              <Route exact path={"/trackingInfo"}>
                <TrackingComponent/>
              </Route>
              <Route exact path={"/series"}>
                <SeriesComponent/>
              </Route>
              <Route exact path={"/stats"}>
                <StatsComponent/>
              </Route>
              <Route exact path={"/hauled"}>
                  <BooksHauledComponent/>
              </Route>
              <Route exact path={"/arc"}>
                  <ArcComponent/>
              </Route>
              <Route
                  exact path={["/search",
                                "/search/:criteria"]}
                  render={(props) =>
                      <SearchComponent
                          {...props}
                      />
                  }/>
              <Route
                  exact path={"/search/:criteria/details/:resultId"}
                  render={(props) =>
                      <SearchDetailsComponent
                          {...props}
                          criteria={props.match.params.criteria}
                          resultId={props.match.params.resultId}
                      />
                  }/>
              <Route
                  exact path={"/profiles/:profileId"}
                  render={(props) =>
                      <ProfileComponent
                          {...props}
                          profileId={props.match.params.profileId}
                      />
                  }/>
              <Route path={"/"}>
                <Home/>
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>
  );
}

export default App;

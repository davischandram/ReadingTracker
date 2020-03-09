import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import Home from "./Home";
import BooksComponent from "./components/BookTracking/BooksComponent";
import AuthorsComponent from "./components/BookTracking/AuthorsComponent";
import PublishersComponent from "./components/BookTracking/PublishersComponent";
import TrackingComponent from "./components/BookTracking/TrackingComponent";
import SearchComponent from "./components/Search/SearchComponent";
import SearchDetailsComponent from "./components/Search/SearchDetailsComponent";
import ProfileComponent from "./components/ProfileComponent";
import SeriesComponent from "./components/SeriesComponent";
import StatsComponent from "./components/StatsComponent";

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
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <a className="navbar-brand" href="/">Reading Tracker</a>

              <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/booksRead" id="navbarDropdown" role="button"
                       data-toggle="dropdown" aria-haspopup="true" >
                      Books
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="/booksRead">Books Read</a>
                      <a className="dropdown-item" href="/booksByAuthors">Books by Authors</a>
                      <a className="dropdown-item" href="/booksByPublishers">Books by Publishers</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="/trackingInfo">Tracking Info</a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/series">Series</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/stats">Stats</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Books Hauled</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#">ARC Tracker</a>
                  </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search for Books"
                         aria-label="Search"/>
                  <Link to={"/search"}>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </Link>
                </form>
              </div>
            </nav>

            <Switch>
              <Route exact path={"/booksRead"}>
                <BooksComponent/>
              </Route>
              <Route exact path={"/booksByAuthors"}>
                <AuthorsComponent/>
              </Route>
              <Route exact path={"/booksByPublishers"}>
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

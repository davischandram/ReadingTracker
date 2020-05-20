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
import SeriesListComponent from "./components/Series/SeriesListComponent";
import StatsComponent from "./components/StatsComponent";
import NavBarComponent from "./components/NavBarComponent";
import BooksHauledListComponent from "./components/BooksHauled/BooksHauledListComponent";
import ArcComponent from "./components/ArcComponent";
import booksHauledReducer from "./reducers/booksHauledReducer";

const state = {};
const reducers = combineReducers({
    reducer: state,
    booksHauled: booksHauledReducer
});

const store = createStore(reducers);

function App() {
  return (
      <Provider store={store}>
        <Router>
          <div>
            <NavBarComponent/>

            <Switch>
              <Route
                  exact path={"/booksRead"}
                  render={(props) =>
                <BooksComponent
                    {...props}
                />
                  }/>
              <Route
                  exact path={"/booksByAuthor"}
                  render={(props) =>
                      <AuthorsComponent
                          {...props}
                      />
                  }/>
              <Route exact path={"/booksByPublisher"}
                     render={(props) =>
                <PublishersComponent
                    {...props}
                />
                  }/>
              <Route exact path={"/trackingInfo"}
                     render={(props) =>
                <TrackingComponent
                    {...props}
                />
                  }/>
              <Route exact path={"/series"}
                     render={(props) =>
                <SeriesListComponent
                    {...props}
                />
                  }/>
              <Route exact path={"/stats"}
                     render={(props) =>
                <StatsComponent
                    {...props}
                />
                  }/>
              <Route exact path={"/hauled"}
                     render={(props) =>
                  <BooksHauledListComponent
                      {...props}
                  />
                  }/>
              <Route exact path={"/arc"}
                     render={(props) =>
                  <ArcComponent
                      {...props}
                  />
                  }/>
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

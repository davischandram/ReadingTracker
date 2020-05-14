import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class NavBarComponent extends React.Component {
    state = {
        activeBooks: false,
        activeSeries: false,
        activeStats: false,
        activeHauled: false,
        activeArc: false
    };

    activate = (change) => {
        console.log(change);
        this.setState({
            activeBooks: change==="books" ? true:false,
            activeSeries: change==="series" ? true:false,
            activeStats: change==="stats" ? true:false,
            activeHauled: change==="hauled" ? true:false,
            activeArc: change==="arc" ? true:false
        })
    };

    // need to find a way to update based on the path instead of selection

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Reading Tracker</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <a className={`nav-link dropdown-toggle ${this.state.activeBooks ? 'active':''}`}
                               href="/booksRead"
                               onClick={() => this.activate("books")}
                               id="navbarDropdown"
                               role="button"
                               data-toggle="dropdown"
                               aria-haspopup="true" >
                                Books
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/booksRead">Books Read</a>
                                <a className="dropdown-item" href="/booksByAuthor">Books by Authors</a>
                                <a className="dropdown-item" href="/booksByPublisher">Books by Publishers</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/trackingInfo">Tracking Info</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${this.state.activeSeries ? 'active':''}`}
                               href="/series"
                               onClick={() => this.activate("series")}>Series</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${this.state.activeStats ? 'active':''}`}
                               href="/stats"
                               onClick={() => this.activate("stats")}>Stats</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${this.state.activeHauled ? 'active':''}`}
                               href="/hauled"
                               onClick={() => this.activate("hauled")}>Books Hauled</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link disabled ${this.state.activeArc ? 'active':''}`}
                               href="/arc"
                               onClick={() => this.activate("arc")}>ARC Tracker</a>
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
        )
    }
}

const stateToPropertyMapper = (state) => ({});
const dispatchToPropertyMapper = (dispatch) => ({});
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(NavBarComponent)
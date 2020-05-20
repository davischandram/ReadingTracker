import React from "react";
import SeriesComponent from "./SeriesComponent";
import {connect} from "react-redux";

class SeriesListComponent extends React.Component {

    render() {
        return (
            <div className={"container-fluid"}>
                <br/>
                <ul>
                    <li className={"list-group-item"} id={"seriesHeader"}>
                        <div className={"row flex-nowrap"} >
                            <div className={"col cmd-si-title"}>
                                <h3>Series Title</h3>
                            </div>
                            <div className={"col cmd-si-author"}>
                                <h3>Series Author</h3>
                            </div>
                            <div className={"col cmd-si-status"}>
                                <h3>Series Status</h3>
                            </div>
                            <div className={"col cmd-si-myStatus"}>
                                <h3>My Status</h3>
                            </div>
                            <div className={"col cmd-si-next"}>
                                <h3>Next Book</h3>
                            </div>
                        </div>
                    </li>
                    <div id={"seriesList"}>
                        {this.props.series && this.props.series.map(book =>
                            <div key={book.id}>
                                <SeriesComponent
                                    item={book}
                                />
                            </div>
                        )}
                    </div>
                </ul>
                Length: {this.props.series.length}
                <br/>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    series: state.series.series
});
const dispatchToPropertyMapper = (dispatch) => ({
});
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(SeriesListComponent)
import React from "react";

const SeriesListComponent = () =>
    <div className={"container-fluid"}>
        <div className={"row"} id={"seriesHeader"}>
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
    </div>;

export default SeriesListComponent
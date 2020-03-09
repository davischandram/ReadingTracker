import React from "react";

const BooksComponent = () =>
    <div className={"container-fluid"}>
        <div className={"row"} id={"readBooksHeader"}>
            <div className={"col cmd-rb-series"}>
                <h3>Series?</h3>
            </div>
            <div className={"col cmd-rb-title"}>
                <h3>Title</h3>
            </div>
            <div className={"col cmd-rb-author"}>
                <h3>Author</h3>
            </div>
            <div className={"col cmd-rb-currentPages"}>
                <h3>Current Page</h3>
            </div>
            <div className={"col cmd-rb-format"}>
                <h3>Format</h3>
            </div>
            <div className={"col cmd-rb-source"}>
                <h3>Source</h3>
            </div>
            <div className={"col cmd-rb-started"}>
                <h3>Date Started</h3>
            </div>
            <div className={"col cmd-rb-completed"}>
                <h3>Date Completed</h3>
            </div>
            <div className={"col cmd-rb-reviewed"}>
                <h3>Reviewed</h3>
            </div>
            <div className={"col cmd-rb-crossPosted"}>
                <h3>Cross-Posted</h3>
            </div>
        </div>
    </div>;

export default BooksComponent
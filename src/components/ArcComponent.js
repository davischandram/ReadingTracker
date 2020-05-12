import React from "react";

const ArcComponent = () =>
    <div className={"container-fluid"}>
        <div className={"row"} id={"hauledHeader"}>
            <div className={"col cmd-bh-title"}>
                <h3>Title</h3>
            </div>
            <div className={"col cmd-bh-author"}>
                <h3>Author</h3>
            </div>
            <div className={"col cmd-bh-genre"}>
                <h3>Genre</h3>
            </div>
            <div className={"col cmd-bh-release"}>
                <h3>Release Date</h3>
            </div>
            <div className={"col cmd-bh-publisher"}>
                <h3>Publisher</h3>
            </div>
            <div className={"col cmd-bh-source"}>
                <h3>Source</h3>
            </div>
            <div className={"col cmd-bh-read"}>
                <h3>Read</h3>
            </div>
            <div className={"col cmd-bh-reviewed"}>
                <h3>Reviewed</h3>
            </div>
        </div>
    </div>;

export default ArcComponent
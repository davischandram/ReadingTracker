import React from "react";

const PublishersComponent = () =>
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
            <div className={"col cmd-rb-publisher"}>
                <h3>Publisher</h3>
            </div>
            <div className={"col cmd-rb-datePublished"}>
                <h3>Publication Date</h3>
            </div>
            <div className={"col cmd-rb-imprint"}>
                <h3>Imprint</h3>
            </div>
            <div className={"col cmd-rb-pages"}>
                <h3>Pages</h3>
            </div>
            <div className={"col cmd-rb-ageRange"}>
                <h3>Age Range</h3>
            </div>
            <div className={"col cmd-rb-primaryGenre"}>
                <h3>Primary Genre</h3>
            </div>
            <div className={"col cmd-rb-secondaryGenre"}>
                <h3>Secondary Genre</h3>
            </div>
            <div className={"col cmd-rb-format"}>
                <h3>Format</h3>
            </div>
            <div className={"col cmd-rb-rating"}>
                <h3>Rating</h3>
            </div>
            <div className={"col cmd-rb-topics"}>
                <h3>Topics</h3>
            </div>
        </div>
    </div>;

export default PublishersComponent
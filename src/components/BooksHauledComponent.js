import React from "react";

const BooksHauledComponent = () =>
    <div className={"container-fluid"}>
        <div className={"row"} id={"hauledHeader"}>
            <div className={"col cmd-bh-title"}>
                <h3>Title</h3>
            </div>
            <div className={"col cmd-bh-author"}>
                <h3>Author</h3>
            </div>
            <div className={"col cmd-bh-release"}>
                <h3>Release Year</h3>
            </div>
            <div className={"col cmd-bh-format"}>
                <h3>Format</h3>
            </div>
            <div className={"col cmd-bh-source"}>
                <h3>Source</h3>
            </div>
            <div className={"col cmd-bh-price"}>
                <h3>Price</h3>
            </div>
            <div className={"col cmd-bh-date"}>
                <h3>Date Received</h3>
            </div>
            <div className={"col cmd-bh-read"}>
                <h3>Read</h3>
            </div>
        </div>
    </div>;

export default BooksHauledComponent
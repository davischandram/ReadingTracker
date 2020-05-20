import React from "react";
import './BooksHauled.css';

const BooksHauledListComponent = () =>
    <div className={"container-fluid"}>
        <div className={"row flex-nowrap"}>
            <div className={"col cmd-bh-title"}>
               Title
            </div>
            <div className={"col cmd-bh-author"}>
                Author
            </div>
            <div className={"col cmd-bh-release"}>
                Release Year
            </div>
            <div className={"col cmd-bh-format"}>
                Format
            </div>
            <div className={"col cmd-bh-source"}>
                Source
            </div>
            <div className={"col cmd-bh-price"}>
                Price
            </div>
            <div className={"col cmd-bh-date"}>
                Date Received
            </div>
            <div className={"col cmd-bh-read"}>
                Read
            </div>
        </div>
    </div>;

export default BooksHauledListComponent
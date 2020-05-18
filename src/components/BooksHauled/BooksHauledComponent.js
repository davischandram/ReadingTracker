import React from "react";
import './BooksHauled.css';
import BooksHauledListComponent from "./BooksHauledListComponent";

const BooksHauledComponent = () =>
    <div className={"container-fluid BooksHauled"}>
        <br/>
        <ul>
            <li className={"list-group-item"} id={"hauledStats"}>
                <div className={"row flex-nowrap"} >
                    <div className={"col cmd-bh-totalHauled"}>
                        <h3>Total Hauled:</h3>
                    </div>
                    <div className={"col cmd-bh-hauled"}>
                        <h3>0</h3>
                    </div>
                    <div className={"col cmd-bh-totalSpent"}>
                        <h3>Total Spent:</h3>
                    </div>
                    <div className={"col cmd-bh-spent"}>
                        <h3>0</h3>
                    </div>
                    <div className={"col cmd-bh-totalRead"}>
                        <h3>Total Read:</h3>
                    </div>
                    <div className={"col cmd-bh-read"}>
                        <h3>0</h3>
                    </div>
                </div>
            </li>
        </ul>
        <br/>
        <ul>
            <li className={"list-group-item"} id={"hauledHeader"}>
                <div className={"row flex-nowrap"} >
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
            </li>
            <li className={"list-group-item"} id={"hauledList"}>
                <BooksHauledListComponent/>
            </li>
        </ul>
        <br/>
    </div>;

export default BooksHauledComponent
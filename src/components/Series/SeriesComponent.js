import React from "react";
import './Series.css';

const SeriesComponent = (item) =>
    <div>
        <li className={"list-group-item"} id={"seriesList"}>
            <div className={"row flex-nowrap"}>
                <div className={"col cmd-si-title"}>
                    {item.item.title}
                </div>
                <div className={"col cmd-si-author"}>
                    {item.item.author}
                </div>
                <div className={"col cmd-si-status"}>
                    {item.item.seriesStatus}
                </div>
                <div className={"col cmd-si-myStatus"}>
                    {item.item.myStatus}
                </div>
                <div className={"col cmd-si-next"}>
                    {item.item.next}
                </div>
            </div>
        </li>
    </div>;

export default SeriesComponent
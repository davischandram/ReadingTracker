import React from "react";
import './BooksHauled.css';
import BooksHauledComponent from "./BooksHauledComponent";
import {connect} from "react-redux";

class BooksHauledListComponent extends React.Component {
    state = {
        booksHauled: [
            {id: 1, title: "The Hate U Give", author: "Angie Thomas", gender: "Female", country: "United States", series: "", genre: "Contemporary", format: "Hardcover", pubYear: 2017}
            {id: 2, title: "A Darker Shade of Magic", author: "Victora Schwab", gender: "Female", country: "United States", series: "A Darker Shade of Magic", genre: "Fantasy", format: "Paperback", pubYear: 2015}
            {id: 3, title: "A Long Way to a Small, Angry Planet", author: "Becky Chambers", gender: "Female", country: "United States", series: "Wayfarers", genre: "Science Fiction", format: "Paperback", pubYear: 2014}
            {id: 4, title: "Warm Bodies", author: "Isaac Marion", genre: "Male", country" United States", series: "", genre: "Science Fiction", format: "eBook", pubYear: 1999}
            {id: 5, title: "Wicked: The Life and Times of the Wicked Witch of the West", author: "Gregory Maguire",  gender: "Male", country:"United States", series: "", genre: "Fantasy", format: "Paperback", pubYear: 1995}
            {id: 6, title: "Sister Outsider: Essays and Speeches", author: "Audre Lorde", gender: "Female", country: "United States", series: "", format: "Paperback", pubYear: 1984}
            {id: 7, title: "Bad Feminist", author: "Roxane Gay", gender: "Female", country: "United States", series:"", genre: "Essays", format: "Paperback", pubYear: 2014}
            {id: 8, title: "The Handmaid's Tale", author: "Margaret Atwood", gender: "Female", country: "Canada", series:"", genre: "Science Fiction", format: "Paperback", pubYear: 1984"}
            {id: 9, title: "Shadow and Bone", author: "Leigh Bardugo", gender: "Female", country: "United States", series: "Grisha Trilogy", genre: "Science Fiction", format: "Paperback", pubYear: 2012}
            {id: 10, title: "Siege and Storm", author: "Leigh Bardugo", gender: "Female", country: "United States", series: "Grisha Trilogy", genre: "Science Fiction", format: "Paperback", pubYear: 2013}
            {id: 11, title: "Ruin and Rising", author: "Leigh Bardugo", gender: "Female", country: "United States", series: "Grisha Trilogy", genre: "Science Fiction", format: "Paperback", pubYear: 2014}
            {id: 12, title: "Language of Thorns: Midnight Tales and Dangerous Magic", author: "Leigh Bardugo", gender: "Female", country: "United States", series: "Grisha Trilogy", genre: "Science Fiction", format: "Paperback", pubYear: 2017}
            {id: 13, title: "Dread Nation", author: "Justina Ireland", gender: "Female", country: "United States", series: "Dread Nation", genre: "Science Fiction", format: "ebook", pubYear: 2014}
            {id: 14, title: "The Red Order", author: "Cerece Rennie Murphy", gender: "Female", country: "United States", series: "Order of the Seers", genre: "Science Fiction", format: "ebook", pubYear: 2013}
        ]
    };

    render() {
        return (
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
                Count of books hauled: {this.state.booksHauled.length}
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
                        <BooksHauledComponent/>
                    </li>
                </ul>
                <br/>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    booksHauled: state.booksHauled
});
const dispatchToPropertyMapper = (dispatch) => ({
});
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(BooksHauledListComponent)

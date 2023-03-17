import React, {Component} from "react";
import BookListItem from "../book-list-item";
import {connect} from "react-redux";
import withBookStoreService from "../hoc";
import {booksLoaded, booksRequested, booksError} from "../../actions";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";


const BookList = ({books}) => {
    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    return (<li id={book.id}><BookListItem book={book}/></li>)
                })
            }
        </ul>
    )
}

class BookListContainer extends Component {
    componentDidMount() {
        const {bookstoreService, booksLoaded, booksRequested, booksError} = this.props;
        booksRequested();
        bookstoreService.getBooks()
            .then((data) => booksLoaded(data))
            .catch((err) => booksError(err));
    }

    render() {
        const {books, loading, error} = this.props;
        if (loading) {
            return <Spinner/>
        }
        if (error) {
            return <ErrorIndicator/>
        }
        return <BookList books={books}/>
    }
}

const mapStateToProps = ({books, loading, error}) => {
    return {
        books,
        loading,
        error
    };
};

const mapDispatchToProps = {
    booksLoaded,
    booksRequested,
    booksError
};
export default withBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));
import React, { Fragment } from 'react';
import { connect, useDispatch } from 'react-redux';
import { bookAdded, bookUpdated, booksLoading, booksReceived } from "@/redux/bookSlice";

type Props = { book: { ids: any, entries: [] } }

function Book(props: Props) {
    const dispatch = useDispatch();
    const addBook = () => {
        dispatch(bookAdded({bookId: 'bookId', title: 'bookTitle'}))
    }
    return (
        <Fragment>
            {props.book.ids}
            <button onClick={addBook}>book</button>
        </Fragment>
    );
}

function mapStateToProps(state: any) {
    return {book: state.books};
}

const mapDispatchToProps = {bookAdded, bookUpdated, booksLoading, booksReceived}

export default connect(mapStateToProps, mapDispatchToProps)(Book);
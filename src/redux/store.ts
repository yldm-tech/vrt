import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/redux/counterSlice";
import personReducer from "@/redux/personSlice";
import bookReducer, { booksAdapter } from '@/redux/bookSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        person: personReducer,
        books: bookReducer,
    }
});


type RootState = ReturnType<typeof store.getState>
const booksSelectors = booksAdapter.getSelectors<RootState>(
    (state: { books: any; }) => state.books
)
const allBooks = booksSelectors.selectAll(store.getState())

console.log(allBooks)

export default store;
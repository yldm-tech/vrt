import { createEntityAdapter, createSlice, } from '@reduxjs/toolkit'

type Book = { bookId: string; title: string }

export const booksAdapter = createEntityAdapter<Book>({
    selectId: (book) => book.bookId,
    sortComparer: (a, b) => a.title.localeCompare(b.title),
})

const booksSlice = createSlice({
    name: 'books',
    initialState: booksAdapter.getInitialState({loading: 'idle'}),
    reducers: {
        bookAdded: booksAdapter.addOne,
        //修改加载庄状态
        booksLoading(state, action) {
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        },
        //book数据置换
        booksReceived(state, action) {
            if (state.loading === 'pending') {
                booksAdapter.setAll(state, action.payload)
                state.loading = 'idle'
            }
        },
        //更新其中一本书的信息
        bookUpdated: booksAdapter.updateOne

    },
})

export const {
    bookAdded,
    booksLoading,
    booksReceived,
    bookUpdated
} = booksSlice.actions
export default booksSlice.reducer
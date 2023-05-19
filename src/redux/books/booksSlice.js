import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_ENDPOINT = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/px0dcsoOe2YK23gCLe5s/books';

export const fetchBooks = createAsyncThunk('book/fetchBooks', async () => {
  const response = await axios.get(API_ENDPOINT);
  try {
    return response.data;
  } catch (error) {
    return new Error(error.message);
  }
});

export const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

// export const addBook = createAsyncThunk('book/addBook', async (book) => {
//   try {
//     const response = await axios.post(API_ENDPOINT, book);
//     return response.data;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// });

// export const removeBook = createAsyncThunk('book/removeBook', async (item_id) => {
//   try {
//     await axios.delete(`${API_ENDPOINT}/${item_id}`);
//     return item_id;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// });

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {

    addBook: (state, { payload }) => {
      state.books.push(payload);
    },

    removeBook: (state, { payload }) => {
      state.books = state.books.filter((book) => book.item_id !== payload);
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state) => {
        state.status = 'succeeded';
        state.books = [];
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
    // .addCase(addBook.pending, (state) => {
    //   state.status = 'loading';
    // })
    // .addCase(addBook.fulfilled, (state, action) => {
    //   state.status = 'succeeded';
    //   state.books.push(action.payload);
    //   console.log(state.books)
    // })
    // .addCase(addBook.rejected, (state, action) => {
    //   state.status = 'failed';
    //   state.error = action.error.message;
    // })
    // .addCase(removeBook.pending, (state) => {
    //   state.status = 'loading';
    // })
    // .addCase(removeBook.fulfilled, (state, action) => {
    //   state.status = 'succeeded';
    //   state.books = state.books.filter((book) => book.item_id !== action.payload);
    // })
    // .addCase(removeBook.rejected, (state, action) => {
    //   state.status = 'failed';
    //   state.error = action.error.message;
    // });
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;

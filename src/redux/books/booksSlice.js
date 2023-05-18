import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_ENDPOINT = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/px0dcsoOe2YK23gCLe5s/books';

export const fetchBooks = createAsyncThunk('book/fetchBooks', async () => {
  try {
    const response = await axios.get(API_ENDPOINT);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const addBook = createAsyncThunk('book/addBook', async (book) => {
  try {
    const response = await axios.post(API_ENDPOINT, book);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const removeBook = createAsyncThunk('book/removeBook', async (item_id) => {
  try {
    await axios.delete(`${API_ENDPOINT}/${item_id}`);
    return item_id;
  } catch (error) {
    throw new Error(error.message);
  }
});

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload || [];
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addBook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books.push(action.payload);
      })
      .addCase(addBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(removeBook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = state.books.filter((book) => book.item_id !== action.payload);
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default booksSlice.reducer;

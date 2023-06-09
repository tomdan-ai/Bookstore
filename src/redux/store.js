import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

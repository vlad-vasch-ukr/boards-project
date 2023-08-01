import { configureStore } from '@reduxjs/toolkit';
import boardsReducer from '../reducers/boardsReducer/boardsReducer.js';

export const store = configureStore({
  reducer: {
    boardsList: boardsReducer,
  },
});

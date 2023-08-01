import { createSlice } from '@reduxjs/toolkit';
import { data } from '../../../data.js';

const initialState = {
  boards: data,
  currentBoard: 0
}

export const boardsReducer = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    updateCards: (state, { payload }) => {
      for (const item of payload) {
        const column = state.boards[state.currentBoard].columns.find((column) => column.id === item.listId);
        column.cards = item.cardsMap;
      }
    },
    updateColumnsOrder: (state, { payload }) => {
      state.boards[state.currentBoard].columns = payload
    },
    addNewColumn: (state, { payload }) => {
      state.boards[state.currentBoard].columns.push(payload)
    },
    addNewBoard: (state, { payload }) => {
      state.boards.push(payload);
    }
  },
})

export const {
  updateCards,
  updateColumnsOrder,
  addNewColumn,
  addNewBoard
} = boardsReducer.actions

export default boardsReducer.reducer

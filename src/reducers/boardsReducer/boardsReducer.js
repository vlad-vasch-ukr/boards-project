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
      for (const item of payload.data) {
        const column = state.boards.find((board) => board.id === payload.boardId).columns.find((column) => column.id === item.listId);
        column.cards = item.cardsMap;
      }
    },
    updateColumnsOrder: (state, { payload }) => {
      state.boards.find((board) => board.id === payload.boardId).columns = payload.data;
    },
    addNewColumn: (state, { payload }) => {
      state.boards.find((board) => board.id === payload.boardId).columns.push(payload.data);
    },
    addNewCard: (state, { payload }) => {
      state.boards.find((board) => board.id === payload.boardId).columns[payload.index].cards.push(payload.data);
    },
    addNewBoard: (state, { payload }) => {
      state.boards.push(payload);
    },
    updateCardDescription: (state, { payload }) => {
      state.boards
          .find((board) => board.id === payload.boardId)
          .columns
          .find((column) => column.id === payload.columnId)
          .cards
          .find((card) => card.id === payload.cardId)
          .description = payload.data;
    }
  },
})

export const {
  updateCards,
  updateColumnsOrder,
  addNewColumn,
  addNewBoard,
  addNewCard,
  updateCardDescription
} = boardsReducer.actions

export default boardsReducer.reducer

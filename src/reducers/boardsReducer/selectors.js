export const boardsSelector = (state) => state.boardsList.boards;

export const boardSelectorById = (state, id) => state.boardsList.boards.find((board) => board.id === id);

export const columnsSelector = (state, boardId) => state.boardsList.boards.find((board) => board.id === boardId)?.columns;

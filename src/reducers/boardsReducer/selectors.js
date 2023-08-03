export const boardsSelector = (state) => state.boardsList.boards;

export const boardSelectorById = (state, id) => state.boardsList.boards.find((board) => board.id === id);

export const columnsSelector = (state, boardId) => state.boardsList.boards.find((board) => board.id === boardId)?.columns;

export const cardSelectorById = (state, boardId, columnId, cardId) => {
    return state.boardsList.boards
        .find((board) => board.id === boardId)
        ?.columns.find((column) => column.id === columnId)
        .cards.find((card) => card.id === cardId)
}

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import { Droppable, DragDropContext } from '@hello-pangea/dnd';
import Column from '../Column/Column.jsx';
import AddNewColumn from '../AddNewColumn/AddNewColumn.jsx';
import { columnsSelector } from '../../../../reducers/boardsReducer/selectors.js';
import { updateCards, updateColumnsOrder, addNewColumn } from '../../../../reducers/boardsReducer/boardsReducer.js';
import reorder, { reorderItemsMap, createNewColumnObject } from './helpers/index.js';
import './Board.scss';

function Board() {
  const { id: boardId } = useParams();
  const columns = useSelector((state) => columnsSelector(state, boardId));
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const {source, destination} = result;

    if (!result.destination) {
      return;
    }

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    if (result.type === "COLUMN") {
      const reorderedOrder = reorder(columns, source.index, destination.index);

      dispatch(updateColumnsOrder({ data: reorderedOrder, boardId }));

      return;
    }

    const data = reorderItemsMap({
      quoteMap: columns,
      source,
      destination
    });

    dispatch(updateCards({ data, boardId }));
  };
  const addNewColumnEvent = (title) => {
    const newColumn = createNewColumnObject(title);
    dispatch(addNewColumn({ data: newColumn, boardId }));
  }

  if (!columns) return null;

  return (
    <SimpleBar className="columns-list__scrollbar" autoHide={false}>
      <div className="columns-list">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable
            droppableId="board"
            type="COLUMN"
            direction="horizontal"
          >
            {(provided) => (
              <div className="flex items-start" ref={provided.innerRef} {...provided.droppableProps}>
                {columns.map(({ id, title, cards }, index) => (
                  <Column
                    key={id}
                    index={index}
                    title={title}
                    id={id}
                    items={cards}
                    boardId={boardId}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <AddNewColumn onClick={addNewColumnEvent} />
      </div>
    </SimpleBar>
  );
}

export default Board;
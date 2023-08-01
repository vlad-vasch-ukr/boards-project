import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SimpleBar from 'simplebar-react';
import { Droppable, DragDropContext } from '@hello-pangea/dnd';
import Column from '../Column/Column.jsx';
import AddNewColumn from '../AddNewColumn/AddNewColumn.jsx';
import { columnsSelector } from '../../../../reducers/boardsReducer/selectors.js';
import { updateCards, updateColumnsOrder, addNewColumn } from '../../../../reducers/boardsReducer/boardsReducer.js';
import reorder, { reorderItemsMap, createNewColumnObject } from './helpers/index.js';
import './Board.scss';

function Board() {
  const [columnTitle, setColumnTitle] = useState('');
  const columns = useSelector((state) => columnsSelector(state,'first'));
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

      dispatch(updateColumnsOrder(reorderedOrder));

      return;
    }

    const data = reorderItemsMap({
      quoteMap: columns,
      source,
      destination
    });

    dispatch(updateCards(data));
  };
  const inputColumnTitle = (e) => setColumnTitle(e.target.value);
  const addNewColumnEvent = () => {
    const newColumn = createNewColumnObject(columnTitle);
    dispatch(addNewColumn(newColumn));
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
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <AddNewColumn
          value={columnTitle}
          onChange={inputColumnTitle}
          onClick={addNewColumnEvent}
        />
      </div>
    </SimpleBar>
  );
}

export default Board;
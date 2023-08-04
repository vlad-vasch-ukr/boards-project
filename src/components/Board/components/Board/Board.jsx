import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams  } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import { Droppable, DragDropContext } from '@hello-pangea/dnd';
import Column from '../Column/Column.jsx';
import AddNewColumn from '../AddNewColumn/AddNewColumn.jsx';
import CardModal from '../CardModal/CardModal.jsx';
import { columnsSelector, cardSelectorById } from '../../../../reducers/boardsReducer/selectors.js';
import { updateCards, updateColumnsOrder, addNewColumn } from '../../../../reducers/boardsReducer/boardsReducer.js';
import reorder, { reorderItemsMap, createNewColumnObject } from './helpers/index.js';
import './Board.scss';

function Board() {
  const { id: boardId } = useParams();
  const [ searchParams, setSearchParams ] = useSearchParams();
  const columns = useSelector((state) => columnsSelector(state, boardId));
  const selectedCard = useSelector((state) => cardSelectorById(state, boardId, searchParams.get('col'), searchParams.get('row')));
  const [ isModalOpened, setModalOpened ] = useState(!!selectedCard);
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
  const clickCardHandler = (column, card) => {
    setSearchParams((prev) => ({ ...prev, col: column.id, row: card.id }));
    setModalOpened(true);
  }
  const closeModal = () => {
    searchParams.delete('row');
    searchParams.delete('col');
    setSearchParams(searchParams);
    setModalOpened(false);
  }

  if (!columns) return null;

  return (
    <>
      <SimpleBar className="columns-list__scrollbar" autoHide={false}>
        <div className="columns-list">
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable
                droppableId="board"
                type="COLUMN"
                direction="horizontal"
            >
              {(provided, { isDraggingOver }) => (

                  <div className="flex items-start" ref={provided.innerRef} {...provided.droppableProps}>
                    {columns.map(({ id, title, cards }, index) => (
                        <Column
                            key={id}
                            index={index}
                            title={title}
                            id={id}
                            items={cards}
                            boardId={boardId}
                            isDraggingOver={isDraggingOver}
                            onCardClick={clickCardHandler.bind(null, { id, title })}
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
      { isModalOpened && (
          <CardModal
              onClose={closeModal}
              card={selectedCard}
              boardId={boardId}
              columnId={searchParams.get('col')}
          />
      ) }
    </>
  );
}

export default Board;
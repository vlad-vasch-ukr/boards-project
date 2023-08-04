import PropTypes from 'prop-types';
import { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useClickAway } from '@uidotdev/usehooks';
import SimpleBar from 'simplebar-react';
import classnames from 'tailwindcss-classnames';
import { Draggable } from '@hello-pangea/dnd';
import CardsList from '../CardsList/CardsList.jsx';
import { Icon } from "../../../../UI/Icons/index.js";
import AddNewCard from '../AddNewCard/AddNewCard.jsx';
import { addNewCard } from '../../../../reducers/boardsReducer/boardsReducer.js';
import { createNewCardObject } from '../Board/helpers/index.js';
import './Column.scss';

function Column(props) {
  const {title, index, id, items, boardId, isDraggingOver, onCardClick} = props;
  const dispatch = useDispatch();
  const [isOpened, setIsOpened] = useState(false);
  const ref = useClickAway(() => setIsOpened(false));
  const simpleBarRef = useRef(null);
  const openNewCardHandler = () => {
    setIsOpened(true);

    setTimeout(() => {
      const el = simpleBarRef.current;
      el.getScrollElement().scrollTop = el.getScrollElement().scrollHeight;
    }, 50);
  };
  const closeNewCardHandler = () => setIsOpened(false);
  const clickNewCardHandler = (name) => {
    const newCard = createNewCardObject(name);
    dispatch(addNewCard({ data: newCard, index, boardId }));
  }

  useEffect(() => {
    simpleBarRef.current.recalculate();
  }, [isDraggingOver]);

  return (
    <Draggable draggableId={id} index={index} >
      {(provided, { isDragging }) => (
        <div
          className={classnames('board-column', { 'is-dragging': isDragging })}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="board-column__header">
            <input type="text" onChange={() => {}} value={title}/>
          </div>
          <div className="board-column__list">
            <SimpleBar
              className={classnames('board-column__scrollbar', { 'add-new-card': isOpened })}
              autoHide={false}
              ref={simpleBarRef}
            >
              <CardsList
                listId={id}
                listType="QUOTE"
                items={items}
                onCardClick={onCardClick}
                columnId={id}
              />
              { isOpened && (
                  <div ref={ref}>
                    <AddNewCard
                        onClose={closeNewCardHandler}
                        placeholder="Enter a title for this card"
                        onClick={clickNewCardHandler}
                    />
                  </div>
              ) }
            </SimpleBar>
          </div>
          { !isOpened && (
            <div className="board-column__actions">
              <button
                  type="button"
                  className="board-column__add"
                  onClick={openNewCardHandler}
              >
                <Icon variant="plus"/>
                <span>Add card</span>
              </button>
            </div>
          )}
        </div>
      )}
    </Draggable>
  );
}

Column.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array,
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  items: PropTypes.array,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isDragging: PropTypes.bool,
  boardId: PropTypes.string,
  onCardClick: PropTypes.func,
  isDraggingOver: PropTypes.bool
}

Column.defaultProps = {
  title: '',
  items: [],
  onCardClick: () => {},
  isDraggingOver: false
}

export default Column;
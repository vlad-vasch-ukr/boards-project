import PropTypes from 'prop-types';
import SimpleBar from 'simplebar-react';
import classnames from 'tailwindcss-classnames';
import { Draggable } from '@hello-pangea/dnd';
import CardsList from '../CardsList/CardsList.jsx';
import { Icon } from "../../../../UI/Icons/index.js";
import './Column.scss';

function Column(props) {
  const {title, index, id, items, onClick, onInput} = props;

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
            <input type="text" onInput={onInput} value={title}/>
          </div>
          <div className="board-column__list">
            <SimpleBar
              className="board-column__scrollbar"
              autoHide={false}
            >
              <CardsList
                listId={id}
                listType="QUOTE"
                items={items}
              />
            </SimpleBar>
          </div>
          <div className="board-column__actions">
            <button
              type="button"
              className="board-column__add"
              onClick={onClick}
            >
              <Icon variant="plus" />
              <span>Add card</span>
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
}

Column.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array,
  onClick: PropTypes.func,
  onInput: PropTypes.func,
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  items: PropTypes.array,
  id: PropTypes.string,
  isDragging: PropTypes.bool
}

Column.defaultProps = {
  title: '',
  items: [],
  onClick: () => {},
  onInput: () => {}
}

export default Column;
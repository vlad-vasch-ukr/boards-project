import PropTypes from 'prop-types';
import { Icon } from '../../../../UI/Icons/index.js';
import './Card.scss';

function Card(props) {
  const { item, provided } = props;
  const { name, description } = item;

  return (
    <div
      className="column-card"
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <p className="column-card__description">{name}</p>
      <div className="column-card__info">
        {
          description && (
            <span>
              <Icon variant="text" height={18} width={18} />
            </span>
          )
        }
        <span className="flex items-center">
          <Icon variant="clip" height={18} width={18} />
          <span className="ml-1">1</span>
        </span>
      </div>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.object
}

export default Card;
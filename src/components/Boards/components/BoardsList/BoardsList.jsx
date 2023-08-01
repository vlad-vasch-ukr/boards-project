import { Link } from 'react-router-dom';
import classnames from 'tailwindcss-classnames';
import { Icon } from '../../../../UI/Icons/index.js';

function BoardsList({ items }) {
  return (
    <>
      {
        items.map(function ({ id, name, cover }) {
          return (
            <Link to={'boards/' + id} className="boards__item card" key={id}>
              <div
                style={{ backgroundImage: cover.image ? cover.image : '' }}
                className={classnames(cover.variant ? cover.variant : 'custom', 'card-wrapper h-full p-3')}
              >
                <p className="boards_item-name">{name}</p>
                <span className="boards__item-icon">
                    <Icon variant="star"/>
                  </span>
              </div>
            </Link>
          );
        })
      }
    </>
  );
}

export default BoardsList;

import PropTypes from 'prop-types';
import { useState } from 'react';
import { Icon } from '../Icons/index.js';
import classnames from 'tailwindcss-classnames';
import { useClickAway } from '@uidotdev/usehooks';
import './CustomSelect.scss';

function CustomSelect({ label, items, selected, onSelect, className }) {
  const [isOpened, setOpened] = useState(false);
  const ref = useClickAway(() => setOpened(false));
  const toggleList = () => setOpened(!isOpened);
  const clickItem = (item) => {
    onSelect(item);
    toggleList();
  };

  return (
    <div className={classnames('custom-select', className, { active: isOpened })} ref={ref}>
      { label && <span className="custom-select__label">{ label }</span> }
      <div className="custom-select__container">
        <div className="custom-select__selected" onClick={toggleList}>
          <span>{ selected.name }</span>
          <span className="icon">
            <Icon variant="arrow" />
          </span>
        </div>
        {
          isOpened && (
            <ul className="custom-select__list">
              {
                items.map((item) => (
                  <li
                    className={classnames({ active: item.id === selected.id })}
                    onClick={clickItem.bind(null, item)}
                    key={item.id}
                  >
                    { item.name }
                  </li>
                ))
              }
            </ul>
          )
        }
      </div>
    </div>
  );
}

CustomSelect.propTypes = {
  label: PropTypes.string,
  items: PropTypes.array,
  selected: PropTypes.object,
  onSelect: PropTypes.func,
  className: PropTypes.string
}

CustomSelect.defaultProps = {
  selected: {},
  items: [],
  onSelect: () => {},
  className: ''
}

export default CustomSelect;

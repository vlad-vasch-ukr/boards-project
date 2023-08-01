import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useClickAway } from '@uidotdev/usehooks';
import { Icon } from '../../../../UI/Icons/index.js';
import './AddNewColumn.scss';

function AddNewColumn({ onChange, onClick, value }) {
  const [isOpen, setOpen] = useState(false);
  const inputRef = useRef(null);
  const ref = useClickAway(() => {
    setOpen(false);
  });
  const openForm = () => {
    if (!isOpen) {
      setTimeout(() => {
        if (!isOpen) inputRef.current.focus()
      }, 50)
      setOpen(true);
    }
  }
  const closeForm = () => setOpen(false);

  return (
    <div className={['add-column', isOpen ? 'active' : ''].join(' ')} onClick={openForm} ref={ref}>
      {
        !isOpen ? (
          <p className="add-column__title">
            <Icon variant="plus" />
            <span>Add new list</span>
          </p>
        ) : (
          <div className="add-column__form">
            <input
              type="text"
              value={value}
              ref={inputRef}
              onChange={onChange}
            />
            <div className="add-column__actions">
              <button type="button" onClick={onClick} className="add-column__add">Add</button>
              <button type="button" onClick={closeForm}>
                <Icon variant="close" />
              </button>
            </div>
          </div>
        )
      }
    </div>
  );
}

AddNewColumn.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  value: PropTypes.string
}

export default AddNewColumn;
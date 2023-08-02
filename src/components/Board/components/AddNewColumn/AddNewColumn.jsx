import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useClickAway } from '@uidotdev/usehooks';
import { Icon } from '../../../../UI/Icons/index.js';
import Button from '../../../../UI/Button/Button.jsx';
import './AddNewColumn.scss';

function AddNewColumn({ onClick, value }) {
  const [isOpen, setOpen] = useState(false);
  const [columnTitle, setColumnTitle] = useState('');
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
  const inputColumnTitle = (e) => setColumnTitle(e.target.value);
  const closeForm = () => setOpen(false);
  const addNewColumnHandler = () => {
    if (columnTitle) {
      onClick(columnTitle);
      setColumnTitle('');
    }
  }

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
              value={columnTitle}
              ref={inputRef}
              onChange={inputColumnTitle}
            />
            <div className="add-column__actions">
              <Button
                  onClick={addNewColumnHandler}
                  className="add-column__add"
                  disabled={!columnTitle}
              >
                Add
              </Button>
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
  onClick: PropTypes.func
}

export default AddNewColumn;
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Icon } from '../../../../UI/Icons/index.js';
import BackgroundsList from './BackgroundsList/BackgroundsList.jsx';
import CustomInput from '../../../../UI/CustomInput/CustomInput.jsx';
import { generateNewBoard } from '../../helpers/index.js';
import { addNewBoard } from '../../../../reducers/boardsReducer/boardsReducer.js';
import ColumnsPlug from '../../../../assets/img/ColumnsPlug.svg';
import './CreateBoardModal.scss';

function CreateBoardModal({ onClose }) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const inputTitle = (e) => setName(e.target.value);
  const saveNewBoard = () => {
    if (name) {
      const newBoardObj = generateNewBoard(name, {});
      dispatch(addNewBoard(newBoardObj));
    }
  }

  return (
    <div className="create-board">
      <div className="create-board__body">
        <div className="create-board__header">
          <p className="create-board__title">Create board</p>
          <button
            type="button"
            className="create-board__close"
            onClick={onClose}
          >
            <Icon variant="close" />
          </button>
        </div>
        <div className="create-board__preview">
          <img src={ColumnsPlug} alt="plug"/>
        </div>
        <div className="create-board__backgrounds">
          <BackgroundsList />
        </div>
        <CustomInput
          value={name}
          onChange={inputTitle}
          className="create-board__input"
          label="Board title"
          required
        />
        <button
          type="button"
          className="create-board__create"
          disabled={!name}
          onClick={saveNewBoard}
        >
          Create
        </button>
      </div>
    </div>
  );
}

CreateBoardModal.propTypes = {
  onClose: PropTypes.func,
}

CreateBoardModal.defaultProps = {
  onClose: () => {}
}

export default CreateBoardModal;

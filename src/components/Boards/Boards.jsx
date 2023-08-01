import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { boardsSelector } from '../../reducers/boardsReducer/selectors.js';
import BoardsList from './components/BoardsList/BoardsList.jsx';
import CustomSelect from '../../UI/CustomSelect/CustomSelect.jsx';
import CustomInput from '../../UI/CustomInput/CustomInput.jsx';
import CreateBoardModal from './components/CreateBoardModal/CreateBoardModal.jsx';
import { Icon } from '../../UI/Icons/index.js';
import { filters } from './constants/index.js';
import './Boards.scss';

function Boards() {
  const [isSelectedFilter, setSelectedFilter] = useState(filters[0]);
  const [searchValue, setSearchValue] = useState('');
  const [isModalOpened, setModalOpened] = useState(false);
  const boards = useSelector(boardsSelector);
  const filteredBoards = boards.filter(
    board => board.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  const selectFilter = (filter) => setSelectedFilter(filter);
  const searchHandler = (e) => setSearchValue(e.target.value);
  const toggleModal = () => setModalOpened(!isModalOpened);

  if (!boards) return null;

  return (
    <div className="boards">
      <h2 className="boards__title">Boards</h2>
      <div className="boards__filters">
        <CustomSelect
          label="Sort by:"
          items={filters}
          selected={isSelectedFilter}
          onSelect={selectFilter}
        />
        <CustomInput
          label="Search:"
          className="ml-10"
          value={searchValue}
          placeholder="Board search"
          onChange={searchHandler}
          icon={() => <Icon variant="search" />}
        />
      </div>
      <div className="boards__list">
        <div className="boards__create card">
          <div className="card-wrapper" onClick={toggleModal}>Add board</div>
        </div>
        <BoardsList items={filteredBoards} />
      </div>
      { isModalOpened && <CreateBoardModal onClose={toggleModal} /> }
    </div>
  );
}

Boards.propTypes = {
  items: PropTypes.array
}

export default Boards;
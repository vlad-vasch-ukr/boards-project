import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../../../UI/Icons/index.js';
import './AddNewCard.scss';

function AddNewCard({ onClose, onClick, cols, rows, placeholder }) {
    const ref = useRef(null);
    const [ cardTitle, setCardTitle ] = useState('');
    const clickAddHandler = () => {
        if (cardTitle) {
            onClick(cardTitle);
            setCardTitle('');
        }
    }
    const inputHandler = (e) => setCardTitle(e.target.value);

    useEffect(() => {
        ref.current.focus();
    }, []);

    return (
        <div className="add-card">
            <div className="add-item__field">
                <textarea
                    onChange={inputHandler}
                    cols={cols}
                    rows={rows}
                    ref={ref}
                    value={cardTitle}
                    placeholder={placeholder}
                />
            </div>
            <div className="add-item__actions">
                <button
                    type="button"
                    className="add-item__add"
                    disabled={!cardTitle}
                    onClick={clickAddHandler}
                >
                    Add card
                </button>
                <button type="button" onClick={onClose}>
                    <Icon variant="close" />
                </button>
            </div>
        </div>
    );
}

AddNewCard.propTypes = {
    onClose: PropTypes.func,
    onClick: PropTypes.func,
    cols: PropTypes.number,
    rows: PropTypes.number
}

AddNewCard.defaultProps = {
    onClose: () => {},
    onClick: () => {},
    cols: 30,
    rows: 5
}

export default AddNewCard;

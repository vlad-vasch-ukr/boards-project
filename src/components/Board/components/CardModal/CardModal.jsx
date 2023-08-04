import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useClickAway } from '@uidotdev/usehooks';
import { Icon } from '../../../../UI/Icons/index.js';
import DescriptionField from './components/DescriptionField/DescriptionField.jsx';
import { updateCardDescription } from '../../../../reducers/boardsReducer/boardsReducer.js';
import './CardModal.scss';

function CardModal({ onClose, card, boardId, columnId }) {
    const dispatch = useDispatch();
    const ref = useClickAway(() => {
        onClose();
    });
    const saveEditorChanges = (value) => {
        dispatch(updateCardDescription({
            data: value,
            boardId,
            columnId,
            cardId: card.id
        }))
    }

    return (
        <div className="card-modal">
            <div className="card-modal__body" ref={ref}>
                <div className="card-modal__header">
                    <div className="card-modal__header-wrapp">
                        <div className="card-modal__header-icon">
                            <Icon variant="title" />
                        </div>
                        <h2 className="card-modal__title">{ card.name }</h2>
                        <button type="button" className="card-modal__close" onClick={onClose}>
                            <Icon variant="close" />
                        </button>
                    </div>
                </div>
                <div className="card-modal__container">
                    <div>
                        <DescriptionField
                            description={card.description}
                            onSave={saveEditorChanges}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

CardModal.propTypes = {
    onClose: PropTypes.func,
    card: PropTypes.object,
    boardId: PropTypes.string,
    columnId: PropTypes.string
}

CardModal.defaultProps = {
    card: {}
}

export default CardModal;
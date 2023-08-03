import PropTypes from 'prop-types';
import { useClickAway } from '@uidotdev/usehooks';
import { Icon } from '../../../../UI/Icons/index.js';
import DescriptionField from './components/DescriptionField/DescriptionField.jsx';
import './CardModal.scss';

function CardModal({ onClose, card }) {
    const ref = useClickAway(() => {
        onClose();
    });

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
                        <DescriptionField />
                    </div>
                </div>
            </div>
        </div>
    );
}

CardModal.propTypes = {
    onClose: PropTypes.func,
    card: PropTypes.object
}

CardModal.defaultProps = {
    card: {}
}

export default CardModal;
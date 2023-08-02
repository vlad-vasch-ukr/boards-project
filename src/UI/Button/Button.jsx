import PropTypes from 'prop-types';
import classnames from 'tailwindcss-classnames';
import './Button.scss';

function Button({type, onClick, disabled, className, children, ...props}) {

  return (
    <button
      type={type}
      className={classnames(className, 'custom-button')}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
}

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
  disabled: false,
  className: PropTypes.string,
  children: 'button'
}

export default Button;
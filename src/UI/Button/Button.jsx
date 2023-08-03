import PropTypes from 'prop-types';
import classnames from 'tailwindcss-classnames';
import './Button.scss';

function Button({type, onClick, disabled, className, children, variant, withIcon, ...props}) {

  return (
    <button
      type={type}
      className={classnames(className, 'custom-button', { gray: variant === 'gray', 'with-icon': withIcon })}
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
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  variant: PropTypes.string,
  withIcon: PropTypes.bool
}

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
  disabled: false,
  className: '',
  children: 'button',
  variant: '',
  withIcon: false
}

export default Button;
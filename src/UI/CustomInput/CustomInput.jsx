import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'tailwindcss-classnames';
import './CustomInput.scss';

const CustomInput  = forwardRef(({ type, placeholder, onChange, error, icon, label, className, value, withError, required }, ref) => {
  return (
      <div className={classnames('custom-input', className)}>
        {
            label && (
                <span className="custom-input__label">
            { label }
                  { required && <span>*</span> }
          </span>
            )
        }
        <div className={classnames('custom-input__container', { 'with-icon': icon })}>
          <input
              className={classnames('custom-input__field', { error })}
              type={type}
              placeholder={placeholder}
              onChange={onChange}
              value={value}
              ref={ref}
          />
          {
              icon && <span className="custom-input__icon">{ icon() }</span>
          }
        </div>
        {
            withError && <p className="custom-input__error">{ error }</p>
        }
      </div>
  );
});

CustomInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  icon: PropTypes.func,
  label: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  withError: PropTypes.bool,
  required: PropTypes.bool
}

CustomInput.defaultProps = {
  type: 'text',
  placeholder: '',
  onChange: () => {},
  error: '',
  label: '',
  className: '',
  value: '',
  withError: false,
  required: false
}

export default CustomInput;
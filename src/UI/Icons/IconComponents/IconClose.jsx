import PropTypes from 'prop-types';

export const IconClose = ({
  color = '#000000',
  width = '24',
  height = '24',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d="M7 17L16.8995 7.10051" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 7.00001L16.8995 16.8995" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

IconClose.propTypes = {
  color: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

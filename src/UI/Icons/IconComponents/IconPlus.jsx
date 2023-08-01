import PropTypes from 'prop-types';

export const IconPlus = ({
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
      <path d="M4 12H20M12 4V20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

IconPlus.propTypes = {
  color: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
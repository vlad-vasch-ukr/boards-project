import PropTypes from 'prop-types';

export const IconText = ({
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
      <path d="M3 8H21M3 12H21M3 16H21M3 20H15M3 4H21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

IconText.propTypes = {
  color: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
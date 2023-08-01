import PropTypes from 'prop-types';

export const IconClip = ({
  color = '#000000',
  width = '24',
  height = '24',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 512 512'
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g>
        <g>
          <path d="M256,0c-58.182,0-104.727,46.545-104.727,104.727V384c0,6.982,4.655,11.636,11.636,11.636
            c6.982,0,11.636-4.655,11.636-11.636V104.727c0-45.382,36.073-81.455,81.455-81.455s81.455,36.073,81.455,81.455v325.818
            c0,32.582-25.6,58.182-58.182,58.182c-32.582,0-58.182-25.6-58.182-58.182V104.727c0-19.782,15.127-34.909,34.909-34.909
            c19.782,0,34.909,15.127,34.909,34.909V384c0,6.982,4.655,11.636,11.636,11.636s11.636-4.655,11.636-11.636V104.727
            c0-32.582-25.6-58.182-58.182-58.182c-32.582,0-58.182,25.6-58.182,58.182v325.818c0,45.382,36.073,81.455,81.455,81.455
            c45.382,0,81.455-36.073,81.455-81.455V104.727C360.727,46.545,314.182,0,256,0z" />
        </g>
      </g>
    </svg>
  );
};

IconClip.propTypes = {
  color: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
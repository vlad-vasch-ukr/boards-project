import PropTypes from 'prop-types';

export const IconTitle = ({
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
            <path d="M3 6H21C21.28 6 21.5 6.22 21.5 6.5V18.5C21.5 18.78 21.28 19 21 19H3C2.72 19 2.5 18.78 2.5 18.5V6.5C2.5 6.22 2.72 6 3 6Z" stroke="#0F0F0F" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.5 10H19.5" stroke="#0F0F0F" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18 8H19" stroke="#0F0F0F" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 8.5C5.27614 8.5 5.5 8.27614 5.5 8C5.5 7.72386 5.27614 7.5 5 7.5C4.72386 7.5 4.5 7.72386 4.5 8C4.5 8.27614 4.72386 8.5 5 8.5Z" fill={color}/>
            <path d="M6.5 8.5C6.77614 8.5 7 8.27614 7 8C7 7.72386 6.77614 7.5 6.5 7.5C6.22386 7.5 6 7.72386 6 8C6 8.27614 6.22386 8.5 6.5 8.5Z" fill={color}/>
            <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8C8.5 7.72386 8.27614 7.5 8 7.5C7.72386 7.5 7.5 7.72386 7.5 8C7.5 8.27614 7.72386 8.5 8 8.5Z" fill={color}/>
        </svg>
    );
};

IconTitle.propTypes = {
    color: PropTypes.string,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
import PropTypes from 'prop-types';
import { IconClose } from './IconComponents/IconClose.jsx';
import { IconPlus } from './IconComponents/IconPlus.jsx';
import { IconText } from './IconComponents/IconText.jsx';
import { IconClip } from './IconComponents/IconClip.jsx';
import { IconStar } from './IconComponents/IconStar.jsx';
import { IconArrow } from './IconComponents/IconArrow.jsx';
import { IconSearch } from './IconComponents/IconSearch.jsx';
import { IconTitle } from './IconComponents/IconTitle.jsx';

export const Icon = ({
  variant,
  color,
  height,
  width,
  ...props
}) => {
  const listIcons = {
    close: IconClose,
    plus: IconPlus,
    text: IconText,
    clip: IconClip,
    star: IconStar,
    arrow: IconArrow,
    search: IconSearch,
    title: IconTitle
  };
  const Component = listIcons[variant];
  return (
    Component && (
      <Component width={width} height={height} color={color} {...props} />
    )
  );
};

Icon.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

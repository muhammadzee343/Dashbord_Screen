import React from 'react';
import Svg, {Path} from 'react-native-svg';

function MenuIcon(props) {
  // console.log("props in user", props.SVGStrings)
  // let size = props.size ? props.size : 40;
  return (
    <Svg viewBox="0 0 384.97 384.97" height="20" width="20">
      <Path
        fill={props.iconColor}
        fillRule="evenodd"
        d="M12.03 120.303h360.909c6.641 0 12.03-5.39 12.03-12.03 0-6.641-5.39-12.03-12.03-12.03H12.03c-6.641 0-12.03 5.39-12.03 12.03s5.39 12.03 12.03 12.03zM372.939 180.455H12.03c-6.641 0-12.03 5.39-12.03 12.03s5.39 12.03 12.03 12.03h360.909c6.641 0 12.03-5.39 12.03-12.03s-5.389-12.03-12.03-12.03zM372.939 264.667H132.333c-6.641 0-12.03 5.39-12.03 12.03 0 6.641 5.39 12.03 12.03 12.03h240.606c6.641 0 12.03-5.39 12.03-12.03.001-6.641-5.389-12.03-12.03-12.03z"
      />
    </Svg>
  );
}

export default MenuIcon;

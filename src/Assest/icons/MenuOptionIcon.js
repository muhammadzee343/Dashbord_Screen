import React from 'react';
import Svg, {Path} from 'react-native-svg';

function MenuOptonIcon(props) {
  // console.log("props in user", props.SVGStrings)
  // let size = props.size ? props.size : 40;
  return (
    <Svg viewBox="0 0 512 512" height="20" width="20">
      <Path
        fill={props.iconColor}
        fillRule="evenodd"
        d="M492 236H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h472c11.046 0 20-8.954 20-20s-8.954-20-20-20zM492 76H20C8.954 76 0 84.954 0 96s8.954 20 20 20h472c11.046 0 20-8.954 20-20s-8.954-20-20-20zM492 396H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h472c11.046 0 20-8.954 20-20s-8.954-20-20-20z"
      />
    </Svg>
  );
}

export default MenuOptonIcon;

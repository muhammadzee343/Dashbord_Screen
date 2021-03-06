import React from 'react';
import Svg, {Path} from 'react-native-svg';

function ClockNeedleIcon(props) {
  // console.log("props in user", props.SVGStrings)
  // let size = props.size ? props.size : 40;
  return (
    <Svg viewBox="0 0 443.294 443.294" height="25" width="25">
      <Path
        fill={props.iconColor}
        fillRule="evenodd"
        d="M221.647 0C99.433 0 0 99.433 0 221.647s99.433 221.647 221.647 221.647 221.647-99.433 221.647-221.647S343.861 0 221.647 0zm0 415.588c-106.941 0-193.941-87-193.941-193.941s87-193.941 193.941-193.941 193.941 87 193.941 193.941-87 193.941-193.941 193.941z"
      />
      <Path
        fill={props.iconColor}
        fillRule="evenodd"
        d="M235.5 83.118h-27.706v144.265l87.176 87.176 19.589-19.589-79.059-79.059z"
      />
    </Svg>
  );
}

export default ClockNeedleIcon;

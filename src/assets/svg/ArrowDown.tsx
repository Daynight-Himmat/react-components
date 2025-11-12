import React from "react";
import Svg, { Path, Mask, Rect, G } from "react-native-svg";

const ArrowDown = ({ size = 16, color = "black" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Mask
      id="mask0_2371_2505"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <Rect width={24} height={24} rx={1} fill="#fff" />
    </Mask>
    <G mask="url(#mask0_2371_2505)">
      <Path
        d="M12.7071 14.6929C12.3166 15.0834 11.6834 15.0834 11.2929 14.6929L6.7 10.1C6.3134 9.7134 6.3134 9.0866 6.7 8.7C7.0866 8.3134 7.7134 8.3134 8.1 8.7L11.2929 11.8929C11.6834 12.2834 12.3166 12.2834 12.7071 11.8929L15.9 8.7C16.2866 8.3134 16.9134 8.3134 17.3 8.7C17.6866 9.0866 17.6866 9.7134 17.3 10.1L12.7071 14.6929Z"
        fill={color}
      />
    </G>
  </Svg>
);

export default ArrowDown;

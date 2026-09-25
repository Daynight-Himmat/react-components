import React from "react";
import Svg, { Mask, Rect, G, Path } from "react-native-svg";
import { SvgInterface } from "../../interface/svg.interface";

const ArrowUp = ({ size = 16, color = "#1C1B1F" }: SvgInterface) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Mask
      id="mask0_2375_2500"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <Rect
        x={24}
        y={24}
        width={24}
        height={24}
        rx={1}
        transform="rotate(-180 24 24)"
        fill={color}
      />
    </Mask>
    <G mask="url(#mask0_2375_2500)">
      <Path
        d="M11.2929 9.30711C11.6834 8.91658 12.3166 8.91658 12.7071 9.30711L17.3 13.9C17.6866 14.2866 17.6866 14.9134 17.3 15.3C16.9134 15.6866 16.2866 15.6866 15.9 15.3L12.7071 12.1071C12.3166 11.7166 11.6834 11.7166 11.2929 12.1071L8.1 15.3C7.7134 15.6866 7.0866 15.6866 6.7 15.3C6.3134 14.9134 6.3134 14.2866 6.7 13.9L11.2929 9.30711Z"
        fill={color}
      />
    </G>
  </Svg>
);

export default ArrowUp;

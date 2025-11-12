import Svg, { Path } from "react-native-svg";
import { SvgInterface } from "../../interface/svg.interface";

const CheckIcon = ({size, color}: SvgInterface) => (
  <Svg width={size} height={size} viewBox="0 0 17 12" fill={color}>
    <Path d="M7.27431 11.4818C6.88907 11.8992 6.23401 11.9123 5.8324 11.5106L0.292433 5.97067C-0.104655 5.57358 -0.0969935 4.92745 0.309397 4.53989L0.9927 3.88825C1.38569 3.51347 2.00596 3.52082 2.38995 3.90481L5.3544 6.86927C5.70921 7.22407 6.27201 7.261 6.67014 6.95561L15.5294 0.160008C15.8378 -0.0765669 16.2738 -0.0479552 16.5487 0.226898C16.84 0.518236 16.8523 0.986646 16.5767 1.29289L12.5684 5.7466L7.27431 11.4818Z"/>
  </Svg>
);

export default CheckIcon;
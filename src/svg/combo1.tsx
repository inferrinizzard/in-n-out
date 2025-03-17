import * as React from "react";
import Svg, { type SvgProps, Path } from "react-native-svg";
const ComboOneSvg = (props: SvgProps) => (
	<Svg
		xmlns="http://www.w3.org/2000/svg"
		// width={11}
		width="100%"
		// height={17}
		height="100%"
		viewBox="0 0 11 17"
		fill="none"
		{...props}
	>
		<Path
			fill="#fff"
			d="M4.401.17H7.58v13.145h2.893V17H.144v-3.685h2.948V1.941L4.401.17ZM.221 1.677h1.133a2.83 2.83 0 0 0 1.034-.176c.3-.125.55-.3.748-.528A1.96 1.96 0 0 0 3.554.17h1.089L3.565 3.69h-.616c-.183.777-.444 1.32-.781 1.628-.337.3-.781.451-1.331.451H.221V1.677Z"
		/>
	</Svg>
);
export default ComboOneSvg;

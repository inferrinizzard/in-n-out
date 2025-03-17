import * as React from "react";
import Svg, { type SvgProps, Path } from "react-native-svg";
const TriangleSvg = (props: SvgProps) => (
	<Svg
		xmlns="http://www.w3.org/2000/svg"
		// width={32}
		width="100%"
		// height={50}
		height="100%"
		viewBox="0 0 32 50"
		fill="none"
		{...props}
	>
		<Path
			fill="#E02A27"
			fillRule="evenodd"
			d="m12.37 0 18.875 18.876L.121 50 0 49.879V0h12.37Z"
			clipRule="evenodd"
		/>
	</Svg>
);
export default TriangleSvg;

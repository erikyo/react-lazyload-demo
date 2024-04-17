import Image from "next/image";

/**
 * The WallPaper component for the demo page
 *
 * @constructor
 */
export default function Component() {
	return (
		<Image
			src={"/images/2000×600.jpg"}
			style={{
				width: "800px",
				height: "800px",
				objectFit: "cover",
				margin: "0 0 25px",
			}}
			height={800}
			width={800}
			title="The image is loaded without lazy loading in order to avoid LCP issues"
			alt="This one is not lazy loaded"
		/>
	);
}

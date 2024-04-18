"use client";

import { LazyImg, VanillaLazyLoad } from "react-vanilla-lazyload";
import WallPaper from "../components/WallPaper.tsx";

export default function Images() {
	return (
		<>
			<WallPaper />
			{[...Array(40).keys()].map((index) => (
				<LazyImg
					key={index}
					src={`/images/220x280-${String(
						index + 1,
					).padStart(2, "0")}.webp`}
					className={`demo-item lazyItem-${index}`}
					alt="random"
					title="random"
                    width={220}
                    height={280}
					onLoad={() => {
						console.log(
							"Loaded",
							index + 1,
							["😊", "😎", "🚀", "🌟", "🎉"][Math.floor(Math.random() * 5)],
						);
					}}
				/>
			))}
			<VanillaLazyLoad />
		</>
	);
}

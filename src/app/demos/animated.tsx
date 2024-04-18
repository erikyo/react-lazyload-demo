"use client";

import "animate.css/animate.min.css";
import { LazyImg, VanillaLazyLoad } from "react-vanilla-lazyload";
import WallPaper from "@/app/components/WallPaper.tsx";

const animations = [
	"fadeIn",
	"fadeInDown",
	"fadeInDownBig",
	"fadeInLeft",
	"fadeInLeftBig",
	"fadeInRight",
	"fadeInRightBig",
	"fadeInUp",
	"fadeInUpBig",
	"fadeInTopLeft",
	"fadeInTopRight",
	"fadeInBottomLeft",
	"fadeInBottomRight",

	"rotateIn",
	"rotateInDownLeft",
	"rotateInDownRight",
	"rotateInUpLeft",
	"rotateInUpRight",

	"zoomIn",
	"zoomInDown",
	"zoomInLeft",
	"zoomInRight",
	"zoomInUp",

	"slideInDown",
	"slideInLeft",
	"slideInRight",
	"slideInUp",
];

export default function ImagesLL() {
	return (
        <>
            <WallPaper/>
            <p>Example using the onLoad event to add animations to images</p>
            {[...Array(40).keys()].map((index) => (
                <LazyImg
                    key={index}
                    src={`/images/220x280-${String(
                        index + 1,
                    ).padStart(2, "0")}.webp`}
                    className={`demo-item lazyItem-${index} hidden`}
                    alt="random"
                    title="random"
                    onLoad={(event) => {
                        (event.target as HTMLImageElement).classList.add(
                            "animate__animated",
                            `animate__${
                                animations[Math.floor(Math.random() * animations.length)]
                            }`,
                        );
                    }}
                />
            ))}
            <VanillaLazyLoad/>
        </>
    );
}

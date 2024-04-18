"use client";

import "animate.css/animate.min.css";
import { VanillaLazyLoad } from "react-vanilla-lazyload";
import WallPaper from "../components/WallPaper.tsx";
import Image from "next/image";

export default function ImagesLL() {
	return (
        <>
            <WallPaper/>
            <p>This is an example using the image native lazy loading</p>
            {[...Array(40).keys()].map((index) => (
                <Image
                    className={"demo-item"}
                    key={index}
                    alt={""}
                    loading={"lazy"}
                    width={220}
                    height={280}
                    src={`/images/220x280-${String(
                        index + 1,
                    ).padStart(2, "0")}.webp`}
                />
            ))}
            <VanillaLazyLoad/>
        </>
    );
}

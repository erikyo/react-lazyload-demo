"use client";

import {
    LazyEl,
    LazyIframe,
    LazyImg,
    LazyModule,
    LazyVideo,
    LazyWrapper, VanillaLazyLoad,
} from "react-vanilla-lazyload";
import WallPaper from "@/app/components/WallPaper";
import {Loader} from "@/app/components/Loader";

export default function Demo() {
	return (
        <>
            <WallPaper/>
            <p className={'text-3xl font-bold'}>Infinite scroll demo</p>
            <p className={'mb-[400px]'}>for example purpose we are reloading this example again</p>
            <LazyModule
                className={"demo-item"}
                component={import("@/app/demos/infiniteScroll.tsx")}
                loader={<Loader/>}
            />
            <VanillaLazyLoad />
        </>
    );
}

"use client";

import {
	LazyEl,
	LazyIframe,
	LazyImg,
	LazyModule,
	LazyVideo,
	LazyWrapper,
} from "react-vanilla-lazyload";
import WallPaper from "@/app/components/WallPaper";
import {Loader} from "@/app/components/Loader";

export default function Demo() {
	return (
        <LazyWrapper>
            <WallPaper/>
            <LazyImg
                src={
                    "/images/220x280-01.webp"
                }
                className="demo-item first"
                alt="random"
                title="random"
                width={220}
                height={280}
                onLoad={() => {
                    console.log("first lazy-image Loaded");
                }}
            />
            <LazyImg
                src={
                    "/images/220x280-02.webp"
                }
                srcSet="/images/440x560-02.webp 400w,/images/440x560-02.webp 800w"
                dataSizes="100w"
                width={220}
                height={280}
                alt="random"
                className={"demo-item"}
            />
            <LazyImg
                src={
                    "/images/220x280-03.webp"
                }
                srcSet="/images/440x560-03.webp 400w,/images/440x560-03.webp 800w"
                alt="random"
                width={220}
                height={280}
                className={"demo-item"}
            />
            <LazyImg
                src={
                    "/images/220x280-04.webp"
                }
                alt="random"
                srcSet="/images/440x560-04.webp 400w,/images/440x560-04.webp 800w"
                width={220}
                height={280}
                className={"demo-item"}
            />
            <LazyImg
                src={
                    "/images/220x280-04.webp"
                }
                alt="random"
                srcSet="/images/440x560-05.webp 400w,/images/440x560-05.webp 800w"
                width={220}
                height={280}
                className={"demo-item"}
            />
            <p className={'text-3xl font-bold'}>Video demo</p>
            <LazyVideo
                src={
                    "/videos/1920x1080-01.mp4"
                }
                className={"demo-item"}
                width={220}
                height={280}
                poster={
                    "/images/220x280-01.webp"
                }
                controls={true}
            />
            <LazyVideo
                src={
                    "/videos/1920x1080-02.mp4"
                }
                poster={
                    "/images/220x280-02.webp"
                }
                className={"demo-item"}
                muted
                playsInline
                autoPlay
                width={220}
                height={280}
                controls={false}
            />
            <p className={'text-3xl font-bold'}>Iframe demo</p>
            <LazyIframe
                title={"iframe-01"}
                className={"demo-item"}
                src={"/iframes/i01.html"}
                width={500}
                height={500}
            />
            <p className={'text-3xl font-bold'}>Module demo</p>
            <LazyModule
                className={"demo-item"}
                component={import("@/app/components/Component.tsx")}
                loader={<Loader/>}
            />
            <p className={'text-3xl font-bold'}>Element demo</p>
            <LazyEl
                className={"demo-item"}
                bg={
                    "/images/220x280-10.webp"
                }
                title={"asd"}
                style={{
                    width: 500,
                    height: 500,
                    backgroundImage:
                        "url(/images/220x280-10.webp)",
                }}
                width={220}
                height={280}
            />
            <p className={'text-3xl font-bold'}>Image Srcset demo</p>
            <LazyImg
                src={
                    "/images/220x280-11.webp"
                }
                className="demo-item first"
                alt="random"
                title="random"
                width={220}
                height={280}
                onLoad={() => {
                    console.log("first lazy-image Loaded");
                }}
            />
            <LazyImg
                src={
                    "/images/220x280-12.webp"
                }
                srcSet="/images/440x560-12.webp 400w,/images/440x560-12.webp 800w"
                dataSizes="100w"
                width={220}
                height={280}
                alt="random"
                className={"demo-item"}
            />
            <LazyImg
                src={
                    "/images/220x280-13.webp"
                }
                srcSet="/images/440x560-13.webp 400w,/images/440x560-13.webp 800w"
                alt="random"
                width={220}
                height={280}
                className={"demo-item"}
            />
            <LazyImg
                src={
                    "/images/220x280-14.webp"
                }
                alt="random"
                srcSet="/images/440x560-14.webp 400w,/images/440x560-14.webp 800w"
                width={220}
                height={280}
                className={"demo-item"}
            />
            <LazyImg
                src={
                    "/images/220x280-14.webp"
                }
                alt="random"
                srcSet="/images/440x560-15.webp 400w,/images/440x560-15.webp 800w"
                width={220}
                height={280}
                className={"demo-item"}
            />
        </LazyWrapper>
    );
}

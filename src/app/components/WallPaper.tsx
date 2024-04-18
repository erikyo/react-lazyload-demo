import Image from "next/image";

const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgba(${r}, ${g}, ${b}, 25%)`;
}

/**
 * The WallPaper component for the demo page
 *
 * @constructor
 */
export default function WallPaper() {
	return (
        <div className={'relative'}>
            <div className={'absolute top-0 left-0 w-full h-full bg-cover bg-center bg-slate-800/50'} style={{backgroundColor: randomColor()}} />
            <Image
                src={"/images/2000×600.jpg"}
                style={{
                    width: "100%",
                    height: "600px",
                    objectFit: "cover",
                    margin: "0 0 25px",
                }}
                height={600}
                width={2000}
                title="The image is loaded without lazy loading in order to avoid LCP issues"
                alt="This one is not lazy loaded"
            />
        </div>
	);
}

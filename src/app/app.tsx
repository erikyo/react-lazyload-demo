"use client";
import {Suspense, lazy, memo, useEffect, useState, useCallback} from "react";
import Header from "@/app/components/Header.tsx";
import { Loader } from "@/app/components/Loader.tsx";
import { pages } from "@/app/constants.ts";

/**
 * This component is memoized to prevent unnecessary re-renders.
 * @param {string} component - The name of the component to lazy load
 */
const MemoizedLazyDemo = memo(({ component }: { component: string }) => {
    const LazyComponent = lazy(() => import(`./demos/${component}.tsx`));
    return (
        <Suspense fallback={<Loader />}>
            <LazyComponent />
        </Suspense>
    );
});
MemoizedLazyDemo.displayName = 'MemoizedLazyDemo';

export default function App() {
    const [index, setIndex] = useState(0); // Initialize index state with 0

    const handleHashChange = useCallback((index?: number) => {
        const current =
                window.location.hash[0] === "#"
                    ? window.location.hash.substring(1)
                    : pages[0]; // Remove the '#' character
            return setIndex(index ?? pages.indexOf(current));
    }, []);

    useEffect(() => {
        handleHashChange();
    }, [handleHashChange]);

    return (
        <>
            <Header setIndex={setIndex} index={index} />

            <MemoizedLazyDemo component={pages[index]} />
        </>
    );
}

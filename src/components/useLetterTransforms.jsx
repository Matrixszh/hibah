import { useMemo } from "react";
import { useTransform } from "framer-motion";

export function useLetterTransforms(scrollYProgress, word) {
    // Generate random transforms for each letter once
    const transforms = useMemo(() => {
        return word.split("").map(() => {
            return Math.floor(Math.random() * -75) - 25;
        });
    }, [word]); // Only word changes need to trigger recomputation

    // Apply the `useTransform` hook for each letter's transform
    return transforms.map((transform) =>
        useTransform(scrollYProgress, [0, 1], [0, transform])
    );
}

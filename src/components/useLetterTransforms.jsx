import { useMemo } from "react";
import { useTransform } from "framer-motion";

export function useLetterTransforms(scrollYProgress, word) {
    const transforms = useMemo(() => {
        return word.split("").map(() => {
            return Math.floor(Math.random() * -75) - 25;
        });
    }, [scrollYProgress, word]);

    return transforms.map(transform => useTransform(scrollYProgress, [0, 1], [0, transform]));
}

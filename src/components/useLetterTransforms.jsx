import { useMemo } from "react";
import { useTransform } from "framer-motion";

export function useLetterTransforms(scrollYProgress, word) {
    return useMemo(() => {
        return word.split("").map(() =>
            useTransform(scrollYProgress, [0, 1], [0, Math.floor(Math.random() * -75) - 25])
        );
    }, [scrollYProgress, word]);
}

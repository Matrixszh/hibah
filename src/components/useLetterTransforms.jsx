import { useMemo } from "react";
import { useTransform } from "framer-motion";

export function useLetterTransforms(scrollYProgress, word) {
    // Generate random transforms for each letter once
    const transforms = useMemo(() => {
        return word.split("").map(() => Math.floor(Math.random() * -75) - 25);
    }, [word]); // Recalculate only when word changes

    // Apply useTransform for each letter's transform outside the map loop
    const letterTransforms = transforms.map((transform) =>
        useTransform(scrollYProgress, [0, 1], [0, transform])
    );

    return letterTransforms;
}

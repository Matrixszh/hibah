'use client';
import { useRef } from "react";
import styles from '../../app/page.module.scss';
import Picture2 from '../../../public/images/hibah1.jpg';
import Picture3 from '../../../public/images/hibah2.jpg';
import Picture1 from '../../../public/images/hibah3.jpg';
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLetterTransforms } from '@/components/useLetterTransforms'; // Import custom hook

const word = "the light to my darkness";

export default function Index() {
    const containers = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containers,
        offset: ['start end', 'end start']
    });

    // Precompute transform values
    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

    // Get letter transforms using custom hook
    const lettersTransforms = useLetterTransforms(scrollYProgress, word);

    const images = [
        { src: Picture1, y: 0 },
        { src: Picture2, y: lg },
        { src: Picture3, y: md },
    ];

    return (
        <div className="padding" id="names">
            <div ref={containers} className={styles.containers}>
                <div className={styles.body}>
                    <motion.h1 style={{ y: sm }}>Noor</motion.h1>
                    <h1>Meaning</h1>
                    <div className={styles.word}>
                        <p>
                            {word.split("").map((letter, i) => (
                                <motion.span
                                    style={{ top: lettersTransforms[i] }}
                                    key={`l_${i}`}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </p>
                    </div>
                </div>
                <div className={styles.images}>
                    {images.map(({ src, y }, i) => (
                        <motion.div
                            style={{ y }}
                            key={`i_${i}`}
                            className={styles.imageContainer}
                        >
                            <Image src={src} placeholder="blur" alt="image" fill />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

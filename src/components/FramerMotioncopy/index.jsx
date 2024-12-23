'use client';
import { useRef } from "react";
import styles from '../../app/page.module.scss';
import Picture2 from '../../../public/images/hibah1.jpg';
import Picture3 from '../../../public/images/hibah2.jpg';
import Picture1 from '../../../public/images/hibah3.jpg';
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';

const word = "gift from god";

export default function Index() {
    const containers = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containers,
        offset: ['start end', 'end start']
    });

    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

    // Precompute transform values for each letter
    const lettersTransforms = word.split("").map(() =>
        useTransform(scrollYProgress, [0, 1], [0, Math.floor(Math.random() * -75) - 25])
    );

    const images = [
        {
            src: Picture1,
            y: 0
        },
        {
            src: Picture2,
            y: lg
        },
        {
            src: Picture3,
            y: md
        }
    ];

    return (
        <div className="padding">
            <div ref={containers} className={styles.containers}>
                <div className={styles.bod}>
                    <motion.h1 style={{ y: sm }}>hibah</motion.h1>
                    <h1>meaning</h1>
                    <div className={styles.word}>
                        <p>
                            {
                                word.split("").map((letter, i) => (
                                    <motion.span style={{ top: lettersTransforms[i] }} key={`l_${i}`}>
                                        {letter}
                                    </motion.span>
                                ))
                            }
                        </p>
                    </div>
                </div>
                <div className={styles.images}>
                    {
                        images.map(({ src, y }, i) => (
                            <motion.div style={{ y }} key={`i_${i}`} className={styles.imageContainer}>
                                <Image
                                    src={src}
                                    placeholder="blur"
                                    alt="image"
                                    fill
                                />
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

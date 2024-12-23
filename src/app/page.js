'use client'
import styles from './page.module.scss'
import ZoomParallax from '../components/ZoomParallax/index';
import Card from '../components/Card/index';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'
import { useScroll } from 'framer-motion';
import { projects } from '../data';
import FancyTextSlide from '@/components/FancyTextSlide';
import Character from '@/components/Character';
import VideoComponent from '@/components/VideoComponent';


const paragraph = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."



export default function Home() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })


    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    const words = paragraph.split(" ")

    return (
        <main className={styles.main}>

            <div>
                <h1>My Video</h1>
                <VideoComponent
                    src="/images/hibahvid.mp4"
                    poster="/hibah1.jpg"
                    width="800px"
                    autoplay={true}
                    loop={true}
                    muted={true}
                />
            </div>
            <FancyTextSlide />


            <div style={{ height: "100vh" }}></div>
            <Character paragraph={paragraph} id="quotes" />
            <div style={{ height: "100vh" }}></div>

            <ZoomParallax />

            <section ref={container} className={styles.main}>
                {
                    projects.map((project, i) => {
                        const targetScale = 1 - ((projects.length - i) * 0.05);
                        return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
                    })
                }
            </section>

        </main>
    )
}

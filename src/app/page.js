'use client'
import styles from './page.module.scss'
import ZoomParallax from '../components/ZoomParallax/index';
import Card from '../components/Card/index';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'
import { useScroll } from 'framer-motion';
import { projects } from '../data';
import FancyTextSlide from '@/components/FancyTextSlide';
import FancyTextSlideC from '@/components/FancyTextSlideC';
import Character from '@/components/Character';
import VideoComponent from '@/components/VideoComponent';


const paragraph = " 'You had a beautiful friendship. Maybe more than a friendship. And I envy you. In my place, most parents would hope the whole thing goes away, or pray that their sons land on their feet soon enough. But I am not such a parent. In your place, if there is pain, nurse it, and if there is a flame, don't snuff it out, don't be brutal with it. Withdrawal can be a terrible thing when it keeps us awake at night, and watching others forget us sooner than we'd want to be forgotten is no better. We rip out so much of ourselves to be cured of things faster than we should that we go bankrupt by the age of 30 and have less to offer each time we start with someone new. But to feel nothing so as not to feel anything what a waste!'"


const paragraphs = " These are tough times I know, but the good thing about life is that its so transient, everything changes with time, everything. Everything will be okay, even when things arent. I  will be with you, every step of the way. "

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
            <FancyTextSlide />
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
            <div style={{ height: "100vh" }} id="quotes"></div>
            <Character paragraph={paragraph} />
            <div style={{ height: "100vh" }}></div>
            <ZoomParallax />
            <div style={{ height: "100vh" }} id="quotes"></div>
            <Character paragraph={paragraphs} />
            <div style={{ height: "100vh" }}></div>
            <section ref={container} className={styles.main}>
                {
                    projects.map((project, i) => {
                        const targetScale = 1 - ((projects.length - i) * 0.05);
                        return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
                    })
                }
            </section>
            <FancyTextSlideC />

        </main>
    )
}

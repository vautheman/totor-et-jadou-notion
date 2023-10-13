import React, { useState, useEffect } from "react"
import Image from 'next/image'
import logo from '../public/img/logo-header.png'
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, useMotionValue, useSpring, useCycle, AnimatePresence } from 'framer-motion'

// animation menu
const sideVariants = {
    closed: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: -1
        }
    },
    open: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: 1
        }
    }
};

// Animation enfant du menu
const itemVariants = {
    closed: {
        opacity: 0
    },
    open: { opacity: 1 }
};

export default function Menu() {

    const router = useRouter();
    const currentRoute = router.pathname;

    const [open, cycleOpen] = useCycle(false, true);

    // Cursor close follow mouse move
    const curseurX = useMotionValue(-100)
    const curseurY = useMotionValue(-100)
    // Effet rebondissant 
    const springConfig = { amortissement: 25, rigidité: 700 };
    const curseurXSpring = useSpring(curseurX, springConfig);
    const curseurYSpring = useSpring(curseurY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            curseurX.set(e.clientX - 16)
            curseurY.set(e.clientY - 16)
        }
        window.addEventListener('mousemove', moveCursor)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
        }
    }, [])

    return (
        <>
            <div className="flex flex-col gap-2 scale-90 group cursor-pointer" onClick={cycleOpen}>
                <span className="block h-[0.15rem] w-7 bg-white group-hover:w-8 transition-all"></span>
                <span className="block h-[0.15rem] w-4 bg-white group-hover:w-8 transition-all"></span>
                <span className="block h-[0.15rem] w-5 bg-white group-hover:w-8 transition-all"></span>
            </div>
            <AnimatePresence>
                {open && (
                    <>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: {duration: 0.1, delay: 0} }} exit={{ opacity: 0 }} onClick={cycleOpen} className="hidden md:block fixed top-0 left-0 h-screen w-screen backdrop-blur-lg bg-[#161E2F]/50 z-30">
                            <motion.div className="absolute opacity-80 bg-[#161E2F] w-20 h-20 rounded-full flex items-center justify-center -left-5 -top-5" style={{ translateX: curseurXSpring, translateY: curseurYSpring, }}>
                                <span className="h-1 w-1/2 bg-white block rotate-45 absolute"></span>
                                <span className="h-1 w-1/2 bg-white block -rotate-45 absolute"></span>
                            </motion.div>
                        </motion.div>
                        <motion.div initial={{ width: 0 }} animate={{ width: "50%" }} exit={{ width: 0, transition: { delay: 0.3, duration: 0.3 } }} className="hidden md:block fixed bg-[#161E2F] w-1/2 h-screen top-0 left-0 z-10 no-parallax">
                            <svg className="absolute right-0 translate-x-full w-auto h-full" width="66" height="982" viewBox="0 0 66 982" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M41.3194 -1.13352e-06L48.2274 81.8333C54.8772 163.667 69.0808 327.333 65.4008 491C61.979 654.667 41.3193 818.333 30.9895 900.167L20.6597 982L-2.7063e-06 982L6.98141e-07 900.167C4.10258e-06 818.333 1.09115e-05 654.667 1.77203e-05 491C2.45292e-05 327.333 3.13381e-05 163.667 3.47425e-05 81.8333L3.8147e-05 -3.03122e-06L41.3194 -1.13352e-06Z" fill="#161E2F" />
                            </svg>
                            <svg className="absolute right-0 translate-x-full w-auto h-full" width="107" height="982" viewBox="0 0 107 982" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M61.7946 -2.07618e-06L72.0937 81.8333C82.3928 163.667 102.991 327.333 106.403 491C110.072 654.667 95.9103 818.333 89.2803 900.167L82.3927 982L-2.7063e-06 982L6.98141e-07 900.167C4.10258e-06 818.333 1.09115e-05 654.667 1.77203e-05 491C2.45292e-05 327.333 3.13381e-05 163.667 3.47425e-05 81.8333L3.8147e-05 -4.91425e-06L61.7946 -2.07618e-06Z" fill="#161E2F" fill-opacity="0.5" />
                            </svg>
                            <svg className="absolute right-0 translate-x-full w-auto h-full" width="119" height="982" viewBox="0 0 119 982" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M42.0157 -3.5285e-06L62.7637 81.8333C83.5118 163.667 125.008 327.333 118.07 491C111.392 654.667 55.6316 818.333 28.2052 900.167L0.519559 982L0.519562 900.167C0.519566 818.333 0.519573 654.667 0.519579 491C0.519586 327.333 0.519593 163.667 0.519597 81.8333L0.5196 -5.43432e-06L42.0157 -3.5285e-06Z" fill="#161E2F" fill-opacity="0.2" />
                            </svg>

                            <div className="flex flex-col justify-between p-16 h-full">
                                <motion.div initial="closed" animate="open" variants={sideVariants} exit={{ opacity: 0 }} className="flex flex-row flex-nowrap gap-5">
                                    <Image alt='logo' src={logo} className="w-5" />
                                    <motion.p variants={itemVariants} className="font-body text-2xl text-white font-bold">Totor & Jadou</motion.p>
                                </motion.div>
                                <motion.div initial="closed" animate="open" variants={sideVariants} exit={{ opacity: 0 }} className="grid gap-16">
                                    <Link href={'/'} className={currentRoute === "/" ? "active" : ""}><motion.span variants={itemVariants} className="font-body text-8xl font-bold text-white/50 hover:text-white transition-all">Home</motion.span></Link>
                                    <Link href={'/recipe'} className={currentRoute === "/recipe" ? "active" : ""}><motion.span variants={itemVariants} className="font-body text-8xl font-bold text-white/50 hover:text-white transition-all">Cuisine</motion.span></Link>
                                    <Link href={'/blog'} className={currentRoute === "/blog" ? "active" : ""}><motion.span variants={itemVariants} className="font-body text-8xl font-bold text-white/50 hover:text-white transition-all">Astuce</motion.span></Link>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Menu for phone */}
                        <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ width: 0, transition: { delay: 0.3, duration: 0.3 } }} className="fixed block md:hidden bg-[#161E2F] w-1/2 h-screen top-0 left-0 z-20">
                            <div className="flex flex-col items-center text-center justify-between p-16 h-full">
                                <motion.div initial="closed" animate="open" variants={sideVariants} exit={{ opacity: 0 }} className="flex flex-row flex-nowrap gap-5">
                                    <Image alt='logo' src={logo} className="w-5" />
                                    <motion.p variants={itemVariants} className="font-body text-2xl text-white font-bold">Totor & Jadou</motion.p>
                                </motion.div>
                                <motion.div initial="closed" animate="open" variants={sideVariants} exit={{ opacity: 0 }} className="grid gap-10">
                                    <Link href={'/recipe'} className={currentRoute === "/recipe" ? "active" : ""}><motion.span variants={itemVariants} className="font-body text-6xl font-bold text-white/50 hover:text-white transition-all">Cuisine</motion.span></Link>
                                    <Link href={'/maison'} className={currentRoute === "/maison" ? "active" : ""}><motion.span variants={itemVariants} className="font-body text-6xl font-bold text-white/50 hover:text-white transition-all">Maison</motion.span></Link>
                                    <Link href={'/blog'} className={currentRoute === "/blog" ? "active" : ""}><motion.span variants={itemVariants} className="font-body text-6xl font-bold text-white/50 hover:text-white transition-all">Blog</motion.span></Link>
                                </motion.div>
                                <div className="flex justify-center w-full">
                                    <div className="relative opacity-80 bg-black/80 w-20 h-20 rounded-full flex items-center justify-center active:scale-90 transition-all" onClick={cycleOpen}>
                                        <span className="h-1 w-1/2 bg-white block rotate-45 absolute"></span>
                                        <span className="h-1 w-1/2 bg-white block -rotate-45 absolute"></span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>



                )}
            </AnimatePresence>
        </>
    )
}
import { motion } from 'framer-motion'
import ReactWOW from 'react-wow'
import 'animate.css'

const blackBox = {
    initial: {
        height: "100vh",
        bottom: 0,
    },
    animate: {
        height: 0,
        transition: {
            when: "afterChildren",
            duration: 0.7,
            ease: [0.87, 0, 0.13, 1],
        },
    },
    exit: {
        height: "100vh",
        bottom: 0,
        transition: {
            duration: 0.2,
            ease: [0.87, 0, 0.13, 1],
        }
    },
};

const textContainer = {
    initial: {
        opacity: 1
    },
    animate: {
        opacity: 0,
        transition: {
            duration: 0.25,
            when: "afterChildren",
        },
    },
};

const text = {
    initial: {
        y: 40,
    },
    animate: {
        y: 80,
        transition: {
            duration: 1.5,
            ease: [0.87, 0, 0.13, 1],
        },
    },
};

export default function InitialTransition() {

    return (
        <div className="absolute inset-0 flex items-center w-full h-screen justify-center pointer-events-none">
            <motion.div
                className="fixed flex justify-center items-center z-50 w-full bg-[#161E2F]"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={blackBox}
            >
                <motion.svg variants={textContainer} className="absolute z-50 flex">
                    <pattern
                        id="pattern"
                        patternUnits="userSpaceOnUse"
                        width={750}
                        height={800}
                        className="text-white"
                    >
                        <rect className="w-full h-full fill-current" />
                        <motion.rect variants={text} className="w-full h-full text-gray-600 fill-current" />
                    </pattern>
                    <text
                        className="text-4xl font-bold font-body animate__animated animate__fadeIn"
                        text-anchor="middle"
                        x="50%"
                        y="50%"
                        style={{ fill: "url(#pattern)" }}
                    >
                        Totor & Jadou
                    </text>
                </motion.svg>
            </motion.div>
        </div>
    );
};
import { motion } from "framer-motion";

/* const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
} */

const blackBox = {
    initial: {
        height: 0,
    },
    animate: {
        height: "100vh",
        transition: {
            when: "afterChildren",
            duration: 0.7,
            ease: [0.87, 0, 0.13, 1],
        },
    }
};

const Layout = ({ children }) => (
    <motion.div>
        <motion.div variants={blackBox} initial="initial" exit="animate" className="fixed w-screen h-screen z-50 bottom-0 left-0 bg-[#161E2F] no-parallax"></motion.div>
        {children}
    </motion.div>
);
export default Layout;

{/* <motion.div
        variants={variants} // Pass the variant object into Framer Motion 
        initial={false} // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: 'linear' }} // Set the transition to linear
        className=""
    >
        {children}
    </motion.div> */}
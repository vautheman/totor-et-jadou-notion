import { motion, useMotionValue, useSpring, useCycle, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Tilt from 'react-vanilla-tilt'

export default function LegumeSaison({ data }) {

    const legumes = data;

    const [selectedId, setSelectedId] = useState(null)
    const currentMonth = new Date().toLocaleString("fr", { month: "long" });

    const [legumesTab, setLegumeTab] = useState([])
    const tab = [];

    useEffect(() => {
        legumes.map(legume => {
            return legume.properties.Mois.multi_select.map(Mois => {
                if (Mois.name.toLowerCase() == currentMonth) {
                    for (let i = 0; i < 5; i++) {
                        return tab.push(<li key={legume.id}><img className='w-12' src={legume.properties.Image.files[0].file.url} alt="" /></li>)
                    }
                }
            })
        })
        setLegumeTab(tab.slice(0, 8))
    }, [])

    /* Animate legume menu */
    const sideVariants = {
        closed: {
            transition: {
                staggerChildren: 0.2,
                staggerDirection: -1,
            }
        },
        open: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: 1
            }
        }
    };

    // Animation enfant du menu legume
    const itemVariants = {
        closed: {
            opacity: 0
        },
        open: {
            opacity: 1
        }
    };

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
            <div className='px-4 md:px-0 container mx-auto'>
                <motion.div layoutId='1' onClick={() => setSelectedId('1')}>
                    <div className='relative w-full bg-gradient-to-r from-[#D9D9D9]/10 to-transparent p-8 rounded-3xl flex flex-row justify-between items-center cursor-pointer hover:scale-105 transition-all active:scale-95'>
                        <h2 className='font-title text-white text-3xl'>Légume de {currentMonth}</h2>
                        <ul className='flex flex-row flex-nowrap gap-8 flex-1 justify-end relative mask-alpha-to-r'>
                            {legumesTab}
                        </ul>
                        <svg className='absolute right-0' width="106" height="16" viewBox="0 0 106 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M105.707 8.70711C106.098 8.31658 106.098 7.68342 105.707 7.29289L99.3431 0.928932C98.9526 0.538408 98.3195 0.538408 97.9289 0.928932C97.5384 1.31946 97.5384 1.95262 97.9289 2.34315L103.586 8L97.9289 13.6569C97.5384 14.0474 97.5384 14.6805 97.9289 15.0711C98.3195 15.4616 98.9526 15.4616 99.3431 15.0711L105.707 8.70711ZM0 9H105V7H0V9Z" fill="#FFFFFF" />
                        </svg>
                    </div>
                </motion.div>

                <AnimatePresence>
                    {selectedId && (
                        <>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='fixed top-0 left-0 w-full h-screen flex items-center justify-center no-parallax'>
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.3 } }} exit={{ opacity: 0 }} className=' bg-[#161E2F]/50 backdrop-blur-md fixed top-0 left-0 w-full h-full'>
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.1, delay: 0 } }} exit={{ opacity: 0 }} onClick={() => setSelectedId(null)} className="hidden md:block fixed top-0 left-0 h-screen w-screen backdrop-blur-lg bg-[#161E2F]/50 z-10 cursor-pointer"></motion.div>
                                </motion.div>
                                <motion.div layoutId={selectedId} className='w-full xl:w-2/3 h-full xl:h-5/6 bg-[#161E2F] py-8 xl:rounded-3xl justify-between relative items-center z-10'>
                                    {/* <span className='absolute py-1 px-5 -bottom-4 left-1/2 -translate-x-1/2 rounded-lg z-20 bg-[#FDBD84] text-black font-body text-xs 2xl:text-2xl capitalize'>{currentMonth}</span> */}
                                    <div className='overflow-y-scroll overflow-x-hidden h-full scrollbar-custom px-10 lg:px-20'>
                                        <motion.div onClick={() => setSelectedId(null)} className="absolute z-10 py-1 px-5 bottom-5 xl:bottom-0 left-1/2 -translate-x-1/2 xl:translate-y-1/2 bg-white/20 w-20 h-20 rounded-full flex items-center justify-center hover:scale-110 cursor-pointer active:scale-95 transition-all">
                                            <span className="h-1 w-1/2 bg-white block rotate-45 absolute"></span>
                                            <span className="h-1 w-1/2 bg-white block -rotate-45 absolute"></span>
                                        </motion.div>
                                        <div className='grid lg:grid-cols-2 gap-16'>
                                            <motion.div initial="closed" animate="open" variants={sideVariants} className='flex flex-col gap-4'>
                                                <h2 className='font-title text-white text-4xl'>Légume</h2>
                                                <hr className='opacity-5 bg-white h-1 rounded-full' />
                                                <ul className='grid md:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-1'>
                                                    {legumes.map(legume => {
                                                        return legume.properties.Type.multi_select[0].name == 'Légume' &&
                                                            legume.properties.Mois.multi_select.map(Mois => {
                                                                if (Mois.name.toLowerCase() == currentMonth) {
                                                                    return <motion.li variants={itemVariants} className='hover:scale-105 transition-all' key={legume.id}><Tilt style={{}} className='flex flex-row items-center gap-2 text-white/80 font-body bg-gradient-to-r from-[#D9D9D9]/10 to-transparent rounded-lg py-2 px-4'><img className='w-8 parallax-tilt' src={legume.properties.Image.files[0].file.url} alt="" />{legume.properties.Nom.title[0].plain_text}</Tilt></motion.li>
                                                                }
                                                            })
                                                    })}
                                                </ul>
                                            </motion.div>
                                            <motion.div initial="closed" animate="open" variants={sideVariants} className='flex flex-col gap-4'>
                                                <h2 className='font-title text-white text-4xl'>Fruit</h2>
                                                <hr className='opacity-5 bg-white h-1 rounded-full' />
                                                <ul className='grid md:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-1'>
                                                    {legumes.sort().map(legume => {
                                                        return legume.properties.Type.multi_select[0].name == 'Fruit' &&
                                                            legume.properties.Mois.multi_select.map(Mois => {
                                                                if (Mois.name.toLowerCase() == currentMonth) {
                                                                    return <motion.li variants={itemVariants} className='hover:scale-105 transition-all' key={legume.id}><Tilt style={{}} className='flex flex-row items-center gap-2 text-white/80 font-body bg-gradient-to-r from-[#D9D9D9]/10 to-transparent rounded-lg py-2 px-4'><img className='w-8 parallax-tilt' src={legume.properties.Image.files[0].file.url} alt="" />{legume.properties.Nom.title[0].plain_text}</Tilt></motion.li>
                                                                }
                                                            })
                                                    })}
                                                </ul>
                                            </motion.div>
                                        </div>
                                    </div>

                                </motion.div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

            </div>
        </>
    )
}
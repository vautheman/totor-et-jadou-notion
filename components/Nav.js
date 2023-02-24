import 'remixicon/fonts/remixicon.css'
import Image from 'next/image'
import logo from '../public/img/logo-header.png'
import Link from 'next/link'
import { useState } from 'react'
import Menu from './Menu'
import { motion, useMotionValue, useSpring, useCycle, AnimatePresence } from 'framer-motion'

export default function Nav(props) {
    const recipes = props.recipe;

    const [search, setSearch] = useState();

    const handleChange = (event) => {
        const tabRecipe = [];
        const value = event.target.value.toLowerCase();
        recipes.map(recipe => {
            const Name = recipe.properties.Nom.title[0].plain_text;
            if (Name.toLowerCase().includes(value)) {
                tabRecipe.push(recipe)
            }
            console.log(value)
        })

        console.log(tabRecipe)
        setSearch(tabRecipe)
        console.log(search)

    };


    /* Search bar phone */

    const [open, cycleOpen] = useCycle(false, true);

    // animation searchbar
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

    // Animation enfant de la searchbar
    const itemVariants = {
        closed: {
            opacity: 0
        },
        open: { opacity: 1 }
    };


    return (
        <header className="px-4 md:px-0 row-span-1 w-100 container mx-auto flex justify-between h-min py-5 items-center mb-14 gap-10">
            <Menu />
            <Link className='md:flex-1' href={'/'}>
                <div className='flex gap-3 flex-nowrap'>
                    <Image alt='logo' src={logo} className="w-5" />
                    <p className="font-body text-2xl text-white font-bold">Totor & Jadou</p>
                </div>
            </Link>

            <div className="w-1/2 relative hidden md:block">
                <div className='relative'>
                    <div className='w-max h-full absolute items-center flex right-5'>
                        <i className="ri-search-2-line"></i>
                    </div>
                    <input onBlur={e => setTimeout(() => setSearch(), 300)} onChange={handleChange} placeholder='Rechercher une recette' type="text" className="bg-white/20 py-3 px-5 w-full rounded-md font-body font-normal text-sm placeholder:text-black" />

                </div>
                {search &&
                    <div className='w-full max-h-max absolute grid gap-2 grid-cols-2 bg-[#161E2F] text-white rounded-md mt-2 p-2'>
                        {search.slice(0, 6).map(recipe => {
                            return (
                                <Link key={recipe.id} href={`/recipe/${recipe.id}`} className='flex flex-row justify-between h-16 items-center gap-4 hover:bg-white/10 rounded-md p-3 transition-all'>
                                    <img className='h-full' src={recipe.properties.Image.files[0].file.url} />
                                    <p className='flex-1'>{recipe.properties.Nom.title[0].plain_text} <span className='opacity-30'>- {recipes[0].properties['Type de plat'].select.name}</span></p>
                                </Link>
                            )
                        })}
                    </div>
                }
            </div>

            {/* Search bar for phone 📱 */}

            <i className="block md:hidden ri-search-2-line ri-xl text-white" onClick={cycleOpen}></i>
            <AnimatePresence>
                {open && (
                    <>
                        <motion.div initial={{ height: 0 }} animate={{ height: "100%" }} exit={{ height: 0, transition: { delay: 0.3, duration: 0.3 } }} className='flex md:hidden flex-col fixed p-8 justify-between items-center w-screen left-0 top-0 bg-[#161E2F] z-50'>
                            <motion.div initial="closed" animate="open" variants={sideVariants} exit={{opacity: 0}} className='w-full'>
                                <motion.div variants={itemVariants} className='relative'>
                                    <div className='w-max h-full absolute items-center flex right-5'>
                                        <i className="ri-search-2-line ri-lg"></i>
                                    </div>
                                    <input onBlur={e => setTimeout(() => setSearch(), 300)} onChange={handleChange} placeholder='Rechercher une recette' type="text" className="bg-white/20 py-3 px-5 w-full rounded-md font-body font-normal text-lg placeholder:text-black" />

                                </motion.div>
                                {search &&
                                    <div className='w-full grid gap-2 bg-white/5 text-white rounded-md mt-2 p-2'>
                                        {search.slice(0, 6).map(recipe => {
                                            return (
                                                <Link key={recipe.id} href={`/recipe/${recipe.id}`} className='flex flex-row justify-between h-16 items-center gap-4 hover:bg-white/10 rounded-md p-3 transition-all'>
                                                    <img className='h-full' src={recipe.properties.Image.files[0].file.url} />
                                                    <p className='flex-1'>{recipe.properties.Nom.title[0].plain_text} <span className='opacity-30'>- {recipes[0].properties['Type de plat'].select.name}</span></p>
                                                </Link>
                                            )
                                        })}
                                    </div>
                                }
                            </motion.div>
                            <div className="relative opacity-80 bg-black/80 w-20 h-20 rounded-full flex items-center justify-center active:scale-90 transition-all" onClick={cycleOpen}>
                                <span className="h-1 w-1/2 bg-white block rotate-45 absolute"></span>
                                <span className="h-1 w-1/2 bg-white block -rotate-45 absolute"></span>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>




        </header>
    )
}
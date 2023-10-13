import 'remixicon/fonts/remixicon.css'
import Image from 'next/image'
import logo from '../public/img/logo-totor-et-jadou-white.png'
import Link from 'next/link'
import { useState } from 'react'
import Menu from './Menu'
import { motion, useCycle, AnimatePresence } from 'framer-motion'

export default function Nav(props) {
    const recipes = props.recipe;

    const [search, setSearch] = useState();
    const [isSearch, setIsSearch] = useState(false);

    const handleChange = (event) => {
        const tabRecipe = [];
        const value = event.target.value.toLowerCase();
        recipes.map(recipe => {
            const Name = recipe.properties.Nom.title[0].plain_text;
            if (Name.toLowerCase().includes(value)) {
                tabRecipe.push(recipe)
            }
            //console.log(value)
        })

        //console.log(tabRecipe)
        setSearch(tabRecipe)
        //console.log(search)

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
        <header className="px-4 xl:px-0 row-span-1 w-100 container mx-auto grid grid-cols-3 h-min py-5 items-center mb-14 gap-4 xl:gap-10">
            <Menu />
            <Link className='cursor-pointer' href={'/'}>
                {/* <div className='flex gap-2 sm:gap-3 flex-nowrap items-center'>
                    <Image alt='logo' src={logo} className="sm:w-5 h-8 w-auto" />
                    <p className="font-body text-xl sm:text-2xl text-white font-bold">Totor & Jadou</p>
                </div> */}
                <Image alt='logo' src={logo} width={150} className="w-fit mx-auto" />
            </Link>

            <div className="w-full relative hidden md:block">
                <div className='relative flex justify-end'>
                    <div onClick={() => setIsSearch((current) => !current)} className='w-max h-full absolute items-center flex right-5'>
                        {isSearch ? 
                            <i className="ri-close-line text-white cursor-pointer"></i>
                            :
                            <i className="ri-search-2-line text-white cursor-pointer"></i>
                        }
                        
                    </div>
                    <motion.input animate={isSearch ? "visible" : "hidden"} variants={{visible: {paddingLeft: '0.5rem', paddingRight: '0.5rem', width: '100%'}, hidden: {paddingLeft: 0, paddingRight: 0, width: 0}}} onBlur={e => setTimeout(() => setSearch(), 300)} onChange={handleChange} placeholder='Rechercher une recette' type="text" className="bg-white/20 py-3 w-full rounded-md font-body font-normal text-sm placeholder:text-black" />

                </div>
                {search &&
                    <div className='w-full max-h-max absolute grid gap-2 grid-cols-1 z-20 bg-[#161E2F] text-white rounded-md mt-2 p-2'>
                        {search.slice(0, 6).map(recipe => {
                            return (
                                <Link key={recipe.id} href={`/recipe/${recipe.id}`} className='flex flex-row justify-between h-16 items-center gap-4 hover:bg-white/10 rounded-md p-3 transition-all'>
                                    <img className='h-full' src={recipe.properties.Image.files[0].file.url} />
                                    <p className='flex-1'>{recipe.properties.Nom.title[0].plain_text} <span className='opacity-30'>- {recipe.properties['Type de plat'].select.name}</span></p>
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
                            <motion.div initial="closed" animate="open" variants={sideVariants} exit={{ opacity: 0 }} className='w-full'>
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
                                                    <p className='flex-1'>{recipe.properties.Nom.title[0].plain_text} <span className='opacity-30'>- {recipe.properties['Type de plat'].select.name}</span></p>
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
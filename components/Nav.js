import 'remixicon/fonts/remixicon.css'
import Image from 'next/image'
import logo from '../public/img/logo-header.png'
import Link from 'next/link'
import { useState } from 'react'
import Menu from './Menu'

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


    return (
        <header className="w-100 container mx-auto flex justify-between h-min py-5 items-center mb-14 gap-10">
            <Menu />
            <Link className='flex-1' href={'/'}>
                <div className='flex gap-3 flex-nowrap'>
                    <Image alt='logo' src={logo} className="w-5" />
                    <p className="font-body text-2xl text-white font-bold">Totor & Jadou</p>
                </div>
            </Link>

            <div className="w-1/2 relative">
                <div className='relative'>
                    <div className='w-max h-full absolute items-center flex right-5'>
                        <i className="ri-search-2-line"></i>
                    </div>
                    <input onBlur={e => setTimeout(() => setSearch(), 300)} onChange={handleChange} placeholder='Rechercher une recette' type="text" className="bg-white/20 py-3 px-5 w-full rounded-md font-body font-normal text-sm placeholder:text-black" />

                </div>
                {search &&
                    <div className='w-full h-max absolute grid gap-2 grid-cols-2 bg-[#161E2F] text-white rounded-md mt-2 p-2'>
                        {search.slice(0, 3).map(recipe => {
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
        </header>
    )
}
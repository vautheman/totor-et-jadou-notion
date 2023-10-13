import Link from "next/link"
import Tilt from "react-vanilla-tilt"
import RedacteurCard from "./RedacteurCard";
import { useState } from "react";

export default function Card(props) {
    const recipe = props.recipe;
    const id = props.key;
    const [load, setLoad] = useState(-1)

    return (
        <Link onClick={() => setLoad(id)} scroll={false} href={`/recipe/${recipe.id}`} className="hover:scale-105 transition-all w-full active:scale-95">
            <Tilt className='bg-gradient-to-t from-[#D9D9D9]/10 to-transparent hover:from-blue-100/20 rounded-xl p-8 flex flex-col h-full justify-between relative' style={{}}>
                {load !== id ? 
                    <>
                        <div className='relative mb-10 m-2 parallax-tilt'>
                            <img className='blur-xl absolute top-0 -z-10 w-full' src={recipe.properties.Image.files[0].file.url} />
                            <img className="w-full" src={recipe.properties.Image.files[0].file.url} />
                            <span className='w-full h-full bg-black absolute top-[6%] left-[6%] blur-sm -z-20 rounded-full'></span>
                        </div>
                        <div className='flex flex-col gap-3 parallax-tilt text-center'>
                            <h2 className='font-title font-medium text-blue-100 text-2xl 2xl:text-3xl'>{recipe.properties.Nom.title[0].plain_text}</h2>
                            
                            <div className="flex gap-3 w-fit mx-auto mt-1">
                                <RedacteurCard name={recipe.properties["Rédacteur"].people[0].name.toLowerCase()} date={recipe.last_edited_time} />
                                <p className="font-body text-xs text-gray flex gap-1 items-center"><i className="ri-medal-line text-gold"></i>{recipe.properties.Difficulté.multi_select[0].name}</p>
                            </div>
                        </div>
                    </>
                    :
                    <div className="absolute w-full h-full bg-blue-dark/50 rounded-xl top-0 left-0 pointer-events-none z-10 flex justify-center items-center">
                        <svg class="animate-spin h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </div>
                }
                
            </Tilt>
        </Link>
    )
}
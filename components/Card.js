import Link from "next/link"
import Tilt from "react-vanilla-tilt"

export default function Card(props) {
    const recipe = props.recipe;
    return (
        <Link scroll={false} href={`/recipe/${recipe.id}`} className="hover:scale-105 transition-all w-80 active:scale-95">
            <Tilt className='bg-gradient-to-t from-[#D9D9D9]/10 to-transparent rounded-xl p-8 flex flex-col h-full justify-between' style={{}}>
                <div className='relative mb-10 m-2 parallax-tilt'>
                    <img className='blur-xl absolute top-0 -z-10 w-full' src={recipe.properties.Image.files[0].file.url} />
                    <img className="w-full" src={recipe.properties.Image.files[0].file.url} />
                </div>
                <div className='flex flex-col gap-3 parallax-tilt'>
                    <h2 className='font-title font-medium text-white text-2xl 2xl:text-3xl'>{recipe.properties.Nom.title[0].plain_text}</h2>
                    <p className='text-xs font-body font-medium text-[#A2A8BA] flex gap-2'>
                        <span>Dificulté : {recipe.properties.Difficulté.multi_select[0].name},</span>
                        <span>Type : {recipe.properties['Type de plat'].select.name}</span>
                    </p>
                </div>
            </Tilt>
        </Link>
    )
}
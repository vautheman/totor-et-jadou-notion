import Link from "next/link"
import Tilt from "react-vanilla-tilt"

export default function Plat(props) {
    return (
        <div className="flex flex-row flex-nowrap gap-10 overflow-x-auto overflow-y-hidden scrollbar-custom">
            {props.data.map(recipe => {
                if (recipe.properties['Type de plat'].multi_select[0].name == "Plat principal") {
                    return (
                        <Link key={recipe.id} href={`/recipe/${recipe.id}`} className="hover:scale-105 transition-all w-96">
                            <Tilt className='bg-gradient-to-t from-[#D9D9D9]/10 to-transparent rounded-xl p-8 2xl:p-14 flex flex-col h-full justify-between' style={{}}>
                                <div className='relative mb-10 m-2 parallax-tilt'>
                                    {/* <img className='blur-xl absolute top-0 -z-10' src={recipe.properties.Image.files[0].file.url} />
                                    <img src={recipe.properties.Image.files[0].file.url} /> */}
                                </div>
                                <div className='flex flex-col gap-3 parallax-tilt'>
                                    <h2 className='font-title font-medium text-white text-2xl 2xl:text-3xl'>{recipe.properties.Nom.title[0].plain_text}</h2>
                                    <p className='text-xs font-body font-medium text-[#A2A8BA] flex gap-2'>
                                        <span>Dificulté : {recipe.properties.Difficulté.multi_select[0].name},</span>
                                        <span>Type : {recipe.properties['Type de plat'].multi_select[0].name}</span>
                                    </p>
                                </div>
                            </Tilt>
                        </Link>
                    )
                }
            })}
        </div>

    )
}
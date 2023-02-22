import Image from "next/image";

export default function Main() {
    return (
        <main className="container mx-auto mb-10 2xl:mb-14">
            <Image src={"/img/bg-cacao.png"} layout="fill" objectFit="contain" objectPosition="right" className="-z-10 pointer-events-none"/>
            <div className="w-2/3 flex flex-col gap-1">
                <span className="font-body font-medium text-[#FDBD84] text-sm uppercase tracking-widest">ACCUEIL</span>
                <h1 className="font-title text-white text-5xl 2xl:text-6xl 2xl:leading-[5rem]">Un univers dédié aux recettes et astuces écologiques du quotidien. </h1>
            </div>
        </main>
    )
}
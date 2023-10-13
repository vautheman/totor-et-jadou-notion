import { useState } from "react";
import Redacteur from "./Redacteur";
import Link from "next/link";

export default function CardBlog (props) {
    const article = props.blog;
    const id = props.key;
    const [load, setLoad] = useState(-1);
    return (
        <>
            <Link onClick={() => setLoad(id)} scroll={false} href={`/blog/${article.id}`} className="w-full relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:border-2 after:rounded-xl after:border-white/10 rounded-xl grid grid-cols-3 bg-gradient-to-r from-transparent to-[#D9D9D9]/10 hover:scale-105 transition-transform duration-150 cursor-pointer">
                <div className="relative">
                    <img src={article.properties.Image.files[0].file.url} className="rounded-l-xl w-full aspect-[9/12] object-cover object-center" />
                    {load === id ? 
                    <div className="absolute top-0 left-0 flex justify-center items-center bg-black/30 w-full h-full">
                        <svg className="animate-spin h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </div>
                    : 
                    <></>
                    }
                </div>
                <div className="px-8 py-5 col-span-2 flex flex-col gap-5">
                    <h3 className="font-title text-blue-100 text-2xl">{article.properties.Nom.title[0].plain_text}</h3>
                    <div className="h-full ">
                        <p className="font-body text-gray text-sm text-limit">{article.properties.Description.rich_text[0].plain_text}</p>
                    </div>
                    {console.log(article)}
                    <footer className="flex flex-col justify-end gap-5">
                        <hr className="border-gray/30" />
                        <Redacteur name={article.properties["Rédacteur"].people[0].name.toLowerCase()} date={article.last_edited_time} />
                    </footer>
                </div>
            </Link>
        </>    
    )
}
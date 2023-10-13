import Nav from '@/components/Nav';
import { Client } from '@notionhq/client'
import Head from 'next/head'
import Layout from '@/components/Layout';
import { motion, useCycle, AnimatePresence } from 'framer-motion'
import Redacteur from '@/components/Redacteur';
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';

export default function Recipe({ article, articleParent, recipes }) {

    return (
        <>
            <Layout>
                <Head>
                    <title>{articleParent.properties && articleParent.properties.Nom.title[0].plain_text}</title>
                    <meta name="description" content={articleParent.properties.Description.rich_text[0].plain_text} />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta property="og:image" content={articleParent.properties.Image.files[0].file.url} />
                    <meta property="og:image:type" content="image/png" />
                    <meta property="og:image:width" content="1024" />
                    <meta property="og:image:height" content="1024" />
                    <link rel="icon" href="/img/logo-192.jpg" />
                </Head>

                <div className='px-4 container mx-auto grid lg:grid-cols-7 justify-between gap-32'>
                    <div className='relative col-span-4'>
                        <div className='w-full absolute z-10'>
                            <Nav recipe={recipes} />
                        </div>
                        <div className='pt-48'>
                            <div className='flex flex-col gap-8 mb-20'>
                                <div>
                                    <span className="font-body font-medium text-[#FDBD84] text-sm uppercase tracking-widest">{articleParent.properties && articleParent.properties['Catégorie'].select.name}</span>
                                    <h1 className="font-title text-white text-4xl md:text-5xl md:leading-[4rem] 2xl:text-6xl 2xl:leading-[4.5rem] mb-5">{articleParent.properties && articleParent.properties.Nom.title[0].plain_text}</h1>
                                    <p className='font-body text-md text-gray'>{articleParent.properties.Description.rich_text[0].plain_text}</p>
                                </div>

                                <div className='block lg:hidden mx-auto md:mx-0 relative right-0'>
                                    <img className='aspect-video object-cover rounded-xl border-2 border-white/10' src={articleParent.properties.Image.files[0].file.url} />
                                    {console.log(article)}
                                </div>

                                <div className='flex flex-col gap-5 mt-10'>
                                    {
                                    article.map((item, index) => {
                                        switch(item.type) {
                                            case "heading_2":
                                                return <h2 className='font-title text-3xl text-blue-100'>{item.heading_2.rich_text[0].plain_text}</h2>
                                            break;
                                            case "paragraph":
                                                return <p className='font-body text-md text-gray first-letter:uppercase'>{item.paragraph.rich_text[0].plain_text}</p>
                                            break;
                                            default: <></>
                                        }
                                    })
                                    }
                                    
                                    <div className='relative bg-gradient-to-l from-[#D9D9D9]/10 to-transparent rounded-xl p-8 pl-0 flex flex-col h-full justify-between gap-5 shadow-2xl shadow-black/5 after:content-[""] after:w-full after:h-full after:border-white/20 after:border-2 after:absolute after:top-0 after:left-0 after:rounded-xl after:pointer-events-none card'>
                                        <h3 className='font-title text-2xl 2xl:text-3xl text-blue-100'>Ingrédients</h3>
                                        <fieldset className="tasks-list grid grid-cols-2 gap-x-10 text-[#A2A8BA]">
                                            {article.map((item, index) => {
                                                return item.to_do && (
                                                    <label key={item.id} className="tasks-list-item flex items-center leading-6 cursor-pointer py-2 font-body">
                                                        <input type="checkbox" name={`task_${index}`} value="1" className="tasks-list-cb hidden" />
                                                        <span className="tasks-list-mark relative mr-3 w-5 h-5 border border-solid border-[#c4cbd2] aspect-square rounded-full"></span>
                                                        <span className="tasks-list-desc font-semibold">{item.to_do.rich_text[0].plain_text}</span>
                                                    </label>
                                                )
                                            })}

                                        </fieldset>
                                    </div>

                                    <div>
                                        <h3 className='font-title text-2xl 2xl:text-3xl text-white mb-8'>Étapes à suivre</h3>
                                        <ol className='text-left pb-52 list-decimal list-inside text-white/70 font-body gap-8 2xl:gap-8 flex flex-col font-medium text-lg'>
                                            {article.map(item => {
                                                return item.numbered_list_item &&
                                                    <li className='items-ordered' key={item.id}>{item.numbered_list_item.rich_text[0].plain_text}</li>
                                            })}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='hidden lg:block col-span-3 sticky top-0'>
                        <div className='sticky top-0 w-full h-screen py-10'>
                            <div className='relative h-full border-2 border-white/10 rounded-2xl'>
                                <img className='h-full object-cover rounded-2xl' src={articleParent.properties.Image.files[0].file.url} />
                                <div className='absolute bg-gradient-to-b from-transparent to-black/60 rounded-2xl w-full h-full top-0 left-0 flex flex-col p-5 justify-end items-center'>
                                    <Redacteur name={articleParent.properties["Rédacteur"].people[0].name.toLowerCase()} date={articleParent.last_edited_time} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Layout>
        </>
    )
}

export async function getServerSideProps({ params }) {
    const databaseId = process.env.NOTION_BIENETRE_DATABASE_ID;

    const notion = new Client({
        auth: process.env.NOTION_API_KEY
    })

    // Identifiant de la recette
    const blockId = params.id;

    // Recupère les datas de la recette par l'id de l'url
    const article = await notion.blocks.children.list({
        block_id: blockId
    })

    // Récupère les datas parents de la recette
    const articleParent = await notion.pages.retrieve({
        page_id: blockId
    })

    /* const commentaires = await notion.databases.query({
        database_id: process.env.NOTION_COMMENTAIRE_DATABASE_ID,
        filter:
        {
            property: "Recipe",
            "relation": {
                "contains": blockId
            }
        }
    }) */

    const recipes = await notion.databases.query({
        database_id: databaseId,
        sorts: [
            {
                property: 'Dernière modification',
                direction: 'descending',
            },
        ],
        filter:
        {
            property: "Totor & Jadou",
            "status": {
                "equals": "Publié"
            }
        }
    })

    return {
        props: {
            article: article.results,
            articleParent,
            recipes: recipes.results
        }
    }
}
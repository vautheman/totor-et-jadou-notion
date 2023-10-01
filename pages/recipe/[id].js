import Nav from '@/components/Nav';
import { Client } from '@notionhq/client'
import Head from 'next/head'
import Layout from '@/components/Layout';
import { motion, useCycle, AnimatePresence } from 'framer-motion'
import Redacteur from '@/components/Redacteur';
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';

export default function Recipe({ recipe, recipeParent, recipes }) {

    return (
        <>
            <Layout>
                <Head>
                    <title>{recipeParent.properties && recipeParent.properties.Nom.title[0].plain_text}</title>
                    <meta name="description" content={recipeParent.properties.Description.rich_text[0].plain_text} />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta property="og:image" content={recipeParent.properties.Image.files[0].file.url} />
                    <meta property="og:image:type" content="image/png" />
                    <meta property="og:image:width" content="1024" />
                    <meta property="og:image:height" content="1024" />
                    <link rel="icon" href="/img/logo-192.jpg" />
                </Head>

                <div className='absolute w-full z-10'>
                    <Nav recipe={recipes} />
                </div>
                <div className='px-4 container mx-auto flex justify-between gap-32'>
                    <div className='flex-1 pt-48'>
                        <div>
                            <div className='flex flex-col gap-8 mb-20'>
                                <div>
                                    <span className="font-body font-medium text-[#FDBD84] text-sm uppercase tracking-widest">{recipeParent.properties && recipeParent.properties['Type de plat'].select.name}</span>
                                    <h1 className="font-title text-white text-4xl md:text-5xl md:leading-[4rem] 2xl:text-6xl 2xl:leading-[4.5rem]">{recipeParent.properties && recipeParent.properties.Nom.title[0].plain_text}</h1>
                                </div>
                                <Redacteur name={recipeParent.properties["Rédacteur"].people[0].name.toLowerCase()} date={recipeParent.last_edited_time} />
                                <div className='block lg:hidden mx-auto md:mx-0 relative right-0 w-56 md:w-64'>
                                    <img className='blur-2xl absolute top-0 -z-10 scale-110' src={recipeParent.properties.Image.files[0].file.url} />
                                    <img src={recipeParent.properties.Image.files[0].file.url} />
                                </div>

                                <div className='flex flex-row flex-wrap gap-10 text-white 2xl:text-lg'>
                                    <span className='align-middle flex gap-2 font-body font-light'><i className="ri-timer-line text-[#FDBD84]"></i>{recipeParent.properties.Difficulté.multi_select[0].name}</span>
                                    <span className='align-middle flex gap-2 font-body font-light'><i className="ri-medal-line text-[#FDBD84]"></i>{recipeParent.properties["Temps (en min)"].number} minutes</span>
                                    <span className='align-middle flex gap-2 font-body font-light'><i className="ri-user-line text-[#FDBD84]"></i>Pour {recipeParent.properties["Quantité par personne"].number} pers.</span>
                                </div>

                                <div className='relative bg-gradient-to-l from-[#D9D9D9]/10 to-transparent rounded-xl p-8 pl-0 flex flex-col h-full justify-between gap-5 shadow-2xl shadow-black/5 after:content-[""] after:w-full after:h-full after:border-white/20 after:border-2 after:absolute after:top-0 after:left-0 after:rounded-xl card'>
                                    <h3 className='font-title text-2xl 2xl:text-3xl text-white'>Ingrédients</h3>
                                    <fieldset className="tasks-list grid grid-cols-2 gap-x-10 text-[#A2A8BA]">
                                        {recipe.map((item, index) => {
                                            return item.to_do && (
                                                <label key={item.id} className="tasks-list-item flex items-center leading-6 cursor-pointer py-2 font-body ">
                                                    <input type="checkbox" name={`task_${index}`} value="1" className="tasks-list-cb hidden" />
                                                    <span className="tasks-list-mark relative mr-3 w-5 h-5 border border-solid border-[#c4cbd2] aspect-square rounded-full"></span>
                                                    <span className="tasks-list-desc font-light">{item.to_do.rich_text[0].plain_text}</span>
                                                </label>
                                            )
                                        })}

                                    </fieldset>
                                </div>
                            </div>
                            
                            <div>
                                <h3 className='font-title text-2xl 2xl:text-3xl text-white mb-8'>Étapes à suivre</h3>
                                <ol className='text-left pb-52 list-decimal list-inside text-white/70 font-body gap-8 2xl:gap-8 flex flex-col font-light text-lg'>
                                    {recipe.map(item => {
                                        return item.numbered_list_item &&
                                            <li className='items-ordered' key={item.id}>{item.numbered_list_item.rich_text[0].plain_text}</li>
                                    })}
                                </ol>
                            </div>
                        </div>
                    </div>

                    <div className='hidden lg:block basis-1/3'>
                        <div className='sticky top-0 w-full h-screen flex justify-center items-center'>
                            <div className='relative w-full'>
                                <img className='w-full blur-2xl absolute top-0 -z-10 scale-110 opacity-30' src={recipeParent.properties.Image.files[0].file.url} />
                                <img className='w-full' src={recipeParent.properties.Image.files[0].file.url} />
                                <span className='w-full h-full bg-black absolute top-6 left-6 blur-md -z-20 rounded-full'></span>
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
    const databaseId = process.env.NOTION_DATABASE_ID;

    const notion = new Client({
        auth: process.env.NOTION_API_KEY
    })

    // Identifiant de la recette
    const blockId = params.id;

    // Recupère les datas de la recette par l'id de l'url
    const recipe = await notion.blocks.children.list({
        block_id: blockId
    })

    // Récupère les datas parents de la recette
    const recipeParent = await notion.pages.retrieve({
        page_id: blockId
    })

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

    return {
        props: {
            recipe: recipe.results,
            recipeParent,
            recipes: recipes.results,
            /* commentaires: commentaires.results, */
        }
    }
}
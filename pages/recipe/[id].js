import Nav from '@/components/Nav';
import { Client } from '@notionhq/client'
import Head from 'next/head'
import Layout from '@/components/Layout';
import { motion, useMotionValue, useSpring, useCycle, AnimatePresence } from 'framer-motion'
import Redacteur from '@/components/Redacteur';

export default function Recipe({ recipe, recipeParent, recipes }) {

    const [open, cycleOpen] = useCycle(false, true);

    return (
        <>
            <Layout>
                <Head>
                    <title>{recipeParent.properties && recipeParent.properties.Nom.title[0].plain_text}</title>
                    <meta name="description" content={recipeParent.properties.Description.rich_text[0].plain_text} />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/img/logo-192.jpg" />
                </Head>

                <div className='px-4 xl:px-0 grid lg:grid-cols-3 container mx-auto gap-16'>
                    <div className='col-span-2 relative lg:h-screen grid lg:grid-rows-6 gap-5 text-center md:text-left'>
                        <Nav recipe={recipes} />
                        <div className='relative row-span-2'>
                            <div className='hidden lg:block absolute mb-10 right-0 lg:translate-x-1/2 2xl:translate-x-1/3 w-56 2xl:w-72'>
                                <img className='blur-2xl absolute top-0 -z-10 scale-110' src={recipeParent.properties.Image.files[0].file.url} />
                                <img src={recipeParent.properties.Image.files[0].file.url} />
                            </div>

                            <div className='lg:w-4/5 h-full flex flex-col justify-between'>
                                <div className='flex flex-col gap-4 mb-5'>
                                    <div>
                                        <span className="font-body font-medium text-[#FDBD84] text-sm uppercase tracking-widest">{recipeParent.properties && recipeParent.properties['Type de plat'].select.name}</span>
                                        <h1 className="font-title text-white text-4xl md:text-5xl md:leading-[4rem] 2xl:text-6xl 2xl:leading-[4.5rem]">{recipeParent.properties && recipeParent.properties.Nom.title[0].plain_text}</h1>
                                    </div>
                                    <Redacteur name={recipeParent.properties["Rédacteur"].people[0].name.toLowerCase()} date={recipeParent.last_edited_time} />
                                    <div className='block lg:hidden mx-auto md:mx-0 relative mb-10 right-0 w-56 md:w-64'>
                                        <img className='blur-2xl absolute top-0 -z-10 scale-110' src={recipeParent.properties.Image.files[0].file.url} />
                                        <img src={recipeParent.properties.Image.files[0].file.url} />
                                    </div>
                                </div>
                                <h3 className='font-title text-2xl 2xl:text-3xl text-white mb-8'>Étapes à suivre</h3>
                            </div>
                        </div>


                        <div className='row-span-3 mask-alpha scrollbar-custom flex flex-col gap-12 overflow-y-auto lg:overflow-y-auto pb-10 2xl:mr-12'>
                            <ol className='text-left pb-52 md:w-4/5 list-decimal list-inside text-white/70 font-body gap-4 2xl:gap-8 flex flex-col font-light 2xl:text-xl'>
                                {recipe.map(item => {
                                    return item.numbered_list_item &&
                                        <li key={item.id}>{item.numbered_list_item.rich_text[0].plain_text}</li>
                                })}
                            </ol>
                        </div>
                    </div>

                    <div className='hidden lg:grid h-screen items-center py-3'>
                        <div className='bg-white rounded-3xl h-full p-3 flex flex-col justify-between'>
                            <div className='flex flex-col gap-8 py-20 p-16 2xl:px-24'>
                                <div className='flex flex-col gap-2 2xl:text-lg'>
                                    <span className='align-middle flex gap-2 font-body font-light'><i className="ri-timer-line text-black/50"></i>{recipeParent.properties.Difficulté.multi_select[0].name}</span>
                                    <span className='align-middle flex gap-2 font-body font-light'><i className="ri-medal-line text-black/50"></i>{recipeParent.properties["Temps (en min)"].number} minutes</span>
                                    <span className='align-middle flex gap-2 font-body font-light'><i className="ri-user-line text-black/50"></i>Pour 2 pers.</span>
                                </div>
                                <h3 className='font-title text-2xl 2xl:text-3xl'>Ingrédients</h3>
                                <fieldset className="tasks-list">
                                    {recipe.map((item, index) => {
                                        return item.to_do && (
                                            <label key={item.id} className="tasks-list-item py-2 font-body ">
                                                <input type="checkbox" name={`task_${index}`} value="1" className="tasks-list-cb" />
                                                <span className="tasks-list-mark"></span>
                                                <span className="tasks-list-desc font-light">{item.to_do.rich_text[0].plain_text}</span>
                                            </label>
                                        )
                                    })}

                                </fieldset>
                            </div>

                            <div className='bg-[#A2A8BA] w-full h-20 bottom-0 rounded-full shadow-md'>
                                <ul className='flex flex-row flex-nowrap text-white w-full gap-5 p-8 justify-around h-full items-center'>
                                    <li className='cursor-pointer w-full rounded-lg aspect-square hover:bg-white/50 flex items-center justify-center transition-all ease-in'><i class="ri-shopping-bag-3-line ri-2x"></i></li>
                                    <li className='cursor-pointer w-full rounded-lg aspect-square hover:bg-white/50 flex items-center justify-center transition-all ease-in'><i class="ri-message-3-line ri-2x"></i></li>
                                    <li className='cursor-pointer w-full rounded-lg aspect-square hover:bg-white/50 flex items-center justify-center transition-all ease-in'><i class="ri-image-line ri-2x"></i></li>
                                    <li className='cursor-pointer w-full rounded-lg aspect-square hover:bg-white/50 flex items-center justify-center transition-all ease-in'><i class="ri-share-line ri-2x"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full p-2 fixed bottom-0 z-10 lg:hidden'>
                    <div className='bg-[#A2A8BA] h-20 rounded-3xl shadow-md w-full md:w-1/2 mx-auto'>
                        <ul className='flex flex-row flex-nowrap text-white w-full gap-5 p-8 justify-around h-full items-center'>
                            <li onClick={cycleOpen} className='cursor-pointer w-full rounded-lg aspect-square hover:bg-white/50 flex items-center justify-center transition-all ease-in'><i class="ri-shopping-bag-3-line ri-2x"></i></li>
                            <li className='cursor-pointer w-full rounded-lg aspect-square hover:bg-white/50 flex items-center justify-center transition-all ease-in'><i class="ri-message-3-line ri-2x"></i></li>
                            <li className='cursor-pointer w-full rounded-lg aspect-square hover:bg-white/50 flex items-center justify-center transition-all ease-in'><i class="ri-image-line ri-2x"></i></li>
                            <li className='cursor-pointer w-full rounded-lg aspect-square hover:bg-white/50 flex items-center justify-center transition-all ease-in'><i class="ri-share-line ri-2x"></i></li>
                        </ul>
                    </div>
                </div>

                <AnimatePresence>
                    {open && (
                        <>
                            <motion.div initial={{ height: 0 }} animate={{ height: "83%" }} exit={{ height: 0, transition: { duration: 0.3 } }} className='block lg:hidden fixed bg-white bottom-0 w-full rounded-t-3xl scrollbar-custom overflow-y-auto'>
                                <div className='flex flex-col gap-8 py-20 p-16 2xl:px-24'>
                                    <div className='flex flex-col gap-2 2xl:text-lg'>
                                        <span className='align-middle flex gap-2 font-body font-light'><i className="ri-timer-line text-black/50"></i>{recipeParent.properties.Difficulté.multi_select[0].name}</span>
                                        <span className='align-middle flex gap-2 font-body font-light'><i className="ri-medal-line text-black/50"></i>{recipeParent.properties["Temps (en min)"].number} minutes</span>
                                    </div>
                                    <h3 className='font-title text-2xl 2xl:text-3xl'>Ingrédients</h3>
                                    <fieldset className="tasks-list">
                                        {recipe.map((item, index) => {
                                            return item.to_do && (
                                                <label key={item.id} className="tasks-list-item py-2">
                                                    <input type="checkbox" name={`task_${index}`} value="1" className="tasks-list-cb" />
                                                    <span className="tasks-list-mark"></span>
                                                    <span className="tasks-list-desc">{item.to_do.rich_text[0].plain_text}</span>
                                                </label>
                                            )
                                        })}

                                    </fieldset>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
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

    return {
        props: {
            recipe: recipe.results,
            recipeParent,
            recipes: recipes.results
        }
    }
}
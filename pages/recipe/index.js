import Layout from "@/components/Layout";
import Nav from "@/components/Nav";
import Head from "next/head";
import { Client } from "@notionhq/client";
import Link from "next/link";
import Card from "@/components/Card";

export default function Recipe({ recipes }) {

    return (
        <>
            <Layout>
                <Head>
                    <title>Nos recettes culinaires - Totor & Jadou</title>
                    <meta name="description" content="Objectif zéro déchets, recette, soin beauté, produits naturels, plantes d'intérieur... Un quotidien qui nous rends la vie plus agréable." />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Nav recipe={recipes} />

                <div className='px-4 xl:px-0 container mx-auto'>
                    <div className="my-24 flex flex-col gap-5">
                        <div className='flex flex-col md:flex-row gap-8 justify-between md:items-center'>
                            <h2 className="text-4xl font-title text-white">Nos plats principaux</h2>
                            <Link href={'/'} className="hover:scale-110 transition-all">
                                <p className='text-[#FDBD84] uppercase font-body text-xs flex flex-row gap-5'>Voir la catégorie
                                    <svg width="106" height="16" viewBox="0 0 106 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M105.707 8.70711C106.098 8.31658 106.098 7.68342 105.707 7.29289L99.3431 0.928932C98.9526 0.538408 98.3195 0.538408 97.9289 0.928932C97.5384 1.31946 97.5384 1.95262 97.9289 2.34315L103.586 8L97.9289 13.6569C97.5384 14.0474 97.5384 14.6805 97.9289 15.0711C98.3195 15.4616 98.9526 15.4616 99.3431 15.0711L105.707 8.70711ZM0 9H105V7H0V9Z" fill="#FDBD84" />
                                    </svg>
                                </p>
                            </Link>
                        </div>
                        <hr className='opacity-5 mb-10 bg-white h-1 rounded-full' />
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                            {recipes.map(recipe => {
                                return (
                                    <Card key={recipe.id} recipe={recipe} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export async function getServerSideProps() {

    const notion = new Client({
        auth: process.env.NOTION_API_KEY
    })

    const databaseId = process.env.NOTION_DATABASE_ID;
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
            recipes: recipes.results,
        }
    }
}
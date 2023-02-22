import Head from 'next/head'
import { Client } from '@notionhq/client'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Main from '@/components/Main'
import Tilt from 'react-vanilla-tilt'
import Card from '@/components/Card'
import Footer from '@/components/Footer'
import Layout from '@/components/Layout'

export default function Home({ recipes }) {

  const limit_size = 10;

  return (
    <>
      <Layout>
        <Head>
          <title>Totor & Jadou</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav recipe={recipes} />

        <Main />

        <section className='container mx-auto'>
          <div className='w-2/3'>
            <div className='grid grid-cols-7 gap-10'>
              <div className='grid grid-rows-1 col-span-3'>
                <Link href={`/recipe/${recipes[0].id}`} className="hover:scale-105 transition-all">
                  <Tilt className='bg-gradient-to-t from-[#D9D9D9]/10 to-transparent rounded-xl p-8 2xl:p-14 flex flex-col relative' style={{}}>
                    <div className='relative mb-10 m-2 parallax-tilt'>
                      <img className='blur-xl absolute top-0 -z-10' src={recipes[0].properties.Image.files[0].file.url} />
                      <img src={recipes[0].properties.Image.files[0].file.url} />
                    </div>
                    <div className='flex flex-col gap-3 parallax-tilt'>
                      <h2 className='font-title font-medium text-white text-2xl 2xl:text-3xl'>{recipes[0].properties.Nom.title[0].plain_text}</h2>
                      <p className='text-xs font-body font-medium text-[#A2A8BA] flex gap-2'>
                        <span>Dificulté : {recipes[0].properties.Difficulté.multi_select[0].name},</span>
                        <span>Type : {recipes[0].properties['Type de plat'].select.name}</span>
                      </p>
                    </div>
                    <span className='absolute py-1 px-2 top-0 left-0 rounded-lg z-20 bg-[#FDBD84] text-white font-body text-xs 2xl:text-sm'>Nouveau</span>
                  </Tilt>
                </Link>
              </div>

              <div className='grid grid-rows-2 gap-10 col-span-4'>
                <Link href={`/recipe/${recipes[1].id}`} className="hover:scale-105 transition-all">
                  <Tilt className='bg-gradient-to-l from-[#D9D9D9]/10 to-transparent rounded-xl px-5 h-full grid grid-cols-3 items-center gap-5' style={{}}>
                    <div className='relative parallax-tilt'>
                      <img className='blur-xl absolute top-0 -z-10' src={recipes[1].properties.Image.files[0].file.url} />
                      <img src={recipes[1].properties.Image.files[0].file.url} />
                    </div>
                    <div className='flex flex-col gap-3 col-span-2 parallax-tilt'>
                      <h2 className='font-title font-medium text-white text-2xl 2xl:text-3xl'>{recipes[1].properties.Nom.title[0].plain_text}</h2>
                      <p className='text-xs font-body font-medium text-[#A2A8BA] flex gap-2'>
                        <span>Dificulté : {recipes[1].properties.Difficulté.multi_select[0].name},</span>
                        <span>Type : {recipes[1].properties['Type de plat'].select.name}</span>
                      </p>
                    </div>
                  </Tilt>
                </Link>

                <Link href={`/recipe/${recipes[2].id}`} className="hover:scale-105 transition-all">
                  <Tilt className='bg-gradient-to-l from-[#D9D9D9]/10 to-transparent rounded-xl px-5 h-full grid grid-cols-3 items-center gap-8' style={{}}>
                    <div className='relative parallax-tilt'>
                      <img className='blur-xl absolute top-0 -z-10' src={recipes[2].properties.Image.files[0].file.url} />
                      <img src={recipes[2].properties.Image.files[0].file.url} />
                    </div>
                    <div className='flex flex-col gap-3 col-span-2 parallax-tilt'>
                      <h2 className='font-title font-medium text-white text-2xl 2xl:text-3xl'>{recipes[2].properties.Nom.title[0].plain_text}</h2>
                      <p className='text-xs font-body font-medium text-[#A2A8BA] flex gap-2'>
                        <span>Dificulté : {recipes[2].properties.Difficulté.multi_select[0].name},</span>
                        <span>Type : {recipes[2].properties['Type de plat'].select.name}</span>
                      </p>
                    </div>
                  </Tilt>
                </Link>
              </div>
            </div>

          </div>

        </section>

        <div className='container mx-auto'>
          <div className="my-24 flex flex-col gap-5">
            <div className='flex flex-row justify-between items-center'>
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
            <div className="flex flex-row flex-nowrap gap-10">
              {recipes.slice(0, limit_size).map(recipe => {
                if (recipe.properties['Type de plat'].select.name == "Plat principal") {
                  return (
                    <Card key={recipe.id} recipe={recipe} />
                  )
                }
              })}
            </div>
          </div>

          <div className="my-24 flex flex-col gap-5">
            <div className='flex flex-row justify-between items-center'>
              <h2 className="text-4xl font-title text-white">Nos desserts</h2>
              <Link href={'/'} className="hover:scale-110 transition-all">
                <p className='text-[#FDBD84] uppercase font-body text-xs flex flex-row gap-5'>Voir la catégorie
                  <svg width="106" height="16" viewBox="0 0 106 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M105.707 8.70711C106.098 8.31658 106.098 7.68342 105.707 7.29289L99.3431 0.928932C98.9526 0.538408 98.3195 0.538408 97.9289 0.928932C97.5384 1.31946 97.5384 1.95262 97.9289 2.34315L103.586 8L97.9289 13.6569C97.5384 14.0474 97.5384 14.6805 97.9289 15.0711C98.3195 15.4616 98.9526 15.4616 99.3431 15.0711L105.707 8.70711ZM0 9H105V7H0V9Z" fill="#FDBD84" />
                  </svg>
                </p>
              </Link>
            </div>
            <hr className='opacity-5 mb-10 bg-white h-1 rounded-full' />
            <div className="flex flex-row flex-nowrap gap-10">
              {recipes.slice(0, limit_size).map(recipe => {
                if (recipe.properties['Type de plat'].select.name == "Dessert") {
                  return (
                    <Card key={recipe.id} recipe={recipe} />
                  )
                }
              })}
            </div>
          </div>

          <div className="my-24 flex flex-col gap-5">
            <div className='flex flex-row justify-between items-center'>
              <h2 className="text-4xl font-title text-white">Nos entrées</h2>
              <Link href={'/'} className="hover:scale-110 transition-all">
                <p className='text-[#FDBD84] uppercase font-body text-xs flex flex-row gap-5'>Voir la catégorie
                  <svg width="106" height="16" viewBox="0 0 106 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M105.707 8.70711C106.098 8.31658 106.098 7.68342 105.707 7.29289L99.3431 0.928932C98.9526 0.538408 98.3195 0.538408 97.9289 0.928932C97.5384 1.31946 97.5384 1.95262 97.9289 2.34315L103.586 8L97.9289 13.6569C97.5384 14.0474 97.5384 14.6805 97.9289 15.0711C98.3195 15.4616 98.9526 15.4616 99.3431 15.0711L105.707 8.70711ZM0 9H105V7H0V9Z" fill="#FDBD84" />
                  </svg>
                </p>
              </Link>
            </div>
            <hr className='opacity-5 mb-10 bg-white h-1 rounded-full' />
            <div className="flex flex-row flex-nowrap gap-10">
              {recipes.slice(0, limit_size).map(recipe => {
                if (recipe.properties['Type de plat'].select.name == "Entrée") {
                  return (
                    <Card key={recipe.id} recipe={recipe} />
                  )
                }
              })}
            </div>
          </div>
        </div>

        <Footer />
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
      recipes: recipes.results
    }
  }
}
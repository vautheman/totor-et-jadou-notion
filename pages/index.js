import Head from 'next/head'
import { Client } from '@notionhq/client'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Tilt from 'react-vanilla-tilt'
import Card from '@/components/Card'
import Footer from '@/components/Footer'
import Layout from '@/components/Layout'
import Image from "next/image";
import LegumeSaison from '@/components/LegumeSaison'
import { useEffect, useState } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import CardBlog from '@/components/CardBlog'

export default function Home({ databaseRecipes, recipes, legumes, blogs }) {

  const limit_size = 4;

  const [categories, setCategories] = useState()

  useEffect(() => {
    /* const catTab = []
    databaseRecipes.properties['Type de plat'].select.options.map(categorie => {
      catTab.push(categorie.name);
    })

    const RecipeByCat = catTab.sort().reverse().map((categorie, index) => {
      return (
        <>
          <div key={index} className="my-24 flex flex-col gap-5">
            <div className='flex flex-col md:flex-row gap-8 justify-between md:items-center'>
              <h2 className="text-4xl font-title text-blue-100">{categorie}</h2>
              <Link href={{ pathname: '/categorie/', query: { categorie: categorie } }} className="hover:scale-110 transition-all">
                <p className='text-[#FDBD84] uppercase font-body text-xs flex flex-row gap-5'>Voir la catégorie
                  <svg width="106" height="16" viewBox="0 0 106 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M105.707 8.70711C106.098 8.31658 106.098 7.68342 105.707 7.29289L99.3431 0.928932C98.9526 0.538408 98.3195 0.538408 97.9289 0.928932C97.5384 1.31946 97.5384 1.95262 97.9289 2.34315L103.586 8L97.9289 13.6569C97.5384 14.0474 97.5384 14.6805 97.9289 15.0711C98.3195 15.4616 98.9526 15.4616 99.3431 15.0711L105.707 8.70711ZM0 9H105V7H0V9Z" fill="#FDBD84" />
                  </svg>
                </p>
              </Link>
            </div>
            <hr className='opacity-5 mb-10 bg-white h-1 rounded-full' />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {recipes.slice(0, limit_size).map(recipe => {
                if (recipe.properties['Type de plat'].select.name == categorie) {
                  return (
                    <Card key={recipe.id} recipe={recipe} />
                  )
                }
              })}
            </div>
          </div>
        </>
      )
    })

    setCategories(RecipeByCat); */

    const RecipeByCat = recipes.slice(0, limit_size).map(recipe => {
      return (
        <Card key={recipe.id} recipe={recipe} />
      )
    })
    setCategories(RecipeByCat);
  }, [])


  return (
    <>
      <Layout>
        <Head>
          <title>Totor et Jadou, Objectif zéro déchets - Recette et bien-être au naturel</title>
          <meta name="description" content="Objectif zéro déchets, recette, soin beauté, produits naturels, plantes d'intérieur... Un quotidien qui nous rends la vie plus agréable." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav recipe={recipes} />

        <main className="px-4 xl:px-0 container mx-auto mb-20 2xl:mb-14 pt-5">
          <Image src={"/img/bg-cacao.png"} layout="fill" objectFit="contain" objectPosition="right" className="-z-10 pointer-events-none hidden lg:block" />
          <div className="lg:w-2/3 flex flex-col gap-3">
            <span className="font-body font-medium text-[#FDBD84] text-sm uppercase tracking-widest">ACCUEIL</span>
            <h1 className="font-title text-blue-100 text-4xl font-medium lg:text-5xl 2xl:text-6xl 2xl:leading-[5rem]">Un univers dédié aux recettes et astuces écologiques du quotidien à moins de 5€. </h1>
          </div>
        </main>

        <section className='px-4 xl:px-0 container mx-auto'>
          <div className='lg:w-2/3'>
            <div className='flex flex-col md:grid md:grid-cols-7 gap-10'>
              <div className='grid grid-rows-1 col-span-3'>
                <Link href={`/recipe/${recipes[0].id}`} className="hover:scale-105 transition-all">
                  <Tilt className='bg-gradient-to-t from-[#D9D9D9]/10 to-transparent rounded-xl p-8 2xl:p-14 flex flex-col relative' style={{}}>
                    <div className='relative mb-10 m-2 parallax-tilt'>
                      <img className='blur-xl absolute top-0 -z-10' src={recipes[0].properties.Image.files[0].file.url} />
                      <img src={recipes[0].properties.Image.files[0].file.url} />
                      <span className='w-full h-full bg-black absolute top-[6%] left-[6%] blur-sm -z-20 rounded-full'></span>
                    </div>
                    <div className='flex flex-col gap-3 parallax-tilt'>
                      <h2 className='font-title font-medium text-blue-100 text-2xl 2xl:text-3xl'>{recipes[0].properties.Nom.title[0].plain_text}</h2>
                      <p className='text-xs font-body font-medium text-[#A2A8BA] flex gap-2'>
                        <span>Dificulté : {recipes[0].properties.Difficulté.multi_select[0].name},</span>
                        <span>Type : {recipes[0].properties['Type de plat'].select.name}</span>
                      </p>
                    </div>
                    <span className='absolute py-1 px-2 top-5 left-5 rounded-sm z-20 bg-[#FDBD84] text-white font-body text-xs 2xl:text-sm'>Nouveau</span>
                  </Tilt>
                </Link>
              </div>

              <div className='grid grid-rows-2 gap-10 col-span-4'>
                <Link href={`/recipe/${recipes[1].id}`} className="hover:scale-105 transition-all">
                  <Tilt className='bg-gradient-to-l from-[#D9D9D9]/10 to-transparent rounded-xl py-6 md:py-0 px-10 h-full grid grid-cols-3 items-center gap-5' style={{}}>
                    <div className='relative parallax-tilt'>
                      <img className='blur-xl absolute top-0 -z-10' src={recipes[1].properties.Image.files[0].file.url} />
                      <img src={recipes[1].properties.Image.files[0].file.url} />
                      <span className='w-full h-full bg-black absolute top-[6%] left-[6%] blur-sm -z-20 rounded-full'></span>
                    </div>
                    <div className='flex flex-col gap-3 col-span-2 parallax-tilt'>
                      <h2 className='font-title font-medium text-blue-100 text-2xl 2xl:text-3xl'>{recipes[1].properties.Nom.title[0].plain_text}</h2>
                      <p className='text-xs font-body font-medium text-[#A2A8BA] flex gap-2'>
                        <span>Dificulté : {recipes[1].properties.Difficulté.multi_select[0].name},</span>
                        <span>Type : {recipes[1].properties['Type de plat'].select.name}</span>
                      </p>
                    </div>
                  </Tilt>
                </Link>

                <Link href={`/recipe/`} className="hover:scale-105 transition-all">
                  <Tilt className='bg-gradient-to-l from-[#D9D9D9]/10 to-transparent rounded-xl py-6 md:py-0 px-10 h-full grid grid-cols-3 items-center gap-8' style={{}}>
                    <div className='relative parallax-tilt flex justify-center'>
                      <div className='w-3/4 aspect-square bg-white/20 rounded-full flex items-center justify-center'>
                        <i className="ri-arrow-right-line ri-3x text-white"></i>
                      </div>
                    </div>
                    <div className='flex flex-col gap-3 col-span-2 parallax-tilt'>
                      <h2 className='font-title font-medium text-blue-100 text-2xl 2xl:text-3xl'>Découvres toutes nos recettes ici</h2>
                    </div>
                  </Tilt>
                </Link>
              </div>
            </div>

          </div>

        </section>



        <div className='px-4 xl:px-0 container mx-auto'>
          <div className="my-24 flex flex-col gap-5">
            <div className='flex flex-col md:flex-row gap-8 justify-between md:items-end mb-5'>
              <div className='flex flex-col gap-3'>
                <span className="font-body font-medium text-[#FDBD84] text-sm uppercase tracking-widest">ACCUEIL</span>
                <h2 className="text-4xl font-title text-blue-100">Nos plats principaux du moment</h2>
              </div>
              <Link href={{ pathname: '/recipe/'}} className="hover:scale-110 transition-all pb-3 cursor-pointer">
                <p className='text-gray uppercase font-body text-xs flex flex-row gap-2 tracking-widest'><i class="ri-external-link-line"></i>Voir toute nos recettes</p>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {categories}
            </div>
          </div>
        </div>


        <div className='bg-black/20 w-full p-20 container mx-auto rounded-2xl mb-20 relative shadow-xl shadow-white/5'>
          <div className="w-full mx-auto flex flex-col gap-5">
            <div className='text-center'>
                <span className="font-body font-medium text-[#FDBD84] text-xs uppercase tracking-widest">A Propos</span>
                <h2 className="text-3xl font-title text-blue-100">Nos ambitions et nos valeurs</h2>
            </div>
            <p className="font-body text-md text-gray text-justify leading-7">Notre blog de recettes écologiques et économiques est né de notre profond engagement envers une alimentation durable et abordable pour tous. Nous croyons fermement que l&apos;écologie et le bien-être ne doivent pas être un luxe, mais accessibles à chacun. Notre mission est de partager des recettes délicieuses et nutritives qui respectent la planète tout en préservant votre portefeuille. Nous promouvons l&apos;utilisation d&apos;ngrédients biologiques, cultivés de manière responsable, et nous encourageons nos lecteurs à privilégier les produits locaux pour réduire leur empreinte carbone. En rejoignant notre communauté, vous découvrirez non seulement comment bien manger pour pas cher, mais aussi comment chaque petit geste compte dans la préservation de notre environnement. Ensemble, nous pouvons faire une différence significative tout en savourant des repas savoureux et bons pour la planète.</p>
            <svg className="absolute right-10 -bottom-10" width="218" height="188" viewBox="0 0 218 188" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.9157 109.019C21.3162 109.101 24.7158 109.228 28.1161 109.322C30.9502 109.401 33.7867 109.488 36.6184 109.632C36.9176 109.647 37.2383 109.584 37.5146 109.7C38.2661 110.016 35.9019 109.939 35.0975 110.072C28.6762 111.127 22.3561 112.772 16.0633 114.407C11.6187 115.561 6.25112 116.246 2.0701 118.239C1.74101 118.396 2.79774 118.383 3.15936 118.337C10.8752 117.351 18.5777 115.804 26.2602 114.657C75.5361 107.303 125.247 99.9604 175.013 96.9192C184.836 96.319 194.714 95.9917 204.557 96.1262C205.122 96.134 205.688 96.14 206.25 96.195C206.489 96.2184 205.841 96.4828 205.602 96.5138C202.983 96.854 200.334 96.9482 197.704 97.1519" stroke="white" stroke-opacity="0.3" stroke-width="3" stroke-linecap="round"/>
              <path d="M80.3054 104.71C84.4185 94.9196 96.2145 65.3397 92.6666 75.3485C89.5272 84.2049 89.4097 94.3432 90.1255 103.594C90.24 105.073 92.0295 124.571 95.3783 123.991C96.8435 123.737 97.5412 118.921 97.6763 118.276C98.8922 112.471 99.1796 106.574 99.4226 100.667C99.6149 95.994 99.5455 91.207 100.009 86.5516C100.221 84.418 100.707 90.7832 101.096 92.8917C101.204 93.4757 102.773 100.157 103.522 99.4088C105.591 97.3428 106.592 92.8081 107.452 90.1155C108.104 88.0773 108.904 82.6674 109.718 87.7791C110.165 90.5848 112.141 96.0794 111.182 98.8501C110.72 100.183 107.555 98.8791 107.066 98.7396C99.3894 96.5498 91.8972 94.1892 83.9842 92.8959C77.4079 91.8211 70.7563 91.2536 64.0928 91.3214C60.8431 91.3545 59.1237 91.5013 56.0254 91.8115C54.898 91.9244 50.8733 92.521 55.0821 91.672C73.5953 87.9376 92.2059 84.6178 110.766 81.1283C135.102 76.5526 159.439 71.6898 184.006 68.4809C191.182 67.5436 198.504 66.6583 205.759 66.7266C207.578 66.7438 210.947 65.7942 211.146 67.6025C211.211 68.2002 210.387 68.5894 209.848 68.8558C208.041 69.7491 206.112 70.3742 204.206 71.0329C181.965 78.7224 158.899 84.1285 136.069 89.7552" stroke="white" stroke-opacity="0.3" stroke-width="3" stroke-linecap="round"/>
            </svg>
          </div>
        </div>


        <div className='container mx-auto mb-28'>
          <div className='flex flex-col md:flex-row gap-8 justify-between md:items-end mb-10'>
            <div className='flex flex-col gap-3'>
              <span className="font-body font-medium text-[#FDBD84] text-sm uppercase tracking-widest">Astuces écologiques</span>
              <h2 className="text-4xl font-title text-blue-100">Nos recettes et astuces écologiques</h2>
            </div>
            <Link href={{ pathname: '/recipe/'}} className="hover:scale-110 transition-all pb-3 cursor-pointer">
              <p className='text-gray uppercase font-body text-xs flex flex-row gap-2 tracking-widest'><i class="ri-external-link-line"></i>Voir toute nos recettes</p>
            </Link>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          {
            blogs.slice(0, limit_size).map(blog => {
              return (
                <CardBlog key={blog.id} blog={blog} />
              )
            })
          }
          </div>
        </div>

        <LegumeSaison data={legumes} />

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

  const databaseRecipes = await notion.databases.retrieve({
    database_id: databaseId
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

  const blog = await notion.databases.query({
    database_id: process.env.NOTION_BIENETRE_DATABASE_ID,
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
  


  /* Légume de saison database */
  const legumeDatabaseId = process.env.NOTION_LEGUME_DATABASE_ID;
  const legumes = await notion.databases.query({
    database_id: legumeDatabaseId,
  })

  return {
    props: {
      databaseRecipes,
      recipes: recipes.results,
      legumes: legumes.results,
      blogs: blog.results
    }
  }
}
import Layout from "@/components/Layout";
import Nav from "@/components/Nav";
import Head from "next/head";
import { Client } from "@notionhq/client";
import Link from "next/link";
import Card from "@/components/Card";
import { useState } from "react";
import Pagination from "@/components/Pagination";
import { paginate } from "@/components/paginate";
import CardBlog from "@/components/CardBlog";

export default function Articles({ articles, recipes }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedPosts = paginate(articles, currentPage, pageSize);

  console.log(paginatedPosts)

  return (
    <>
      <Layout>
        <Head>
          <title>Nos recettes culinaires - Totor & Jadou</title>
          <meta
            name="description"
            content="Objectif zéro déchets, recette, soin beauté, produits naturels, plantes d'intérieur... Un quotidien qui nous rends la vie plus agréable."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav recipe={recipes} />

        <div className="px-4 xl:px-0 container mx-auto">
          <div className="my-24 flex flex-col gap-5">
            <div className="flex flex-col md:flex-row gap-8 justify-between md:items-center">
              <div className='flex flex-col gap-3'>
                <span className="font-body font-medium text-[#FDBD84] text-sm uppercase tracking-widest">Astuces écologiques</span>
                <h2 className="text-4xl font-title text-blue-100">Nos recettes et astuces écologiques</h2>
              </div>
            </div>
            <hr className="opacity-5 mb-10 bg-white h-1 rounded-full" />
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">
              {paginatedPosts.map((article) => {
                return <CardBlog key={article.id} blog={article} />;
              })}
            </div>
          </div>
          <Pagination
            items={articles.length}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={onPageChange}
          />
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const notion = new Client({
    auth: process.env.NOTION_API_KEY,
  });

  const databaseId = process.env.NOTION_BIENETRE_DATABASE_ID;
  const databaseIdRecipe = process.env.NOTION_DATABASE_ID;
  const articles = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: "Dernière modification",
        direction: "descending",
      },
    ],
    filter: {
      property: "Totor & Jadou",
      status: {
        equals: "Publié",
      },
    },
  });

  const recipes = await notion.databases.query({
    database_id: databaseIdRecipe,
    sorts: [
      {
        property: "Dernière modification",
        direction: "descending",
      },
    ],
    filter: {
      property: "Totor & Jadou",
      status: {
        equals: "Publié",
      },
    },
  });

  return {
    props: {
      articles: articles.results,
      recipes: recipes.results
    },
  };
}

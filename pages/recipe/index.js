import Layout from "@/components/Layout";
import Nav from "@/components/Nav";
import Head from "next/head";
import { Client } from "@notionhq/client";
import Link from "next/link";
import Card from "@/components/Card";
import { useState } from "react";
import Pagination from "@/components/pagination";
import { paginate } from "@/components/paginate";

export default function Recipe({ recipes }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 16;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedPosts = paginate(recipes, currentPage, pageSize);

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
              <h2 className="text-4xl font-title text-white">
                Nos recettes culinaires
              </h2>
              <div></div>
            </div>
            <hr className="opacity-5 mb-10 bg-white h-1 rounded-full" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {paginatedPosts.map((recipe) => {
                return <Card key={recipe.id} recipe={recipe} />;
              })}
            </div>
          </div>
          <Pagination
            items={recipes.length}
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

  const databaseId = process.env.NOTION_DATABASE_ID;
  const recipes = await notion.databases.query({
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

  return {
    props: {
      recipes: recipes.results,
    },
  };
}

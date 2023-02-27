const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export default async(req, res) => {

    const databaseId = process.env.NOTION_COMMENTAIRE_DATABASE_ID;
    const recipes = await notion.databases.query({
        database_id: databaseId,
    });

    res.status(200).json({ recipes });
};
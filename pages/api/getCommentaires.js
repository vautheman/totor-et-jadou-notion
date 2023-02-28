const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseComments = process.env.NOTION_COMMENTAIRE_DATABASE_ID;

/* const { recipeId } = JSON.parse(req.body); */
export default async(req, res) => {
    const comments = await notion.databases.query({
        database_id: databaseComments,
        /* filter: {
            property: "Recipe",
            "relation": {
                "contains": recipeId
            }
        } */
    })

    res.status(200).json({ comments });
}
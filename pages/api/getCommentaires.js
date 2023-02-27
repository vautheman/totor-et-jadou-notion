const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseComments = process.env.NOTION_COMMENTAIRE_DATABASE_ID;

const { blockId } = JSON.parse(req.body);
export default async(req, res) => {
    const comments = await notion.databases.query({
        database_id: process.env.NOTION_COMMENTAIRE_DATABASE_ID,
        filter: {
            property: "Recipe",
            "relation": {
                "contains": blockId
            }
        }
    })

    res.status(200).json({ comments });
}
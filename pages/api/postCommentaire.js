const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseComments = process.env.NOTION_COMMENTAIRE_DATABASE_ID;

export default async(req, res) => {
    /* Get All Comments */
    /* const databaseId = process.env.NOTION_COMMENTAIRE_DATABASE_ID;
      const recipes = await notion.databases.query({
          database_id: databaseId,
      }); */

    // Post comments

    const { name, msg, recipeId, ip } = JSON.parse(req.body);
    await notion.pages.create({
        parent: {
            database_id: databaseComments,
        },
        properties: {
            Recipe: {
                relation: [{
                    id: recipeId,
                }, ],
            },
            Commentaire: {
                rich_text: [{
                    text: {
                        content: msg,
                    },
                }, ],
            },
            Nom: {
                title: [{
                    text: {
                        content: name,
                    },
                }, ],
            },
            IP: {
                rich_text: [{
                    text: {
                        content: ip,
                    }
                }]
            }
        },
    });

    res.status(200).json({ msg: "Ton message est en cours de validation. Merci pour ton soutien !" });
};
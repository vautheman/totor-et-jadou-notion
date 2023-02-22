const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export default async(req, res) => {
    /* const notion = new Client({
        auth: process.env.NOTION_API_KEY
    })

    const blockId = req;
    const recipe = await notion.blocks.children.list({
        block_id: blockId
    })

    res.status(200).json({ recipe }); */
    res.status(200).json({ "nom": "test" })
}
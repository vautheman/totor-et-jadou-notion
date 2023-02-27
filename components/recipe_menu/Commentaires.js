import { Client } from '@notionhq/client'

export default function Commentaires({ commentaires, recipeId }) {
    //console.log(commentaires)

    const postComment = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const msg = event.target.commentaire.value;
        const databaseComments = process.env.NOTION_COMMENTAIRE_DATABASE_ID;

        const notion = new Client({ auth: process.env.NOTION_API_KEY });
        
            const response = await notion.pages.create({
                "parent": {
                    "type": "database_id",
                    "database_id": databaseComments
                },
                "properties": {
                    "Recipe": {
                        "relation": [{
                            "id": recipeId
                        }]
                    },
        
                    "Commentaire": {
                        "rich_text": [{
                            "text": {
                                "content": msg
                            }
                        }]
                    },
        
                    "Nom": {
                        "title": [{
                            "text": {
                                "content": name
                            }
                        }]
                    }
                }
            })

            return response
    }

    return (
        <>
            <h3 className='font-title text-2xl 2xl:text-3xl'>Commentaires</h3>
            <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col gap-3">
                    {commentaires.map(commentaire => {
                        return (
                            <>
                                <div className="grid gap-2">
                                    <div className="flex flex-row gap-3 items-center">
                                        <span className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center"><i class="ri-user-line ri-lg text-white"></i></span>
                                        {commentaire.properties.Nom.title[0].plain_text}
                                    </div>
                                    <p className="">{commentaire.properties.Commentaire.rich_text[0].plain_text}</p>
                                </div>
                                <hr />
                            </>
                        )
                    })}
                </div>

                <div>
                    <form onSubmit={postComment} className="flex flex-col gap-2 font-body font-light">
                        <h4>Ton avis nous intéresse !</h4>
                        <input className="border w-full h-10 rounded-md px-3" type="text" id='name' placeholder="Nom" />
                        <textarea className="border w-full h-20 rounded-md p-3" name="commentaire" id="commentaire" cols="30" rows="10"></textarea>
                        <button className="bg-blue-50 p-3 rounded-md">Poster</button>
                    </form>
                </div>
            </div>
        </>
    )
}


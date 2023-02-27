import { Client } from '@notionhq/client'
import { useEffect, useState } from 'react';

export default function Commentaires({ commentaires, recipeId, ip }) {
    // Scan IP
    const [IP, setIP] = useState(true);
    const [textMsg, setTextMsg] = useState();

    //console.log(commentaires)
    const postComment = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const msg = event.target.commentaire.value;
        if (name && msg) {
            if (IP == false) {
                const res = await fetch('http://localhost:3000/api/postCommentaire', {
                    method: 'POST',
                    body: JSON.stringify({ name, msg, recipeId, ip }),
                });
                setIP(true)
                setTextMsg('Ton message est en cours de validation. Merci pour ton soutien !')
            }
        }
    }


    useEffect(() => {
        const tabCom = [];
        commentaires.map(commentaire => {
            tabCom.push(commentaire.properties.IP.rich_text[0].plain_text)
        })
        const ipCompare = tabCom.includes(ip);
        setIP(ipCompare);
    }, [])

    return (
        <>
            <h3 className='font-title text-2xl 2xl:text-3xl'>Commentaires</h3>
            <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col gap-3">
                    {commentaires.map((commentaire, index) => {
                        if (commentaire.properties["Validé ?"].checkbox == true) {
                            return (
                                <>
                                    <div key={index} className="grid gap-2">
                                        <div className="flex flex-row gap-3 items-center">
                                            <span className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center"><i className="ri-user-line ri-lg text-white"></i></span>
                                            {commentaire.properties.Nom.title[0].plain_text}
                                        </div>
                                        <p className="">{commentaire.properties.Commentaire.rich_text[0].plain_text}</p>
                                    </div>
                                    <hr />
                                </>
                            )
                        }
                    })}
                </div>

                {IP == false && (
                    <>
                        <div>
                            <form onSubmit={postComment} className="flex flex-col gap-2 font-body font-light">
                                <h4>Ton avis nous intéresse !</h4>
                                <input className="border w-full h-10 rounded-md px-3" type="text" id='name' placeholder="Nom" />
                                <textarea className="border w-full h-20 rounded-md p-3" name="commentaire" id="commentaire" cols="30" rows="10"></textarea>
                                <button className="bg-blue-50 p-3 rounded-md">Poster</button>
                            </form>
                        </div>
                    </>
                )}

                {textMsg && (
                    <>
                        <p>{textMsg}</p>
                    </>
                )}
            </div>
        </>
    )
}
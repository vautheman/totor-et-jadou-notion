import { Client } from '@notionhq/client'
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Commentaires({ commentaires, recipeId, ip }) {

    const [selectedId, setSelectedId] = useState(null)

    // Scan IP
    const [IP, setIP] = useState(true); // Etat comparatif entre l'ip du client et les ip présentent dans la bdd
    const [textMsg, setTextMsg] = useState();

    //console.log(commentaires)
    const postComment = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const msg = event.target.commentaire.value;

        // Récupère via l'api next tout les commentaires existant
        const res = await fetch("/api/getCommentaires", {
            method: "POST",
            body: {},
        })
        const data = await res.json();

        // Vérifie toutes les adresses ip des derniers commentaires
        const IpTab = []
        data.comments.results.map(comment => {
            IpTab.push(comment.properties.IP.rich_text[0].plain_text)
        })

        // Compare l'adresse ip des commentaires avec l'ip du client
        if (IpTab.includes(ip)) { // Si l'ip existe déjà, on affiche un message d'erreur
            setIP(true)
            setTextMsg("Tu as déjà posté un commentaire qui est en cours de validation")
        } else { // Sinon on poste le commentaire
            if (name && msg) {
                if (IP == false) {
                    const res = await fetch('/api/postCommentaire', {
                        method: 'POST',
                        body: JSON.stringify({ name, msg, recipeId, ip }),
                    });
                    setIP(true)
                    setTextMsg('Ton message est en cours de validation. Merci pour ton soutien !')
                }
            }
        }
    }

    useEffect(() => {
        // Au chargement de la page, on vérifi si l'ip du client est déjà présente dans la bdd
        const tabCom = [];
        commentaires.map(commentaire => {
            tabCom.push(commentaire.properties.IP.rich_text[0].plain_text)
        })

        const ipCompare = tabCom.includes(ip); // Si elle existe déjà on change l'état de IP avec setIP sur true sinon, on change l'état sur true.
        setIP(ipCompare);
    }, [])

    return (
        <>
            <h3 className='font-title text-2xl 2xl:text-3xl'>Commentaires</h3>
            <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col gap-3">
                    {commentaires.map((commentaire, index) => { // Parcour tout les commentaires existant et les affiches
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

                {IP == false && ( // Si l'ip n'est pas présente dans la bdd, le client peut poster un commentaire sinon on affiche rien
                    <>
                        <div>
                            <AnimatePresence>
                                {selectedId == true && (
                                    <motion.div animate={{ opacity: 1 }} exit={{ opacity: 0 }} layoutId={selectedId}>
                                        <form onSubmit={postComment} className="flex flex-col gap-2 font-body">
                                            <div className='flex flex-row justify-between items-center'>
                                                <h4 className='text-center'>Ton avis nous intéresse !</h4>
                                                <i onClick={() => setSelectedId()} className="ri-close-circle-fill ri-2x cursor-pointer"></i>
                                            </div>
                                            <input className="border font-light w-full h-10 rounded-md px-3" type="text" id='name' placeholder="Nom" />
                                            <textarea className="border font-light w-full h-20 rounded-md p-3" name="commentaire" id="commentaire" cols="30" rows="10"></textarea>
                                            <button className="bg-[#161E2F] text-white p-3 rounded-md">Poster</button>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            {selectedId == null && (
                                <motion.div layoutId={true} onClick={() => setSelectedId(true)}>
                                    <motion.div className='bg-[#161E2F] text-white font-body p-5 rounded-xl text-lg cursor-pointer hover:scale-110 active:scale-95 transition-all'>
                                        <p className='text-center'>Poster un avis</p>
                                    </motion.div>
                                </motion.div>
                            )}
                        </div>
                    </>
                )}

                {textMsg && ( // Affiche un message d'erreur si il y en a un
                    <>
                        <p>{textMsg}</p>
                    </>
                )}
            </div>
        </>
    )
}
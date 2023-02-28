import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, EmailShareButton, EmailIcon } from "react-share";
export default function Share({ id, msg }) {
    return (
        <div className="grid gap-5">

            <EmailShareButton body={`https://totor-et-jadou.fr/recipe/${id}`} subject={msg}>
                <div className="bg-[#808080]/20 rounded-lg p-5 flex flex-row items-center gap-5 hover:scale-110 active:scale-95 transition-all cursor-pointer">
                    <EmailIcon size={50} round />
                    <p className="font-body font-light">Partager par Mail</p>
                </div>
            </EmailShareButton>

            <FacebookShareButton url={`https://totor-et-jadou.fr/recipe/${id}`} quote={msg}>
                <div className="bg-[#445E99]/20 rounded-lg p-5 flex flex-row items-center gap-5 hover:scale-110 active:scale-95 transition-all cursor-pointer">
                    <FacebookIcon size={50} round />
                    <p className="font-body font-light">Partager sur Facebook</p>
                </div>
            </FacebookShareButton >


            <TwitterShareButton url={`https://totor-et-jadou.fr/recipe/${id}`} quote={msg}>
                <div className="bg-[#43ACE0]/20 rounded-lg p-5 flex flex-row items-center gap-5 hover:scale-110 active:scale-95 transition-all cursor-pointer">
                    <TwitterIcon size={50} round />
                    <p className="font-body font-light">Partager sur Twitter</p>
                </div>
            </TwitterShareButton>

            <WhatsappShareButton url={`https://totor-et-jadou.fr/recipe/${id}`} quote={msg}>
                <div className="bg-[#37D16A]/20 rounded-lg p-5 flex flex-row items-center gap-5 hover:scale-110 active:scale-95 transition-all cursor-pointer">
                    <WhatsappIcon size={50} round />
                    <p className="font-body font-light">Partager sur Whatsapp</p>
                </div>
            </WhatsappShareButton>

        </div >
    );
}
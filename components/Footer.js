import Image from "next/image";
import Link from "next/link";

import Logo from "public/img/logo-totor-et-jadou-white.png";

export default function Footer() {
    return (
        <>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#161E2F" fill-opacity="1" d="M0,320L48,272C96,224,192,128,288,122.7C384,117,480,203,576,218.7C672,235,768,181,864,170.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
            <footer className="bg-[#161E2F] p-2 mt-32">
                <div className="py-20">
                    <Image src={Logo} width={200} className="mx-auto" />
                    <div className="w-full text-center mt-10 max-w-2xl mx-auto flex flex-col gap-5">
                        <div>
                            <span className="font-body font-medium text-[#FDBD84] text-xs uppercase tracking-widest">Communautée</span>
                            <h2 className="text-3xl font-title text-blue-100">Suivez nous sur les réseaux</h2>
                        </div>
                        <p className="font-body text-sm text-gray">Rejoignez-nous sur les réseaux sociaux pour partager, apprendre et grandir ensemble dans notre quête de recettes écologiques et économiques. Votre voix compte, et nous sommes impatients de vous accueillir dans notre communauté engagée !</p>
                        <div className="flex w-fit gap-6 mx-auto">
                            <div className="flex flex-col">
                                <i className="ri-instagram-line text-blue-100 ri-2x"></i>
                                <p className="text-body text-blue-100">Instagram</p>
                            </div>
                            <div className="flex flex-col">
                                <i className="ri-pinterest-line text-blue-100 ri-2x"></i>
                                <p className="text-body text-blue-100">Pinterest</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Link href={"https://autheman-victor.fr"} target='_blank'>
                    <p className="text-center text-white/20 text-xs font-body font-light">Designé et développé par @victor autheman, Designer et créateur web front-end</p>
                </Link>
            </footer>

        </>
    )
}
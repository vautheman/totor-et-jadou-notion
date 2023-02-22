import Link from "next/link";

export default function Footer() {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#161E2F" fill-opacity="1" d="M0,320L48,272C96,224,192,128,288,122.7C384,117,480,203,576,218.7C672,235,768,181,864,170.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <footer className="bg-[#161E2F] p-2">
                <div className="py-20">

                </div>
                <Link href={"https://autheman-victor.fr"} target='_blank'>
                    <p className="text-center text-white/20 text-xs font-body font-light">Designé et développé par @victor autheman, Designer et créateur web front-end</p>
                </Link>
            </footer>

        </>
    )
}
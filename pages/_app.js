import InitialTransition from "@/components/InitialTransition";
import "@/styles/globals.css";
import { Poppins } from "@next/font/google";
import { Playfair_Display } from "@next/font/google";
import { AnimatePresence } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "300"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["500"],
});

export default function App({ Component, pageProps, router }) {

  return (
    <>
      <style jsx global>
        {`
          :root {
            --poppins-font: ${poppins.style.fontFamily};
            --playfair-display-font: ${playfairDisplay.style.fontFamily};
          }
        `}
      </style>
      <AnimatePresence /* onExitComplete={() => window.scrollTo(0, 0)} */ mode="wait">
        <InitialTransition/>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  );
}

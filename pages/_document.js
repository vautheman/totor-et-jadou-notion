import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/vercel.svg"></link>
        <meta name="theme-color" content="#161E2F" />
      </Head>
      <body className='scrollbar-custom overflow-x-hidden'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

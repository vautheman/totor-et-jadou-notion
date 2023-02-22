import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
      <Head/>
      <body className='scrollbar-custom overflow-x-hidden'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

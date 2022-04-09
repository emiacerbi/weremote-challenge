import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin='true' href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400&family=Source+Sans+Pro:wght@300;400;700&display=swap" rel="stylesheet" />

        <link
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          rel="stylesheet"
          type="text/css"
        />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
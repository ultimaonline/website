// ultimaonline.dev

import Document, { Head, Html, Main, NextScript } from 'next/document';

import { title, description, keywords, url } from '../constants';

class MyDocument extends Document {
  static async getInitialProps(...args) {
    const initialProps = await Document.getInitialProps(...args);

    return {
      ...initialProps
    };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* meta tags */}
          <meta charSet='utf-8' />
          <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
          <meta httpEquiv="x-dns-prefetch-control" content="on" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
          <meta httpEquiv="cleartype" content="on" />
          <meta name='language' content='en' />

          {/* favicon */}
          <link rel="icon" type="image/png" href="/icons/favicon.png" />

          {/* seo */}
          <meta name="application-name" content={title} />
          <meta name='description' content={description} />
          <meta name='keywords' content={keywords} />
          <meta name='robots' content='index, follow' />

          {/* facebook open graph */}
          <meta name='og:title' content={title} />
          <meta name='og:type' content='site' />
          <meta name='og:url' content={url} />
          <meta name='og:image' content="/img/poster.jpg" />
          <meta name='og:site_name' content={title} />
          <meta name='og:description' content={description} />

          {/* twitter card */}
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:site' content='@ultimaonlinedev' />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:image" content="/img/poster.jpg" />

          {/* google tag manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${process.env.GOOGLE_TAG_MANAGER}');
              `
            }}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

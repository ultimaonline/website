// ultimaonline.dev

import App from 'next/app';
import Helmet from 'react-helmet';

import '../styles/style.css';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Helmet
          // base
          // bodyAttributes
          link={[
            {
              rel: 'icon',
              type: 'image/png',
              href: '/favicon.png'
            }
          ]}
          htmlAttributes={{
            lang: 'en'
          }}
          meta={[
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1'
            },
            {
              property: 'og:title',
              content: 'ultimaonline.dev'
            },
            {
              property: 'og:type',
              content: 'website'
            },
            {
              property: 'og:image',
              content: '/img/poster.jpg'
            },
            {
              property: 'og:url',
              content: 'https://ultimaonline.dev/'
            }
          ]}
          // noscript
          // script
          // style
          title={'ultimaonline.dev'}
        />

        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;

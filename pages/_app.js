// ultimaonline.dev

import App, { Container } from 'next/app';
import React from 'react';
import Helmet from 'react-helmet';
import '../assets/scss/style.scss';
import { homepage, name as title } from '../package.json';

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
      <Container>
        <Helmet
          // base
          // bodyAttributes
          link={[
            {
              rel: 'icon',
              type: 'image/png',
              href: '/static/favicon.png'
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
              content: title
            },
            {
              property: 'og:type',
              content: 'website'
            },
            {
              property: 'og:image',
              content: '/static/img/poster.jpg'
            },
            {
              property: 'og:url',
              content: homepage
            }
          ]}
          // noscript
          // script
          // style
          title={title}
        />

        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;

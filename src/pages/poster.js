// ultimaonline.dev

import Head from 'next/head';

import { title } from '../constants';

const Poster = () => {
  return (
    <>
      <Head>
        {/* meta tags */}
        <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1.0' />

        {/* title */}
        <title itemprop="name">{title}</title>
      </Head>

      <div className="poster"></div>
    </>
  )
};

export default Poster;

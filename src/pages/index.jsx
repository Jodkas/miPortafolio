import * as React from 'react';
import nexaLight from '../assets/fonts/Nexa-ExtraLight.woff2';
import nexa from '../assets/fonts/Nexa-Heavy.woff2';

const IndexPage = () => {
  return <main></main>;
};

export default IndexPage;

export const Head = () => (
  <>
    <html lang="es" />
    <title>Mi portafolio - Lucas Cardozo</title>
    <meta name="description" content="..." />
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1, minimum-scale=1"
    />
    <meta name="robots" content="index, follow" />
    <meta name="language" content="Spanish" />
    <meta name="author" content="Lucas Iván Cardozo" />
    <link rel="canonical" href="http://miportafolio.com" />
    <link rel="icon" href="/favicon.ico" type="image/ico"></link>
    <link
      rel="preload"
      href={nexaLight}
      as="font"
      type="font/woff2"
      crossorigin="anonymous"
    ></link>
    <link
      rel="preload"
      href={nexa}
      as="font"
      type="font/woff2"
      crossorigin="anonymous"
    ></link>
  </>
);

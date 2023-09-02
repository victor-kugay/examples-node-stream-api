import React from 'react';

import type {AppProps} from 'next/app';

import {DIContainer} from '../src/ui/common/DiContainer';

export default function App({Component, pageProps}: AppProps): JSX.Element {
  return (
    <>
      <DIContainer>
        <Component {...pageProps} />
      </DIContainer>
    </>
  );
}

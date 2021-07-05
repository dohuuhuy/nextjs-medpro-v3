import { DefaultSeo } from 'next-seo';
import React from 'react';
import 'setupApp';
import '../assets/styles/antd.less';
import SEO from '../next-seo.config';

const MyApp = ({ Component, pageProps }: any) => {
  const LayoutWrapper = Component.Layout ? Component.Layout : React.Fragment;
  return (
    <>
      <DefaultSeo {...SEO} />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </>
  );
};

export default MyApp;

import React from 'react'
import 'public/assets/styles/app.less'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import { wrapper } from './../src/store/rootStore'
import '@tntran496/ts-ant-demo/libs/index.css'

const MyApp = ({ Component, pageProps }: any) => {
  const LayoutWrapper = Component.Layout || React.Fragment
  return (
    <>
      <DefaultSeo {...SEO} />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </>
  )
}
export default wrapper.withRedux(MyApp)

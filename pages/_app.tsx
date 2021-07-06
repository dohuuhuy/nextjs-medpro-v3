import React from 'react'
import '/public/assets/styles/app.less'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

const MyApp = ({ Component, pageProps }: any) => {
  const LayoutWrapper = Component.Layout ? Component.Layout : React.Fragment
  return (
    <>
      <DefaultSeo {...SEO} />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </>
  )
}
export default MyApp

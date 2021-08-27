import '@assets/styles/app.less'
import '@medpro/booking-libs/libs/index.css'
import { wrapper } from '@store/rootStore'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import { AppProps } from 'next/app'
import React, { Fragment } from 'react'
import { Page } from 'type/page'

type Props = AppProps & {
  Component: Page
  [T: string]: any
}

const MyApp = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout ?? ((page) => page)
  const LayoutWrapper = Component.Layout ?? Fragment

  return (
    <LayoutWrapper>
      <DefaultSeo {...SEO} />
      {getLayout(<Component {...pageProps} />)}
    </LayoutWrapper>
  )
}

export default wrapper.withRedux(MyApp)

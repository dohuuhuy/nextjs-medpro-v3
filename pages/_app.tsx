import '@assets/styles/app.less'
import '@medpro/booking-libs/libs/index.css'
import { Information } from '@store/interface'
import { wrapper } from '@store/rootStore'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import { AppProps } from 'next/app'
import React, { Fragment } from 'react'
import { appCtrl } from 'src/containers/app'
import { Page } from 'type/page'
type Props = AppProps & {
  Component: Page
  [T: string]: any
  appProps: Information
}

const MyApp = ({ Component, pageProps, appProps }: Props) => {
  const getLayout = Component.getLayout ?? ((page) => page)
  const LayoutWrapper = Component.Layout ?? Fragment

  return (
    <LayoutWrapper appProps={appProps}>
      <DefaultSeo {...SEO} />
      {getLayout(<Component {...pageProps} partnerId={appProps.partnerId} />)}
    </LayoutWrapper>
  )
}

MyApp.getInitialProps = async (ctx: any) => {
  const appProps = await appCtrl(ctx)
  return { appProps }
}

export default wrapper.withRedux(MyApp)

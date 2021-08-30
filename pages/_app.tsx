import '@assets/styles/app.less'
import '@medpro/booking-libs/libs/index.css'
import { wrapper } from '@store/rootStore'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import { AppProps } from 'next/app'
import React, { Fragment } from 'react'
import { Page } from 'type/page'
// import * as ac from '@actionStore/rootAction'
// import { END } from 'redux-saga'

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

// MyApp.getInitialProps = wrapper.getInitialPageProps(
//   (store: SagaStore) => async (ctx: any) => {
//     // const host = ctx?.req?.headers.host
//     // await store.dispatch(ac.getHospitalDetails(host))
//     // store.dispatch(END)
//     // await (store as SagaStore).sagaTask?.toPromise()
//   }
// )

export default wrapper.withRedux(MyApp)

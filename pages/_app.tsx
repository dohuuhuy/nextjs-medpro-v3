import '@assets/styles/app.less'
import '@medpro/booking-libs/libs/index.css'
import { SagaStore, wrapper } from '@store/rootStore'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import { AppProps } from 'next/app'
import React, { Fragment } from 'react'
import { END } from 'redux-saga'
import { Page } from 'type/page'
import * as ac from '@actionStore/rootAction'
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

MyApp.getInitialProps = wrapper.getInitialPageProps(
  (store: SagaStore) => async (context: any) => {
    // 1. Wait for all page actions to dispatch
    const pageProps = {
      ...(context.Component.getInitialProps
        ? await context.Component.getInitialProps(context)
        : {})
    }

    const host = context.ctx?.req?.headers.host
    await store.dispatch(ac.getHospitalDetails(host))

    // 2. Stop the saga if on server
    if (context.ctx.req) {
      store.dispatch(END)
      await store.sagaTask?.toPromise()
    }

    // 3. Return props
    return {
      pageProps
    }
  }
)

export default wrapper.withRedux(MyApp)

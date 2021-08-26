import * as ac from '@actionStore/rootAction'
import '@assets/styles/app.less'
import '@medpro/booking-libs/libs/index.css'
import { persistor, SagaStore, wrapper } from '@store/rootStore'
import { checkVersion, setVersion } from '@store/rootStore/handlerStore'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import { AppProps } from 'next/app'
import React, { Fragment, useEffect } from 'react'
import { Page } from 'type/page'

type Props = AppProps & {
  Component: Page
  [x: string]: any
}

const MyApp = ({ Component, pageProps, stateSever }: Props) => {
  const getLayout = Component.getLayout ?? ((page) => page)
  const LayoutWrapper = Component.Layout ?? Fragment

  useEffect(() => {
    setVersion()
    checkVersion(persistor)
  })

  return (
    <LayoutWrapper state={stateSever}>
      <DefaultSeo {...SEO} />
      {getLayout(<Component {...pageProps} />)}
    </LayoutWrapper>
  )
}

MyApp.getInitialProps = wrapper.getInitialPageProps(
  (store: SagaStore) => async () => {
    store.dispatch(ac.getHospitalDetails('medpro'))

    const state = store.getState()

    return { stateSever: state }
  }
)

export default wrapper.withRedux(MyApp)

import * as ac from '@actionStore/rootAction'
import '@assets/styles/app.less'
import '@medpro/booking-libs/libs/index.css'
import { AppState, Information } from '@store/interface'
import { persistor, wrapper } from '@store/rootStore'
import { checkVersion, setVersion } from '@store/rootStore/handlerStore'
import { check } from '@utils/checkValue'
import * as gtag from '@utils/gtag'
import { Page } from '@utils/type/page'
import { AnimatePresence } from 'framer-motion'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import { AppProps } from 'next/app'
// import NextNProgress from 'nextjs-progressbar'
import React, { useEffect } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { appCtrl } from 'src/containers/app'

type Props = AppProps & {
  Component: Page
  appProps: Information
}

const MyApp = ({ Component, pageProps, appProps, router }: Props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  const partnerId = useSelector(
    (state: AppState) => state.totalDataReducer.partnerId
  )

  useEffect(() => {
    setVersion()
    checkVersion(persistor)
    check(partnerId) && dispatch(ac.SetParnerId(appProps?.partnerId))
  })

  const store: any = useStore()
  const lod = (
    <PersistGate persistor={store.persistor}>
      {/* <NextNProgress height={1} color='#0352cc' /> */}
      <DefaultSeo {...SEO} />
      <Component {...pageProps} key={router.asPath} />
    </PersistGate>
  )

  const Layout = Component?.Layout

  const x = Layout ? <Layout appProps={appProps}>{lod}</Layout> : lod

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      {x}
    </AnimatePresence>
  )
}

MyApp.getInitialProps = async (ctx: any) => {
  const appProps = await appCtrl(ctx)
  return { appProps }
}

export default wrapper.withRedux(MyApp)

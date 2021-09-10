import * as ac from '@actionStore/rootAction'
import '@assets/styles/app.less'
import '@medpro/booking-libs/libs/index.css'
import { AppState, Information } from '@store/interface'
import { persistor, wrapper } from '@store/rootStore'
import { checkVersion, setVersion } from '@store/rootStore/handlerStore'
import { check } from '@utils/checkValue'
import * as gtag from '@utils/gtag'
import { Page } from '@utils/type/page'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { appCtrl } from 'src/containers/app'

type Props = AppProps & {
  Component: Page
  appProps: Information
}

const MyApp = ({ Component, pageProps, appProps }: Props) => {
  const router = useRouter()
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
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </PersistGate>
  )

  const Layout = Component?.Layout
  return Layout ? <Layout appProps={appProps}>{lod}</Layout> : lod
}

MyApp.getInitialProps = async (ctx: any) => {
  const appProps = await appCtrl(ctx)
  return { appProps }
}

export default wrapper.withRedux(MyApp)

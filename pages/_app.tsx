import * as ac from '@actionStore/rootAction'
import '@assets/styles/app.less'
import { OnTop } from '@components/atoms/OnTop'
// import '@medpro/booking-libs/libs/index.css'
import { AppState, Information } from '@store/interface'
import { persistor, wrapper } from '@store/rootStore'
import { checkVersion, setVersion } from '@store/rootStore/handlerStore'
import { check } from '@utils/checkValue'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { appCtrl } from 'src/containers/app'
import { Page } from 'type/page'

type Props = AppProps & {
  Component: Page
  appProps: Information
}

const MyApp = ({ Component, pageProps, appProps }: Props) => {
  const dispatch = useDispatch()

  const partnerId = useSelector((state: AppState) => state.total.partnerId)

  useEffect(() => {
    setVersion()
    checkVersion(persistor)
    check(partnerId) && dispatch(ac.SetParnerId(appProps?.partnerId))
  })

  const store: any = useStore()
  const lod =
    typeof window !== 'undefined' ? (
      <PersistGate persistor={store.persistor}>
        <Component {...pageProps} appProps={appProps} />
      </PersistGate>
    ) : (
      <Component {...pageProps} appProps={appProps} />
    )

  const Layout = Component?.Layout

  const x = Layout ? <Layout appProps={appProps}>{lod}</Layout> : lod

  return (
    <div>
      <DefaultSeo {...SEO} />
      {x}
      <OnTop />
    </div>
  )
}

// MyApp.getInitialProps = async (ctx: any) => {
//   const appProps = await appCtrl(ctx)
//   return { appProps }
// }

export default wrapper.withRedux(MyApp)

import { SetParnerId } from '@actionStore/rootAction'
import { OnTop } from '@components/atoms/OnTop'
import { wrapper } from '@store/rootStore'
import 'antd/dist/antd.css'
import '@assets/styles/app.less'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import App, { AppProps } from 'next/app'
import React from 'react'
import { useDispatch, useStore } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { appCtrl } from 'src/containers/app'
import { Page } from 'type/page'

type Props = AppProps & {
  Component: Page
  app: any
}

const MyApp = ({ Component, pageProps, app }: Props) => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(SetParnerId(app?.partnerId))
  })

  const store: any = useStore()
  const lod =
    typeof window !== 'undefined' ? (
      <PersistGate persistor={store.persistor}>
        <Component {...pageProps} />
      </PersistGate>
    ) : (
      <Component {...pageProps} />
    )

  const Layout = Component?.Layout

  const x = Layout ? <Layout appProps={app}>{lod}</Layout> : lod

  // console.log(
  //   '%cDừng lại, đây là tính năng của nhà phát triển Medpro!',
  //   'background: red; color: white; font-size: 32px'
  // )

  return (
    <>
      <DefaultSeo {...SEO} />
      {x}
      <OnTop />
    </>
  )
}

MyApp.getInitialProps = async (ctx: any) => {
  const appProps = await App.getInitialProps(ctx)
  const app = await appCtrl(ctx)

  return { ...appProps, app }
}

export default wrapper.withRedux(MyApp)

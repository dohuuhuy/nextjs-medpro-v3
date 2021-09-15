import * as ac from '@actionStore/rootAction'
import { ArrowUpOutlined } from '@ant-design/icons'
import '@assets/styles/app.less'
// import '@medpro/booking-libs/libs/index.css'
import { AppState, Information } from '@store/interface'
import { persistor, wrapper } from '@store/rootStore'
import { checkVersion, setVersion } from '@store/rootStore/handlerStore'
import { check } from '@utils/checkValue'
import { GA_TRACKING_ID } from '@utils/gtag'
import { Page } from '@utils/type/page'
import { BackTop } from 'antd'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import { AppProps } from 'next/app'
// import NextNProgress from 'nextjs-progressbar'
import React, { useEffect } from 'react'
import TagManager from 'react-gtm-module'
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
    TagManager.initialize({ gtmId: GA_TRACKING_ID })
  }, [])

  const partnerId = useSelector((state: AppState) => state.total.partnerId)

  useEffect(() => {
    setVersion()
    checkVersion(persistor)
    check(partnerId) && dispatch(ac.SetParnerId(appProps?.partnerId))
  })

  const store: any = useStore()
  const lod = (
    <PersistGate persistor={store.persistor}>
      {/* <NextNProgress height={1} color='#0352cc' /> */}
      <Component {...pageProps} key={router.asPath} />
    </PersistGate>
  )

  const Layout = Component?.Layout

  const x = Layout ? <Layout appProps={appProps}>{lod}</Layout> : lod

  return (
    <>
      <DefaultSeo {...SEO} />
      {x}
      <BackTop>
        <div
          style={{
            height: 40,
            width: 40,
            lineHeight: '40px',
            borderRadius: 4,
            backgroundColor: '#1088e9',
            color: '#fff',
            textAlign: 'center',
            fontSize: 14
          }}
        >
          <ArrowUpOutlined />
        </div>
      </BackTop>
    </>
  )
}

MyApp.getInitialProps = async (ctx: any) => {
  const appProps = await appCtrl(ctx)
  return { appProps }
}

export default wrapper.withRedux(MyApp)

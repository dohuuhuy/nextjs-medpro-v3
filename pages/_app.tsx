import '@assets/styles/app.less'
import { wrapper } from '@store/rootStore'
import { BackTop } from 'antd'
import 'antd/dist/antd.css'
import { DefaultSeo } from 'next-seo'
import React, { Fragment } from 'react'
import { useStore } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import SEO from 'support/next-seo.config'

const MyApp = ({ Component, pageProps }: any) => {
  const Layout = Component?.Layout ?? Fragment
  const store: any = useStore()

  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <PersistGate persistor={store.persistor}>
        <Component {...pageProps} />
      </PersistGate>
      <BackTop />
    </Layout>
  )
}

export default wrapper.withRedux(MyApp)

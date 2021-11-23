import '@assets/styles/app.less'
import { OnTop } from '@components/atoms/OnTop'
import { wrapper } from '@store/rootStore'
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
      <OnTop />
    </Layout>
  )
}

export default wrapper.withRedux(MyApp)

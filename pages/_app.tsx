import { getListPartners } from '@actionStore/rootAction'
import '@assets/styles/app.less'
import { OnTop } from '@components/atoms/OnTop'
import { AppState } from '@store/interface'
import { wrapper } from '@store/rootStore'
import 'antd/dist/antd.css'
import { DefaultSeo } from 'next-seo'
import React, { Fragment, useEffect } from 'react'
import { Provider, useDispatch, useSelector, useStore } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import SEO from 'support/next-seo.config'
import NextNProgress from 'nextjs-progressbar'
import Loading from '@componentsTest/Loading'

const MyApp = ({ Component, pageProps }: any) => {
  const Layout = Component?.Layout ?? Fragment
  const store: any = useStore()
  const dispatch = useDispatch()

  const total = useSelector((state: AppState) => state.total)

  useEffect(() => {
    !total.partnerId && dispatch(getListPartners())
  }, [total.partnerId, dispatch])

  const components = (
    <Layout>
      <DefaultSeo {...SEO} />
      <NextNProgress color='#00b5f1' height={1} />
      {total.loading && <Loading />}
      <Component {...pageProps} />
      <OnTop />
    </Layout>
  )

  const isServer =
    typeof window !== 'undefined' ? (
      <Provider store={store}>
        <PersistGate persistor={store.persistor} loading={null}>
          {components}
        </PersistGate>
      </Provider>
    ) : (
      components
    )

  return isServer
}

export default wrapper.withRedux(MyApp)

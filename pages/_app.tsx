import { getListPartners } from '@actionStore/rootAction'
import '@assets/styles/app.less'
import { OnTop } from '@components/atoms/OnTop'
import { AppState } from '@store/interface'
import { wrapper } from '@store/rootStore'
import 'antd/dist/antd.css'
import { DefaultSeo } from 'next-seo'
import React, { Fragment, useEffect, useState } from 'react'
import { Provider, useDispatch, useSelector, useStore } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import SEO from 'support/next-seo.config'

const MyApp = ({ Component, pageProps }: any) => {
  const Layout = Component?.Layout ?? Fragment
  const store: any = useStore()
  const dispatch = useDispatch()

  const total = useSelector((state: AppState) => state.total)

  useEffect(() => {
    !total.partnerId && dispatch(getListPartners())
  }, [total.partnerId, dispatch])

  const [isGateOpen, setIsGateOpen] = useState(false)
  const _persist = useSelector((state: any) => state._persist)

  useEffect(() => {
    setIsGateOpen(_persist.rehydrated)
  }, [_persist.rehydrated])

  const components = (
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <OnTop />
    </Layout>
  )

  console.log('window :>> ', typeof window)

  const isServer =
    typeof window === 'undefined' ? (
      components
    ) : isGateOpen ? (
      components
    ) : (
      <PersistGate persistor={store.persistor} loading={null}>
        {components}
      </PersistGate>
    )

  return isServer
}

export default wrapper.withRedux(MyApp)

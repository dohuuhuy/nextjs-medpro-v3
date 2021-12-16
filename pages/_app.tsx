import { getListPartners } from '@actionStore'
import '@src/common/assets/styles/app.less'
import { OnTop } from '@components/atoms/OnTop'
import SEO from '@components/SEO/next-seo.config'
import Loading from '@componentsTest/Loading'
import DefaultLayout from '@src/components/templates/Default'
import { wrapper } from '@src/store/rootStore'
import { AppState } from '@store/interface'
import 'antd/dist/antd.css'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import NextNProgress from 'nextjs-progressbar'
import React, { Fragment, useEffect } from 'react'
import { Provider, useDispatch, useSelector, useStore } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import RunLocal from '@src/components/molecules/RunLocal'

const MyApp = ({ Component, pageProps }: any) => {
  const store: any = useStore()
  const router = useRouter()
  const dispatch = useDispatch()

  const Layout = Component?.layout || DefaultLayout || Fragment

  const total = useSelector((state: AppState) => state.total)

  const [loading, setloading] = React.useState<boolean>(false)
  React.useEffect(() => {
    const handleStart = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      setloading(true)
    }
    const handleComplete = () => {
      setloading(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)
  }, [router])

  useEffect(() => {
    !total.partnerId && dispatch(getListPartners())
  }, [total.partnerId, dispatch])

  const components = (
    <Layout>
      <DefaultSeo {...SEO} />
      <NextNProgress color='#00b5f1' height={1} />
      {loading ? <Loading component /> : <Component {...pageProps} />}
      <RunLocal />
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

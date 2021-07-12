import SEO from 'next-seo.config'
import { DefaultSeo } from 'next-seo'
import 'public/assets/styles/app.less'
import React, { useEffect } from 'react'
import '@tntran496/ts-ant-demo/libs/index.css'
import { persistor, wrapper } from '@store/rootStore'
import { checkVersion, setVersion } from '@store/rootStore/handlerStore'
import { useSelector } from 'react-redux'

const MyApp = ({ Component, pageProps }: any) => {
  const LayoutWrapper = Component.Layout || React.Fragment

  const DemoReducer = useSelector(
    (state: { DemoReducer: any }) => state.DemoReducer,
  )

  console.log('DemoReducer :>> ', DemoReducer)

  useEffect(() => {
    setVersion()
  })

  useEffect(() => {
    checkVersion(persistor)
  })

  return (
    <LayoutWrapper>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </LayoutWrapper>
  )
}
export default wrapper.withRedux(MyApp)

import { checkVersion, setVersion } from '@store/rootStore/handlerStore'
import '@tntran496/ts-ant-demo/libs/index.css'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import 'public/assets/styles/app.less'
import React, { useEffect } from 'react'
import { persistor, wrapper } from './../src/store/rootStore'

const MyApp = ({ Component, pageProps }: any) => {
  const LayoutWrapper = Component.Layout || React.Fragment

  useEffect(() => {
    setVersion()
  })

  useEffect(() => {
    checkVersion(persistor)
  })

  return (
    <>
      <DefaultSeo {...SEO} />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </>
  )
}
export default wrapper.withRedux(MyApp)
// export default MyApp

// nếu có sử dụng saga thì mở dòng cmt

import { get_PartnerId } from '@actionStore/index'
import '@assets/styles/app.less'
import { persistor, wrapper } from '@store/rootStore'
import { checkVersion, setVersion } from '@store/rootStore/handlerStore'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const MyApp = ({ Component, pageProps }: any) => {
  const dispatch = useDispatch()

  dispatch(get_PartnerId())

  const LayoutWrapper = Component.Layout || React.Fragment

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

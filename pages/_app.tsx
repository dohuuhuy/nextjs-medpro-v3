import { getListNewsAtHome, get_PartnerId } from '@actionStore/rootAction'
import '@assets/styles/app.less'
import SelectedHospital from '@components/molecules/RunLocal/selectedHospital'
import '@n17dccn172/booking-libs/libs/index.css'
import { persistor, wrapper } from '@store/rootStore'
import { checkVersion, setVersion } from '@store/rootStore/handlerStore'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const MyApp = ({ Component, pageProps }: any) => {
  const LayoutWrapper = Component.Layout || React.Fragment

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(get_PartnerId())
  }, [dispatch])

  useEffect(() => {
    setVersion()
    checkVersion(persistor)
  })

  dispatch(getListNewsAtHome())

  return (
    <>
      <LayoutWrapper>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </LayoutWrapper>
      <SelectedHospital />
    </>
  )
}
export default wrapper.withRedux(MyApp)

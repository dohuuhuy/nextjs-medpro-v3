import { get_PartnerId } from '@actionStore/rootAction'
import '@assets/styles/app.less'
import SelectedHospital from '@components/molecules/RunLocal/selectedHospital'
import '@n17dccn172/booking-libs/libs/index.css'
import { persistor, wrapper } from '@store/rootStore'
import { checkVersion, setVersion } from '@store/rootStore/handlerStore'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const MyApp = ({ Component, pageProps }: any) => {
  const LayoutWrapper = Component.Layout || React.Fragment

  useEffect(() => {
    setVersion()
    checkVersion(persistor)
  })

  const dispatch = useDispatch()

  const list_partners: any = useSelector(
    (state: any) => state.totalData_Reducer.list_partners
  )

  useEffect(() => {
    if (list_partners.length < 1) {
      dispatch(get_PartnerId())
    }
  })

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

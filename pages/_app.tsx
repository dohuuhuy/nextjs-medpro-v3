import { getPartnerId } from '@actionStore/rootAction'
import '@assets/styles/app.less'
import SelectedHospital from '@components/molecules/RunLocal/selectedHospital'
import '@n17dccn172/booking-libs/libs/index.css'
import { AppState } from '@store/interface'
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

  const list_partners = useSelector(
    (state: AppState) => state.totalData_Reducer.list_partners
  )

  useEffect(() => {
    if (list_partners.length < 1) {
      dispatch(getPartnerId())
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

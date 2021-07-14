import { get_PartnerId } from '@actionStore/rootAction'
import '@assets/styles/app.less'
import RunLocal from '@components/molecules/RunLocal'
import SelectedHospital from '@components/molecules/RunLocal/selectedHospital'
import '@medpro/booking-libs/libs/index.css'
import { AppState } from '@store/interface'
import { persistor, wrapper } from '@store/rootStore'
import { checkVersion, setVersion } from '@store/rootStore/handlerStore'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const test_bệnh_viện_trên_local = {
  partnerId: 'bvtest',
  local: true,
}

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

  const partnerId = useSelector<AppState>(
    (state: any) => state.totalData_Reducer.partnerId,
  )

  const hospital_details: any = useSelector<AppState>(
    (state: any) => state.hospital_Reducer.hospital_details,
  )

  if (!partnerId || Object.keys(hospital_details).length < 1) {
    return <RunLocal />
  }
  return (
    <LayoutWrapper>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <SelectedHospital />
    </LayoutWrapper>
  )
}
export default wrapper.withRedux(MyApp)

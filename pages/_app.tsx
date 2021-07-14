import { get_PartnerId, hospital_get_details } from '@actionStore/rootAction'
import '@assets/styles/app.less'
import '@medpro/booking-libs/libs/index.css'
import { run_local_hospital } from '@store/interface'
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
  })

  useEffect(() => {
    const list_partners = JSON.parse(
      window.localStorage.getItem('list_partners') || '',
    )

    const runObject: run_local_hospital = {
      partnerId: 'bvtest',
      listPartners: list_partners,
    }
    const getPartnerId = run_local_hospital(runObject) || 'bvtest'
    dispatch(hospital_get_details(getPartnerId))
  }, [dispatch])

  useEffect(() => {
    setVersion()
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

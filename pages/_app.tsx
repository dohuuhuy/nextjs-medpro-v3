import { get_PartnerId } from '@actionStore/rootAction'
import '@assets/styles/app.less'
import RunLocal from '@components/molecules/RunLocal'
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

  if (!partnerId) {
    return (
      <div>
        null
        <RunLocal />
      </div>
    )
  }
  return (
    <LayoutWrapper>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <RunLocal />
    </LayoutWrapper>
  )
}
export default wrapper.withRedux(MyApp)

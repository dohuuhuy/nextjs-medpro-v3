import { getPartnerId } from '@actionStore/rootAction'
import '@assets/styles/app.less'
import SelectedHospital from '@components/molecules/RunLocal/selectedHospital'
import '@n17dccn172/booking-libs/libs/index.css'
import { AppState } from '@store/interface'
import { persistor, wrapper } from '@store/rootStore'
import { checkVersion, setVersion } from '@store/rootStore/handlerStore'
import { check } from '@utils/checkValue'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import { AppProps } from 'next/app'
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Page } from 'type/page'

type Props = AppProps & {
  Component: Page
}

const MyApp = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout ?? ((page) => page)
  const LayoutWrapper = Component.Layout ?? Fragment

  useEffect(() => {
    setVersion()
    checkVersion(persistor)
  })

  const dispatch = useDispatch()

  const listPartners = useSelector(
    (state: AppState) => state.totalDataReducer.listPartners
  )

  useEffect(() => {
    if (check(listPartners)) {
      dispatch(getPartnerId())
    }
  })

  return (
    <>
      <LayoutWrapper>
        <DefaultSeo {...SEO} />
        {getLayout(<Component {...pageProps} />)}
      </LayoutWrapper>
      <SelectedHospital />
    </>
  )
}

export default wrapper.withRedux(MyApp)

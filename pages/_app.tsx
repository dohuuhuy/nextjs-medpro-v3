import { getPartnerId } from '@actionStore/rootAction'
import '@assets/styles/app.less'
import SelectedHospital from '@components/molecules/RunLocal/selectedHospital'
import '@n17dccn172/booking-libs/libs/index.css'
import { AppState } from '@store/interface'
import { persistor, wrapper } from '@store/rootStore'
import { checkVersion, setVersion } from '@store/rootStore/handlerStore'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import { AppContext } from 'next/app'
import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const MyApp: FC<any> = ({ Component, pageProps }) => {
  const LayoutWrapper = Component.Layout || React.Fragment

  useEffect(() => {
    setVersion()
    checkVersion(persistor)
  })

  const dispatch = useDispatch()

  const listPartners = useSelector(
    (state: AppState) => state.totalDataReducer.listPartners
  )

  useEffect(() => {
    if (listPartners.length < 1) {
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

export const getInitialProps = async ({ Component, ctx }: AppContext) => {
  return {
    pageProps: {
      // Call page-level getInitialProps
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
      // Some custom thing for all pages
      pathname: ctx.pathname
    }
  }
}

export default wrapper.withRedux(MyApp)

import * as ac from '@actionStore/rootAction'
// import { END } from 'redux-saga'
import '@assets/styles/app.less'
import '@medpro/booking-libs/libs/index.css'
import { wrapper } from '@store/rootStore'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import { AppProps } from 'next/app'
import React, { Fragment, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { indexContainer } from 'src/containers'
import { Page } from 'type/page'

type Props = AppProps & {
  Component: Page
  [T: string]: any
}

const MyApp = ({ Component, pageProps, data }: Props) => {
  const getLayout = Component.getLayout ?? ((page) => page)
  const LayoutWrapper = Component.Layout ?? Fragment

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ac.SetParnerId(data.partnerId))
  })

  return (
    <LayoutWrapper info={data.infoHospital}>
      <DefaultSeo {...SEO} />
      {getLayout(<Component {...pageProps} />)}
    </LayoutWrapper>
  )
}

MyApp.getInitialProps = async (ctx: any) => {
  const data = await indexContainer(ctx)

  return { data }
}

export default wrapper.withRedux(MyApp)

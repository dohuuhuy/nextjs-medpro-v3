import * as ac from '@actionStore/rootAction'
import NewsPageDetails from '@components/pages/NewsPage'
import { SagaStore, wrapper } from '@store/rootStore'
import dynamic from 'next/dynamic'
import React from 'react'
import { END } from 'redux-saga'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const TinTucPage = () => {
  return <NewsPageDetails />
}

TinTucPage.Layout = DefaultLayout
export default TinTucPage

export const getServerSideProps = wrapper.getServerSideProps(
  (store: SagaStore) => async (ctx) => {
    const {
      query: { page = 1 }
    } = ctx

    console.log('page :>> ', page)
    const host = ctx?.req?.headers.host
    await store.dispatch(ac.getHospitalDetails(host))

    await store.dispatch(ac.getListNewsBanner())
    await store.dispatch(ac.getCountNewsContent())
    await store.dispatch(ac.getListNewsContent(Number(page)))

    const state = await store.getState().newsReducer.listNewsContent

    await store.dispatch(END)
    await (store as SagaStore).sagaTask?.toPromise()
    return { props: { custom: state } }
  }
)

import * as ac from '@actionStore/rootAction'
import { DetailsNews } from '@components/organisms/DetailNews'
import { SagaStore, wrapper } from '@store/rootStore'
import dynamic from 'next/dynamic'
import React from 'react'
import { END } from 'redux-saga'

const DefaultLayout = dynamic(() => import('@templates/Default'))

const DetailsPostPage = () => {
  return <DetailsNews />
}

DetailsPostPage.Layout = DefaultLayout
export default DetailsPostPage

export const getServerSideProps = wrapper.getServerSideProps(
  (store: SagaStore) => async (ctx: any) => {
    const {
      query: { DetailsPost }
    } = ctx

    console.log('page :>> ', DetailsPost)
    const host = ctx?.req?.headers.host

    console.log('host :>> ', host)
    await store.dispatch(ac.getHospitalDetails(host))

    await store.dispatch(ac.getSameNews())
    await store.dispatch(ac.getListNewsBanner())
    await store.dispatch(ac.getDetailNews(DetailsPost))

    await store.dispatch(END)
    await (store as SagaStore).sagaTask?.toPromise()
    return { props: {} }
  }
)

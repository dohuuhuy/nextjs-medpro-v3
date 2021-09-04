import * as ac from '@actionStore/rootAction'
import { DetailsNews } from '@components/organisms/DetailNews'
import { SagaStore, wrapper } from '@store/rootStore'
import dynamic from 'next/dynamic'
import React from 'react'

const DefaultLayout = dynamic(() => import('@templates/Default'))

const DetailsPostPage = () => {
  return <DetailsNews />
}

DetailsPostPage.Layout = DefaultLayout
export default DetailsPostPage

DetailsPostPage.getInitialProps = wrapper.getInitialPageProps(
  (store: SagaStore) =>
    async ({ ctx }: any) => {
      const {
        query: { DetailsPost }
      } = ctx

      await store.dispatch(ac.getSameNews())
      await store.dispatch(ac.getListNewsBanner())
      await store.dispatch(ac.getDetailNews(DetailsPost))
    }
)

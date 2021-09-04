import * as ac from '@actionStore/rootAction'
import NewsPageDetails from '@components/pages/NewsPage'
import { SagaStore, wrapper } from '@store/rootStore'
import dynamic from 'next/dynamic'
import React from 'react'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const TinTucPage = () => {
  return <NewsPageDetails />
}

TinTucPage.Layout = DefaultLayout
export default TinTucPage

TinTucPage.getInitialProps = wrapper.getInitialPageProps(
  (store: SagaStore) =>
    async ({ ctx }: any) => {
      const {
        query: { page = 1 }
      } = ctx

      store.dispatch(ac.getListNewsBanner())
      store.dispatch(ac.getCountNewsContent())
      store.dispatch(ac.getListNewsContent(Number(page)))
    }
)

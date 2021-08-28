import * as ac from '@actionStore/rootAction'
import NewsPageDetails from '@components/pages/NewsPage'
import { SagaStore, wrapper } from '@store/rootStore'
import dynamic from 'next/dynamic'
import React from 'react'
import { END } from 'redux-saga'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const TinTucPage = () => {
  // const router = useRouter()
  // const { page } = router.query
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(ac.getListNewsBanner())

  //   dispatch(ac.getCountNewsContent())
  // })

  // useEffect(() => {
  //   dispatch(ac.getListNewsContent(Number(page)))
  // }, [page])

  return <NewsPageDetails />
}

TinTucPage.Layout = DefaultLayout
export default TinTucPage

export const getServerSideProps = wrapper.getServerSideProps(
  (store: SagaStore) => async () => {
    await store.dispatch(ac.getListNewsBanner())

    store.dispatch(END)
    await (store as SagaStore).sagaTask?.toPromise()
    return { props: { custom: 'custom' } }
  }
)

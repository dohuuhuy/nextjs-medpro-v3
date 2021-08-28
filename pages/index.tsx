import { wrapper, SagaStore } from '@store/rootStore'
import dynamic from 'next/dynamic'
import * as ac from '@actionStore/rootAction'
import { END } from 'redux-saga'
const HomeLayout = dynamic(() => import('@templates/Home'))

const HomePage = () => {
  return null
}

HomePage.getInitialProps = wrapper.getInitialPageProps(
  (store: SagaStore) => async (ctx: any) => {
    const host = ctx?.req?.headers.host
    await store.dispatch(ac.getHospitalDetails(host))

    store.dispatch(END)
    await (store as SagaStore).sagaTask?.toPromise()
  }
)

HomePage.Layout = HomeLayout
export default HomePage

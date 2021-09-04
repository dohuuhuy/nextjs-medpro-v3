// import * as ac from '@actionStore/rootAction'
import { SagaStore, wrapper } from '@store/rootStore'
import dynamic from 'next/dynamic'
const HomeLayout = dynamic(() => import('@templates/Home'))

const HomePage = () => {
  return null
}

HomePage.getInitialProps = wrapper.getInitialPageProps(
  (_store: SagaStore) => async (_ctx: any) => {
    // const host = ctx?.req?.headers.host
    // await store.dispatch(ac.getHospitalDetails(host))
  }
)

HomePage.Layout = HomeLayout
export default HomePage

import * as ac from '@actionStore/rootAction'
import { SagaStore, wrapper } from '@store/rootStore'
import dynamic from 'next/dynamic'
const HomeLayout = dynamic(() => import('@templates/Home'))

const HomePage = () => {
  return null
}

HomeLayout.getInitialProps = wrapper.getInitialPageProps(
  (store: SagaStore) => async () => {
    store.dispatch(ac.getHospitalDetails('medpro'))
  }
)

HomePage.Layout = HomeLayout
export default HomePage

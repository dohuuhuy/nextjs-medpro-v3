import { SagaStore, wrapper } from '@store/rootStore'
import dynamic from 'next/dynamic'
import { indexContainer } from 'src/containers'
const HomeLayout = dynamic(() => import('@templates/Home'))

const HomePage = () => {
  return null
}

HomePage.getInitialProps = wrapper.getInitialPageProps(
  (store: SagaStore) => async (ctx: any) => {
    indexContainer({ store, ctx })
  }
)

HomePage.Layout = HomeLayout
export default HomePage

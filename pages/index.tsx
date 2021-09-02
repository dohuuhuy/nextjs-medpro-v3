import * as ac from '@actionStore/rootAction'
import { SagaStore, wrapper } from '@store/rootStore'
import dynamic from 'next/dynamic'
import { END } from 'redux-saga'
const HomeLayout = dynamic(() => import('@templates/Home'))

const HomePage = () => {
  return null
}

HomePage.getInitialProps = wrapper.getInitialPageProps(
  (store: SagaStore) => async (context: any) => {
    const host = context.ctx?.req?.headers.host
    store.dispatch(ac.getHospitalDetails(host))
    store.dispatch(END)
    await (store as SagaStore).sagaTask?.toPromise()
  }
)

// export const getStaticProps = wrapper.getStaticProps(
//   async ({ store }: SagaStore) => {
//     console.log('store :>> ', store)

//     // const host = context.ctx?.req?.headers.host
//     // if (!store.getState().rdcExample.placeholderData) {
//     //   store.dispatch(ac.getHospitalDetails(host))
//     //   store.dispatch(END)
//     // }
//     // await store.sagaTask?.toPromise()
//   }
// )

HomePage.Layout = HomeLayout
export default HomePage

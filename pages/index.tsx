import * as ac from '@actionStore/rootAction'
// import { AppState } from '@store/interface'
import { wrapper } from '@store/rootStore'
// import { check } from '@utils/checkValue'
import dynamic from 'next/dynamic'
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
const HomeLayout = dynamic(() => import('@templates/Home'))

const HomePage = () => {
  // const dispatch = useDispatch()

  // const newsAndEvent = useSelector(
  //   (state: AppState) => state.newsReducer.newsAndEvent
  // )

  // const listPatient = useSelector(
  //   (state: AppState) => state.userReducer.listPatient
  // )

  // const token = useSelector(
  //   (state: AppState) => state.userReducer.userInfo.token
  // )

  // // useEffect(() => {
  // //   if (check(newsAndEvent)) {
  // //     dispatch(getNewsAndEvent())
  // //   }
  // //   if (check(listPatient)) {
  // //     token && dispatch(ListPatientRequest())
  // //   }
  // // })

  return null
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(ac.getNewsAndEvent())
    return { props: { custom: 'custom' } }
  }
)

HomePage.Layout = HomeLayout
export default HomePage
